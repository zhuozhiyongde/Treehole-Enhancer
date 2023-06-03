import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import monkey, { cdn } from 'vite-plugin-monkey';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        monkey({
            entry: 'src/main.js',
            userscript: {
                namespace: 'npm/vite-plugin-monkey',
                match: ['http*://treehole.pku.edu.cn/*'],
                author: 'Arthals',
                description: '为树洞添加复制功能',
                name: 'Treehole Enhancer',
                version: '0.0.1',
                icon: 'https://cdn.arthals.ink/Arthals-mcskin.png',
                license: 'GPL-3.0 License'
                
            },
            build: {
                externalGlobals: {
                    vue: cdn.jsdelivr('Vue', 'dist/vue.global.prod.js'),
                },
            },
        }),
    ],
});
