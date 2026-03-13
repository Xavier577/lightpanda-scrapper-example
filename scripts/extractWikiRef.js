/**
 *
 * @param {import('puppeteer-core').Browser} browser
 */
export default async function extractWikipediaReferences(browser) {
  const page = await browser.newPage();
  // Go to Wikipedia page.
  await page.goto("https://en.wikipedia.org/wiki/Web_browser");
  // Extract all links from the references list of the page.
  const reflist = await page.evaluate(() => {
    return Array.from(document.querySelectorAll(".references a.external")).map(
      (row) => {
        return row.getAttribute("href");
      },
    );
  });

  console.log("all reference links", reflist);

  await page.close();
}
