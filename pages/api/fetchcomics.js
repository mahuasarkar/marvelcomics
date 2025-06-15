export default async function handler(req, res) {
  let { character = 'name%3ASpider-Man' } = req.query;
  const filter = character;
  const limit = 100;
  let filteredComics = [];

  async function fetchAndFilter(offset) {
    try {
        const response = await fetch(
            `https://comicvine.gamespot.com/api/volumes/?api_key=${process.env.COMICVINE_API_KEY}&filter=${filter}&offset=${offset}&format=json`
        );
        const text = await response.text();
        const data = JSON.parse(text);

        // exception in case of no data
        if (!data?.results || data.results.length === 0) {
            console.warn(`Empty results at offset ${offset}`);
            return [];
        }

        // as per the doc requirement filter and show 2022 year spiderman id: 31 comics data
        // where comicvine API filter for start_year is broken and not working
        if (filter === 'name%3ASpider-Man') {
            return data.results.filter( 
            (comic) => comic.start_year === '2022' && comic.publisher?.id === 31
            );
        }else{
            return data.results.filter( // since there are a lot of dropdown villan options where 2022 year and villan does not match
                (comic) => comic.publisher?.id === 31
            );
        }
        
    } catch (err) {
        console.error(`Error at offset ${offset}:`, err);
        return [];
    }
  }

  try {
    const initialData = await fetchAndFilter(0);
    filteredComics.push(...initialData);

    if (filteredComics.length < 8) {
      const totalResponse = await fetch(
        `https://comicvine.gamespot.com/api/volumes/?api_key=${process.env.COMICVINE_API_KEY}&filter=${filter}&offset=0&format=json`
      );
      const totalText = await totalResponse.text();
      const parsedTotal = JSON.parse(totalText);
      const totalResults = parsedTotal.number_of_total_results || 0;
      const maxPages = Math.ceil(totalResults / limit);

      // max limit is 100 , adding offset to get upto 8 cards max
      for (let i = 1; i < maxPages && filteredComics.length < 8; i++) {
        const moreComics = await fetchAndFilter(i * limit);
        filteredComics.push(...moreComics);
      }
    }

    // Retry block: if still 0, retry up to 3 more times. comicvine exception handler
    if (filteredComics.length === 0) {
      console.warn('No results found, retrying up to 3 times...');
      let retryCount = 0;
      while (retryCount < 3 && filteredComics.length === 0) {
        const retryComics = await fetchAndFilter(retryCount * limit);
        filteredComics.push(...retryComics);
        retryCount++;
      }
    }

    res.status(200).json(filteredComics.slice(0, 8));
  } catch (err) {
    console.error('Error fetching comics:', err.message);
    res.status(500).json({ error: 'Failed to fetch comics', details: err.message });
  }
}
