import fs from 'fs-extra';
import { registryURL } from '../registry-url.js';
const json = {
    registries: {
        '@jp-lab': `${registryURL}/registry/{name}.json`,
    },
};
export default async function initProject () {
    await fs.writeJSON(
        'jupiter-lab.json', 
        json, 
        { 
            spaces: 2,
        },
    );
    console.log('✓ Jupiter Lab initialized');
};
// it has no job