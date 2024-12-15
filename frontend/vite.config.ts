import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
	base: '/',
	plugins: [react()],
	preview: {
		port: 8080,
		strictPort: true,
	},
	server: {
		port: 8080,
		strictPort: true,
		host: true,
		origin: 'http://0.0.0.0:8080',
	},
	resolve: {
		alias: {
			'@config': path.resolve(__dirname, './src/config'),
			'@components': path.resolve(__dirname, './src/components'),
			'@pages': path.resolve(__dirname, './src/pages'),
			'@types': path.resolve(__dirname, './src/types'),
			'@constants': path.resolve(__dirname, './src/constants'),
			'@hooks': path.resolve(__dirname, './src/hooks'),
		},
	},
});
