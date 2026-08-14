# @jupiter-lab/react (Next.js + MUI)

A lightweight, reusable React components for Next.js + Material UI (MUI) projects.

## Installation
```bash
npm install @jupiter-lab/react
```

## Add Components
Use the Jupiter Lab CLI to add components to your project:
```bash
npx @jupiter-lab/react add <component>
```
Example:
```bash
npx @jupiter-lab/react add custom-link
```
The CLI downloads the selected component and adds it directly to your project.

## TypeScript & JavaScript
You can specify the language when adding a component.

**TypeScript:**
```bash
npx @jupiter-lab/react add custom-link --tsx
```

**JavaScript:**
```bash
npx @jupiter-lab/react add custom-link --jsx
```

The CLI downloads the selected component and adds it directly to your project.

> If no language is specified, Jupiter Lab automatically detects your project's language and adds the appropriate version.

## Usage
After adding `custom-link`, import and use it in your Next.js application:

```js
import { CustomLink } from "./components/ui/custom-link"; 

export default function App() { 
    return ( 
        <CustomLink href="/home">
            Home
        </CustomLink> 
    ); 
};
```

## Customization
`CustomLink` supports standard `MUI Button` props along with additional active-state styling options.

### Active Style
Use `activeSx` to customize the appearance when the current route is active:
```js
<CustomLink 
    href="/home" 
    activeSx={{ 
        color: "#5400ee", 
        fontWeight: 700, 
    }}
> 
    Home 
</CustomLink>
```

### Active Class
Use activeClass to apply a CSS class when the link is active:
```js
<CustomLink
    href="/home"
    activeClass="active-link"
>
    Home
</CustomLink>
```
CSS:
```css
.active-link {
    color: #5400ee;
    font-weight: 700;
    text-decoration: underline;
}
```

### MUI Props
You can also use standard `MUI Button` props:
```js
    <CustomLink
        href="/home"
        variant="contained"
        color="primary"
    >
        Home
    </CustomLink>
```

`CustomLink` automatically detects the `current route` and applies `activeSx` or `activeClass` when the link matches the current pathname.

## Supported Languages
Jupiter Lab supports both:

- TypeScript — `.tsx`
- JavaScript — `.jsx`

Use `--tsx` or `--jsx` to explicitly select a version.

## Why Jupiter Lab?
- Reusable React components
- Built for Next.js + MUI
- TypeScript and JavaScript support
- Simple CLI-based installation
- Easy to customize
- Install only the components you need
- Automatic project language detection component

## Requirements

- Node.js 18+
- React 18+
- Next.js 14+
- Material UI (MUI) 5+
- A Next.js project

## License
MIT © Jupiter Lab

## Author
### Sejin Ahmed
Creator & Maintainer - `Jupiter Lab`