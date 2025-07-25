import path from "path"
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    server: {
        host: "192.168.1.105", // yoki "0.0.0.0"
        port: 5173,

    },
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.jsx'],
            refresh: true,
        }),
        react(),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'resources/js'),
            '@images': path.resolve(__dirname, 'storage/app/private/assets/'),
            '@shared': path.resolve(__dirname, 'resources/js/components/shared'),
            '@ui': path.resolve(__dirname, 'resources/js/components/ui'),
        }
    }
});
