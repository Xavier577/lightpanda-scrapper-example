"use strict";

import runner from "./runner.js";

process.loadEnvFile();

export default async function main() {
  await runner({
    host: process.env.LIGHTPANDA_HOST,
    port: Number(process.env.LIGHTPANDA_PORT),
    scripts: process.argv.slice(2),
  });

  // const proc = await lightpanda.serve(lpConfig);
  // const browser = await puppeteer.connect(puppeteerConfig);
  // const page = await browser.newPage();
  // //const page = await context.newPage();
  // console.log("CDP connection is working");
  // // Go to Wikipedia page.
  // await page.goto("https://en.wikipedia.org/wiki/Web_browser");
  // // Extract all links from the references list of the page.
  // const reflist = await page.evaluate(() => {
  //   return Array.from(document.querySelectorAll(".references a.external")).map(
  //     (row) => {
  //       return row.getAttribute("href");
  //     },
  //   );
  // });
  // // Display the result.
  // console.log("all reference links", reflist);
  // // Disconnect Puppeteer.
  // await page.close();
  // //await context.close();
  // await browser.disconnect();
  // proc.stdout.destroy();
  // proc.stderr.destroy();
  // proc.kill();
}

main();
