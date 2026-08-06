#!/usr/bin/env node
import { Command } from 'commander';
import initCommand from './commands/init.js';
import addCommand from './commands/add.js';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const pkg = require('../package.json');
const program = new Command();
program
    .name('@jupiter-lab/react')
    .description(`@jupiter-lab/react - v${pkg.version}`)
    .version(pkg.version);
initCommand(program);
addCommand(program);
program.parse();