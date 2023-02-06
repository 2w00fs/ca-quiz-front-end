import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    test: {
        environment: 'jsdom',
        globals: true
    }
})


/*
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    server: {port:process.env.PORT},
    plugins: [react()],
    resolve: {
        alias: {
          '@': path.resolve(__dirname, './src'),
        },
    },
    test: {
        environment: 'jsdom',
        globals: true
    }
})
*/