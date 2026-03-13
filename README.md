# lightpanda-scrapper-example

Web scraping examples using [Lightpanda](https://github.com/nichochar/lightpanda-node) headless browser and Puppeteer.

## Prerequisites

- Node.js (with `process.loadEnvFile()` support, v21.7+)
- The `@lightpanda/browser` binary is auto-downloaded on `npm install`

## Setup

```bash
npm install
cp .env.example .env
```

## Usage

Pass script names as arguments to run them:

```bash
node index.js extractHackerNews
node index.js extractWikiRef
node index.js extractHackerNews extractWikiRef  # run multiple scripts
```

Scripts live in the `scripts/` directory. Each script exports a default async function that receives a Puppeteer `Browser` instance.

## Available Scripts

- `extractHackerNews` — searches Hacker News for "lightpanda" and extracts results
- `extractWikiRef` — extracts external reference links from the Wikipedia "Web browser" article
