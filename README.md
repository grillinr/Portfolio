# Nathan Grilliot - Portfolio

A modern, responsive portfolio website built with React, Vite, and shadcn/ui components. Features a dark theme with blue primary colors, project showcase, blog with markdown support, and an admin panel for easy content management.

## Features

- **Responsive Design**: Mobile-friendly layout with dark theme
- **Project Showcase**: Display projects with GitHub links, images, and videos
- **Blog System**: Markdown-based blog posts with admin panel
- **Admin Panel**: Easy content management for posts and projects
- **Modern UI**: Built with shadcn/ui components and Tailwind CSS

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- React Router
- React Markdown
- Lucide Icons

## Getting Started

1. Clone the repository
2. Install dependencies: `pnpm install`
3. Start development server: `pnpm dev`
4. Build for production: `pnpm build`

## Admin Panel

Access the admin panel at `/admin` to manage blog posts and projects. Content is stored in localStorage for demo purposes.

## Deployment

This project is configured for deployment on Vercel. The admin panel works with Vercel's serverless functions.

## License

MIT

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
