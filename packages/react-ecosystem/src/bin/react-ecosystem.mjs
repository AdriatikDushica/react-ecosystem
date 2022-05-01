#!/usr/bin/env zx
import { $ } from "zx";
import { createServer } from "vite";

const prompts = require("prompts");
prompts.override(require("yargs").argv);
const signale = require("signale");

// const response = await prompts([
//   {
//     type: 'select',
//     name: 'command',
//     message: 'Choose a command',
//     choices: [
//       { title: 'serve', value: 'serve' },
//       { title: 'generate feature', value: 'generate-feature' },
//       { title: 'generate project', value: 'generate-project' },
//     ],
//   }
// ]);
//
// signale.success("TODO: execute command ", response.command);

// disable zx's default logger
$.verbose = false;

console.clear();

const pwd = (await $`pwd`).stdout.trim();

const server = await createServer({
  configFile: require.resolve("react-ecosystem/src/bin/vite.config.ts"),
  root: pwd,
  server: {
    port: 3000,
  },
});

await server.listen();

server.printUrls();
