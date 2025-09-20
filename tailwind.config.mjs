import type { Config } from 'tailwindcss';

export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
	],
	theme: {
		extend: {
			colors: {
				'background-primary': '#000000',
				'background-secondary': '#111111',
				'text-primary': '#EAEAEA',
				'text-secondary': '#A0A0A0',
				'border-default': '#27272a',
				'accent': '#2563eb',
				'accent-hover': '#3b82f6',
				'error': '#dc2626',
				// Surfaces (helle Flächen) für White Cards
				'surface': '#ffffff',
				'text-on-surface': '#111111',
				'border-surface': '#e5e7eb',
			},
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
			},
		},
	},
	plugins: [],
} satisfies Config;
