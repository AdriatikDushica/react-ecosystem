#!/usr/bin/env zx
const prompts = require('prompts');
prompts.override(require('yargs').argv);
const signale = require('signale');

console.clear()

const response = await prompts([
  {
    type: 'select',
    name: 'command',
    message: 'Choose a command',
    choices: [
      { title: 'generate feature', value: 'generate-feature' },
      { title: 'generate project', value: 'generate-project' },
    ],
  }
]);

signale.success("TODO: execute command ", response.command);