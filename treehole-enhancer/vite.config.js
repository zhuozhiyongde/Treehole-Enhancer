import { defineConfig } from 'vite';
import monkey from 'vite-plugin-monkey';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        monkey({
            entry: 'src/main.js',
            userscript: {
                icon: 'https://vitejs.dev/logo.svg',
                namespace: 'npm/vite-plugin-monkey',
                match: ['https://treehole.pku.edu.cn/*'],
                author: 'Arthals',
                description: 'A userscript for treehole.pku.edu.cn',
                version: '1.0.0',
            },
        }),
    ],
});
