import { Command } from 'commander';
import initProject from '../actions/init-project.js';
export default function initCommand (program: Command) {
    program
        .command('init')  
        .description('Initialize @jupiter-lab/react')
        .action(initProject);
};