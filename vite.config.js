import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
	base: '/',
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},

	build: {
		outDir: 'dist',
		assetsDir: 'assets',
		sourcemap: false,
		cssCodeSplit: true,

		rollupOptions: {
			output: {
				entryFileNames: 'assets/js/[name].js',
				chunkFileNames: 'assets/js/[name].js',

				assetFileNames: ({ name }) => {
					if (!name) return 'assets/[name][extname]'

					if (/\.(css)$/.test(name)) {
						return 'assets/css/[name][extname]'
					}

					if (/\.(png|jpe?g|svg|gif|webp)$/.test(name)) {
						return 'assets/images/[name][extname]'
					}

					return 'assets/[name][extname]'
				},
			},
		},

		chunkSizeWarningLimit: 800,
	},
})
