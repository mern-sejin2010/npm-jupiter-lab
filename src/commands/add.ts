import { Command } from 'commander';
import installComponent from '../actions/install-component.js';
export default function addCommand (program: Command) {
    program
        .command('add <component>')
        .description('Add a component')
        .action(installComponent);
};