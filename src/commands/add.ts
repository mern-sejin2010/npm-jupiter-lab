import { Command } from 'commander';
import installComponent from '../actions/install-component.js';
export default function addCommand (program: Command) {
    program
        .command('add <component>')
        .description('Install and configure a component from the @jupiter-lab/react registry.')
        .action(installComponent);
};