/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}',
		'./src/content/**/*.{md,mdx}',
	],
	theme: {
		extend: {
			 colors: {
				brand: {
					orange: '#EA580C', // Tailwind orange-600
					dark: '#7C2D12', // Tailwind orange-900
				}
			}
		},
	},
	plugins: [],
}
