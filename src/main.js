import { createApp } from 'vue';
import App from './App.vue';

const Apps = createApp(App);
const root = document.createElement('div');
document.body.appendChild(root);
Apps.mount(root);
