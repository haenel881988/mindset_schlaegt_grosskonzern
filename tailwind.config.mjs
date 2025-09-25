export default {
    content: [
        './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    ],
    theme: {
        extend: {
            colors: {
                // Governance-konforme Tokens
                primary: '#000000',
                secondary: '#111111',
                'background-primary': '#000000',
                'background-secondary': '#111111',
                surface: '#ffffff',
                'text-primary': '#EAEAEA',
                'text-secondary': '#A0A0A0',
                'text-on-surface': '#111111',
                'text-on-surface-secondary': '#4b5563',
                'border-default': '#27272a',
                'border-surface': '#e5e7eb',
                accent: '#3b82f6',
                'accent-hover': '#60a5fa',
                error: '#dc2626',
                success: '#16a34a',
                'interactive-secondary': '#1f2937',
                'interactive-secondary-hover': '#374151',
                'interactive-outline-border': 'rgba(255,255,255,0.7)',
                'interactive-outline-hover': 'rgba(255,255,255,0.08)',
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [
        function ({ addUtilities, addComponents }) {
            // Governance Utilities
            addUtilities({
                '.text-shadow-headline': {
                    textShadow: '1px 1px 3px rgba(0,0,0,0.5)',
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
                    border: '0',
                },
            });

            // Governance Components
            addComponents({
                // Buttons
                '.btn-primary': {
                    '@apply inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-lg bg-accent text-white transition-all duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent focus-visible:ring-offset-background-primary disabled:opacity-50 disabled:cursor-not-allowed hover:bg-accent-hover': {},
                },
                '.btn-secondary': {
                    '@apply inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-lg bg-interactive-secondary text-text-primary hover:bg-interactive-secondary-hover transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background-primary': {},
                },
                '.btn-outline': {
                    '@apply inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-lg border border-interactive-outline-border text-text-primary bg-transparent hover:bg-interactive-outline-hover transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background-primary disabled:opacity-50 disabled:cursor-not-allowed': {},
                },
                '.btn-contrast': {
                    '@apply btn-outline': {},
                },
                '.button': {
                    '@apply btn-primary': {},
                },
                // Cards
                '.card-base': {
                    '@apply bg-surface border border-border-surface rounded-xl p-8 text-text-on-surface shadow-sm hover:shadow-2xl hover:shadow-black/10 transition-transform duration-200': {},
                },
                // Layout helpers
                '.card-grid': {
                    '@apply grid grid-cols-1 md:grid-cols-3 gap-8': {},
                },
                '.content-narrow': {
                    '@apply max-w-3xl': {},
                },
                '.img-frame': {
                    '@apply rounded-xl border border-border-default/60 shadow-lg': {},
                },
                // Form patterns
                '.form-field': {
                    '@apply space-y-2': {},
                },
                '.form-label': {
                    '@apply block text-sm font-medium text-text-secondary': {},
                },
                '.form-input': {
                    '@apply w-full bg-background-primary border-2 border-border-default rounded-lg px-4 py-3 text-text-primary placeholder:text-text-secondary/70 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background-primary transition-colors': {},
                },
            });
        },
    ],
};