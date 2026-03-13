/**
 *
 * @param {import('puppeteer-core').Browser} browser
 */
export default async function extractHackerNews(browser) {
  const page = await browser.newPage();

  await page.goto("https://news.ycombinator.com/");

  await page.type('input[name="q"]', "lightpanda");
  await page.keyboard.press("Enter");

  await page.waitForFunction(
    () => {
      return document.querySelector(".Story_container") != null;
    },
    { timeout: 2 * 5000 },
  );

  // Loop over search results to extract data.
  const res = await page.evaluate(() => {
    return Array.from(document.querySelectorAll(".Story_container")).map(
      (row) => {
        return {
          // Extract the title.
          title: row.querySelector(".Story_title span").textContent,
          // Extract the URL.
          url: row.querySelector(".Story_title a").getAttribute("href"),
          // Extract the list of meta data.
          meta: Array.from(
            row.querySelectorAll(
              ".Story_meta > span:not(.Story_separator, .Story_comment)",
            ),
          ).map((row) => {
            return row.textContent;
          }),
        };
      },
    );
  });

  console.log(res);

  await page.close();
}
