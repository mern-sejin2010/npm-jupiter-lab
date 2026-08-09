import ora from 'ora';
import path from 'path';
import fs from 'fs-extra';
import { execSync } from 'child_process';
import getRegistryItem from './fetch-registry.js';
export default async function installComponent (
    component: string,
    language: 'tsx' | 'jsx',
) {
    const spinner = ora(`Installing ${component}...`).start();
    try {
        const item = await getRegistryItem(component);
        // install dependencies if needed
        if (item.dependencies?.length) {
            console.log('Installing dependencies...');
            execSync(`npm install ${item.dependencies.join(' ')}`, { stdio: 'inherit' });
        }
        const targetDir = path.resolve(process.cwd(), item.target);
        await fs.ensureDir(targetDir);
        const files = item.files.filter((file) => file.extension === language);
        if (!files) {
            throw new Error(
                `No ${language} version found for ${component}!`
            );
        }
        // write file
        for (const file of files) {
            const target = path.join(targetDir, `${item.name}.${file.extension}`);
            await fs.writeFile(target, file.content);
            const relativePath = path.relative(process.cwd(), target);
            spinner.succeed(`Created: ${relativePath}`);
            spinner.succeed(`${item.title} installed!`);
        };
    } catch (error) {
        spinner.fail('Installation failed!');
        throw error;
    }
};