import { registryURL } from '../registry-url.js';
interface RegistryFile {
    extension: 'tsx' | 'jsx';
    content: string;
};
interface RegistryItem {
    name: string;
    title: string;
    target: string;
    files: RegistryFile[];
    dependencies?: string[];
    author?: string;
};
export default async function getRegistryItem (
    component: string
): Promise<RegistryItem> {
    const url = `${registryURL}/registry/next/${component}`;  
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(
            `Failed to fetch registry item: ${response.status} ${response.statusText}`
        );
    }
    return await response.json();
};