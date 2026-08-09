import { Command } from 'commander';
import installComponent from '../actions/install-component.js';
import detectLanguage from '../utilities/detect-language.js';
export default function addCommand (program: Command) {
    program
        .command('add <component>')
        .description('Install and configure a component from the @jupiter-lab/react registry.')
        .option('--tsx', 'Install the TypeScript version.')
        .option('--jsx', 'Install the JavaScript version.')
        .action(async (component, options) => {
            if (options.tsx && options.jsx) {
                throw new Error(
                    'You cannot use --tsx and --jsx together!'
                );
            }
            const language = options.tsx ? 'tsx' : options.jsx ? 'jsx' : detectLanguage();
            await installComponent(component, language);
        });
};