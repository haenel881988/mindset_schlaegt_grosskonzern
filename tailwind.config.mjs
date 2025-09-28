import { designTokens } from './src/tokens.js';
import utilitiesPlugin from './src/tailwind-plugins/utilities.js';
import buttonsPlugin from './src/tailwind-plugins/buttons.js';
import cardsPlugin from './src/tailwind-plugins/cards.js';
import formsPlugin from './src/tailwind-plugins/forms.js';
import layoutPlugin from './src/tailwind-plugins/layout.js';

export default {
    content: [
        './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
        './public/**/*.html'
    ],
    theme: {
        extend: {
            colors: designTokens.colors,
            fontFamily: designTokens.fontFamily,
            spacing: designTokens.spacing,
        },
    },
    plugins: [
        // Modular plugin architecture für bessere Wartbarkeit
        function ({ addUtilities, addComponents }) {
            // Führe alle Plugin-Funktionen aus
            utilitiesPlugin({ addUtilities });
            buttonsPlugin({ addComponents });
            cardsPlugin({ addComponents });
            formsPlugin({ addComponents });
            layoutPlugin({ addComponents });
        },
    ],
};