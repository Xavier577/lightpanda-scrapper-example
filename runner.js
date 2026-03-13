import { lightpanda } from "@lightpanda/browser";
import puppeteer from "puppeteer-core";

/**
 *
 * @param {{ host: string; port: number; scripts: string[] }} config
 */
export default async function runner(config) {
  const { host, port } = config;

  const proc = await lightpanda.serve({ host, port });

  const browserWSEndpoint = `ws://${config.host}:${config.port}`;
  const browser = await puppeteer.connect({ browserWSEndpoint });

  for (const script of config.scripts) {
    try {
      const { default: entrypoint } = await import(`./scripts/${script}.js`);

      if (typeof entrypoint === "function") {
        await entrypoint(browser);
      }
    } catch (error) {
      if (error.code === "ERR_MODULE_NOT_FOUND") {
        console.warn("script not found, skipping....");
      } else {
        console.error(error);
      }
    }
  }

  await browser.disconnect();

  proc.stdout.destroy();
  proc.stderr.destroy();
  proc.kill();
}
