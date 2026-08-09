#!/usr/bin/env node
import { Command } from 'commander';
import addCommand from './commands/add.js';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const pkg = require('../package.json');
const program = new Command();
program
    .name('@jupiter-lab/react')
    .description(`@jupiter-lab/react - v${pkg.version}`)
    .version(pkg.version);
addCommand(program);
program.parse();