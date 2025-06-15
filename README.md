
# 🚀 Marvel Comics Web App

A lightweight Next.js-based application to showcase Marvel characters and comics using the ComicVine API.

---

## 🔧 Basic Startup (Quick Start)

1. **Clone the repository**
   ```bash
   git clone https://github.com/mahuasarkar/marvelcomics.git
   cd marvelcomics
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the app locally**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

> ℹ️ Make sure you have the correct versions of Node.js (v22.16.0) and npm (v10.5.2). If not, see detailed instructions below.

---

## 📚 Full Setup Guide

### ✅ Prerequisites

1. **Visual Studio Code**
   - Download: https://code.visualstudio.com

2. **Node.js (v22.16.0) & npm (v10.5.2)**
   - Check installed versions:
     ```bash
     node -v
     npm -v
     ```
   - If not installed: https://nodejs.org/en
   - If wrong version:
     - **Windows**: https://github.com/coreybutler/nvm-windows/releases
     - **macOS/Linux**:
       ```bash
       curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
       nvm install 22.16.0
       nvm use 22.16.0
       npm install -g npm@10.5.2
       ```

---

### ⚙️ Project Setup

1. **Create Next.js App**
   ```bash
   npx create-next-app@latest
   ```

   > Choose:
   - TypeScript: No
   - ESLint: Yes
   - Tailwind: No
   - `src/` dir: No
   - App Router: No
   - Turbopack: No
   - Custom Alias: No

2. **Navigate to project**
   ```bash
   cd marvelcomics
   ```

3. **Install SCSS**
   ```bash
   npm install sass
   npm list sass
   ```

4. **Install essential packages**
   ```bash
   npm install next react react-dom
   ```

5. **Add scripts to `package.json`**
   ```json
   "scripts": {
     "dev": "next dev",
     "build": "next build",
     "start": "next start"
   }
   ```

6. **Run App**
   ```bash
   npm run dev
   ```

---

### 📦 Additional Packages

```bash
npm install @fontsource/roboto @fontsource/rozha-one
npm install @apollo/client graphql
```

---

## 🔌 ComicVine API

- API Key: 52273998fec94ff32bf5468b50e168a9ada75837

**Sample cURL**
```bash
curl --location --request GET 'https://comicvine.gamespot.com/api/volumes/?api_key=APIKEY' \
--header 'Accept: application/json' \
--header 'User-Agent: YourAppName/1.0' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'api_key=YOUR_API_KEY' \
--data-urlencode 'format=json'
```

### API Notes

- `start_year` filter unreliable
- Name search like "spiderman" works
- Publisher ID filter fails
- Max limit is 100, use pagination
- Occasionally API errors may occur

---

## 🔧 GitHub Setup

1. **Install Git**
   https://git-scm.com/downloads/win

2. **Verify Git**
   ```bash
   git --version
   ```

3. **Configure Git**
   ```bash
   git config --global user.name "Your Name"
   git config --global user.email "your@email.com"
   ```

4. **Initialize Repository**
   ```bash
   git init
   ```

5. **Add Remote**
   ```bash
   git remote add origin https://github.com/mahuasarkar/marvelcomics.git
   ```

6. **Stage, Commit & Push**
   ```bash
   git add .
   git commit -m "Initial commit with Marvel website"
   git branch -M main
   git push -u origin main
   ```

> Or use GitHub Desktop: https://desktop.github.com/download/

---

## 📁 Suggested Structure

- `/components/HeroSection.js`
- `/components/ComicGallery.js`
- `/graphql/queries.js`
- `/styles/*.scss`

---

## 📌 Deployment Note

Include any additional environment variables or deployment steps as needed, depending on your hosting provider (e.g. Vercel).

---

## 🧠 Project Overview & Feature Flow

### 1. Homepage
- **Stack**: React (JSX), Next.js, SCSS
- Built based on the provided Figma UI design.

### 2. See Marvel Heroes Section
- Clicking on a hero card triggers a modal popup.
- Modal displays detailed character info.

### 3. Comic (Movie) Section
- Data fetched from ComicVine API.
- **Stack**: ComicVine API, ACF (WordPress), GraphQL.
- Lists comics involving **Peter Parker**.
- Only those series that **began exclusively in 2022** (initial load).

### 4. Backend with GraphQL
- **Stack**: ACF + WPGraphQL.
- Villains added to backend:  
  `Doctor Octopus, Carnage, Chameleon, Electro, Green Goblin, Hobgoblin, Kraven the Hunter, Venom, Shocker`.
- Data stored in `srdevtest1` (external WP site).

### 5. Dropdown Filter by Villain
- A dropdown UI fetches villain list from GraphQL backend.
- Filters comics displayed under the Comic section based on selected villain.

---

## 📝 Additional Notes

1. **Comic Section vs. Movie Section**
   - Assumed the "Movie Section" right below the banner is actually the **Comic Section**.
   - Based on the ComicVine data and instructions to display **series from 2022**.

2. **Initial Load Data**
   - First load shows **only Peter Parker** comics from 2022.

3. **Filtering Logic**
   - Filtering by villain sometimes fails to return data for 2022.
   - To improve UX, initially show Peter Parker comics; load villain-filtered data when available.

4. **Dropdown Placement**
   - No dropdown UI shown in design.
   - Assumed to be positioned above the comic section (under the banner).


---

## 📄 Assignment Summary

As per the assignment instructions:

1. **Homepage Development**
   - Built using **Next.js**, **React (JSX)**, and **SCSS**
   - Based on the provided Figma design

2. **See Marvel Heroes Section**
   - Implemented functionality where clicking a Marvel Hero opens a modal
   - Modal displays comprehensive character details

3. **Comic Section (In place of Movie section)**
   - Used **ComicVine API**, **ACF**, and **GraphQL**
   - Developed a list of comics featuring **Spider-Man (Peter Parker)** whose series began exclusively in **2022**

4. **Villain Dropdown Filter**
   - Implemented a dropdown UI and configured **ACF** fields in WordPress for the following villains:  
     `Doctor Octopus, Carnage, Chameleon, Electro, Green Goblin, Hobgoblin, Kraven the Hunter, Venom, Shocker`
   - Successfully created and stored villain data via ACF.
   - Attempted to fetch this data using **GraphQL**, but encountered access limitations:
     - `.htaccess` and `functions.php` access is restricted.
     - External endpoint (`domain.graphql`) returns permission errors.
   - The frontend dropdown and supporting structure are in place.
   - The GraphQL connection can be completed once access is granted or an alternative method is identified.

5. **GraphQL Integration for Filtering**
   - The dropdown was intended to dynamically filter comics based on selected villain using GraphQL.
   - Integration is pending due to access restrictions, but the implementation is straightforward once resolved.

> ✅ All core functionalities have been implemented as per the assignment  
> ⚠️ The only pending item is the **final GraphQL filtering** connection due to API Authntication Access limitations.  

> This is documented in the README. All other tasks are completed.

