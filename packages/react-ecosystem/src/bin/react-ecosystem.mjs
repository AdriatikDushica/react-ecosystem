#!/usr/bin/env zx
import { $ } from "zx";
import { createServer } from "vite";
import { Command } from "commander";

// remove all the logs produces by zx
$.verbose = false;
// make commander.js work with zx
process.argv.shift();

/**
 * Start the developement server using vite.
 *
 * @param port
 * @returns {Promise<void>}
 */
const startDev = async ({ port }) => {
  const pwd = (await $`pwd`).stdout.trim();

  const server = await createServer({
    configFile: require.resolve("react-ecosystem/src/bin/vite.config.ts"),
    root: pwd,
    server: {
      port,
      host: true,
    },
  });

  await server.listen();

  server.printUrls();
};

const program = new Command();

program
  .name("react-ecosystem")
  .description(
    "react-ecosystem CLI useful for serving a react app, running tests, and building for production"
  )
  .version("0.8.0");

program
  .command("dev")
  .description(
    "run the react-ecosystem dev server with Hot Module Replacement (HMR)"
  )
  .option("-p, --port <port>", "service port", "3000")
  .action(async (option) => {
    await startDev({ port: option.port });
  });

program.parse();
