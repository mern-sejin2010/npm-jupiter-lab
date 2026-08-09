import fs from 'node:fs';
import path from 'node:path';
export default function detectLanguage (): 'tsx' | 'jsx' {
    const cwd = process.cwd();
    if (
        fs.existsSync(path.join(cwd, 'tsconfig.json')) ||
        fs.existsSync(path.join(cwd, 'tsconfig.jsonc'))
    ) {
        return 'tsx';
    }
    return 'jsx';
};