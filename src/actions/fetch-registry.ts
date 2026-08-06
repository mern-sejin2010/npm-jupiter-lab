import { registryURL } from '../registry-url.js';
export default async function getRegistryItem (component: string) {
    const url = `${registryURL}/registry/${component}.json`;  
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(
            `Failed to fetch registry item: ${response.status} ${response.statusText}`
        );
    }
    return await response.json();
};