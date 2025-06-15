export default async function handler(req, res) {
    //As per API documentation fetching the spiderman comics with this particular filter | filter=name%3ASpider-Man
    let { character = 'name%3ASpider-Man' } = req.query;
    let filter = character;
    let limit = 100;
    let offset = 0;
    let filteredComics = [];

    try {
        const initialResponse = await fetch(
        `https://comicvine.gamespot.com/api/volumes/?api_key=${process.env.COMICVINE_API_KEY}&filter=${filter}&offset=${offset}&format=json`
        );
        const initialData = await initialResponse.json();

        const spiderManId = initialData.results[0]?.publisher?.id;

        //noticed that the spiderman comics has publisher id as 31, checking that on the very first data
        if (!spiderManId || spiderManId !== 31) {
            return res.status(404).json({ error: 'Spider-Man not found' });
        }

        //even though the results limit is max upto 100
        //calculating maxPages to fetch next comics as per the filter
        const totalResults = initialData.number_of_total_results;
        const maxPages = Math.ceil(totalResults / limit);
        //console.log({maxPages});
        //keeping a limit of 8 max to be fetched
        for (let i = 0; i < maxPages && filteredComics.length < 8; i++) {
        const paginatedOffset = i * limit;
        //console.log({ paginatedOffset });

        const response = await fetch(
            `https://comicvine.gamespot.com/api/volumes/?api_key=${process.env.COMICVINE_API_KEY}&filter=${filter}&offset=${paginatedOffset}&format=json`
        );

        //To resolve => Error fetching comics: Unexpected end of JSON input
        const text = await response.text();
        let data;
        try {
            data = JSON.parse(text);
        } catch (parseError) {
            console.error(`JSON parse error at offset ${paginatedOffset}:`, parseError);
            console.error(`Raw response: ${text}`);
            break; // Exit loop on invalid response
        }

        //data empty issue
        if (!data || !data.results || data.results.length === 0) {
            console.warn(`Empty results at offset ${paginatedOffset}`);
            break;
        }

        //console.log(data.results);
        //As per the API documentation start_year not getting filterd, added new logic here for 2022 year fetch
        const filteredBatch = data.results.filter(
            (comic) => comic.publisher?.id === 31 && comic.start_year === '2022'
        );

        filteredComics.push(...filteredBatch);
            //console.log(filteredComics);
            if (filteredComics.length >= 8) break;
        }

        //console.log('✅ Final Comics:', filteredComics);
        res.status(200).json(filteredComics.slice(0, 8));
    } catch (err) {
        console.error('Error fetching comics:', err.message);
        res.status(500).json({ error: 'Failed to fetch comics', details: err.message });
    }
}
