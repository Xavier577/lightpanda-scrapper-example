"use strict";

import runner from "./runner.js";

process.loadEnvFile();

export default async function main() {
  await runner({
    host: process.env.LIGHTPANDA_HOST,
    port: Number(process.env.LIGHTPANDA_PORT),
    scripts: process.argv.slice(2),
  });
}

main();
