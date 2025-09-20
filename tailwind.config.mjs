export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
	],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				// Governance-konforme Tokens
				primary: '#000000',
				secondary: '#111111',
				'text-primary': '#FFFFFF',
				'text-secondary': '#A0A0A0',
				'border-default': '#27272a',
				accent: '#2563eb',
				'accent-hover': '#3b82f6',
				error: '#dc2626',
				success: '#16a34a',

				// Aliases für bestehende Nutzung (Rückwärtskompatibilität)
				'background-primary': '#000000',
				'background-secondary': '#111111',
			},
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
			},
		},
	},
	plugins: [
		function({ addUtilities, addComponents }) {
			// Governance Utilities
			addUtilities({
				'.text-shadow-headline': {
					textShadow: '1px 1px 3px rgba(0,0,0,0.5)'
				},
				'.sr-only': {
					position: 'absolute',
					width: '1px',
					height: '1px',
					padding: '0',
					margin: '-1px',
					overflow: 'hidden',
					clip: 'rect(0,0,0,0)',
					whiteSpace: 'nowrap',
					border: '0'
				}
			});

			// Governance Components
			addComponents({
				'.btn-primary': {
					'@apply inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-lg bg-accent text-white transition-all duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent focus-visible:ring-offset-black disabled:opacity-50 disabled:cursor-not-allowed hover:bg-accent-hover': {}
				},
				'.btn-secondary': {
					'@apply inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus-visible:ring-2 focus-visible:ring-accent': {}
				},
				'.btn-outline': {
					'@apply inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-lg border border-current text-white bg-transparent hover:bg-white/10 transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-accent disabled:opacity-50 disabled:cursor-not-allowed': {}
				},
				'.card-base': {
					'@apply bg-secondary border border-border-default rounded-xl p-8 hover:shadow-2xl hover:shadow-blue-500/10 transition-transform duration-200': {}
				}
			});
		}
	],
};
