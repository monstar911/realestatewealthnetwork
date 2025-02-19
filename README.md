Installing Tailwind CSS v4 in Vue 3 + Vite
Step 1: Create a Vue 3 Project with Vite
If you don’t already have a Vue 3 project set up, create one using Vite:

npm create vite@latest my-vue-app -- --template vue
cd my-vue-app
npm install
Step 2: Install Tailwind CSS v4
Run the following command to install Tailwind CSS v4 along with its Vite plugin:

npm install -D tailwindcss @tailwindcss/vite
Step 3: Configure Vite to Use Tailwind CSS
Edit vite.config.ts (or vite.config.js if using JavaScript) and add Tailwind CSS as a plugin:

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
plugins: [
vue(),
tailwindcss(),
],
})
Step 4: Add Tailwind to Your Styles
Edit the CSS file src/style.css and add:

@import 'tailwindcss';
Step 5: Import Tailwind CSS in main.ts
Check your src/main.ts and ensure your style.css is imported:

import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

createApp(App).mount('#app')
Step 6: Start Your Development Server
Run the Vite development server:

npm run dev
