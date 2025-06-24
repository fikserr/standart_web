import path from "path"
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    server: {
<<<<<<< HEAD
        host:"192.168.1.110", // yoki "0.0.0.0"
=======
        host:"192.168.1.106", // yoki "0.0.0.0"
>>>>>>> cd7cf1561cf2e6df5bacd1a0a9e985114eb24c5d
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
