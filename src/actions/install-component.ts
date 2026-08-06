import ora from 'ora';
import path from 'path';
import fs from 'fs-extra';
import { execSync } from 'child_process';
import getRegistryItem from './fetch-registry.js';
export default async function installComponent (component: string) {
    const spinner = ora(`Installing ${component}...`).start();
    try {
        const item = await getRegistryItem(component);
        // install dependencies if needed
        if (item.dependencies?.length) {
            console.log('Installing dependencies...');
            execSync(`npm install ${item.dependencies.join(' ')}`, { stdio: 'inherit' });
        }
        // write file
        for (const file of item.files) {
            const target = path.resolve(process.cwd(), file.target);
            await fs.ensureDir(path.dirname(target));
            await fs.writeFile(target, file.content);
            spinner.succeed(`${item.title} installed`);
        };
    } catch (error) {
        spinner.fail('Installation failed.');
        throw error;
    }
};