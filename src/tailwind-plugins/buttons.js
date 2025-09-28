/**
 * Buttons Plugin für mindset-schlaegt-grosskonzern
 * Definiert alle Button-Varianten basierend auf Design Tokens
 */
export default function buttonsPlugin({ addComponents }) {
  addComponents({
    // Primary Button (Governance-konform)
    '.btn-primary': {
      '@apply inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-lg bg-accent text-white transition-all duration-200 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-background-secondary disabled:opacity-50 disabled:cursor-not-allowed hover:bg-accent-hover': {},
    },
    
    // Secondary Button
    '.btn-secondary': {
      '@apply inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-lg bg-interactive-secondary text-text-primary hover:bg-interactive-secondary-hover transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-background-secondary': {},
    },
    
    // Outline Button mit verbesserter Accessibility
    '.btn-outline': {
      '@apply inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-lg border border-interactive-outline-border text-text-primary bg-transparent hover:bg-interactive-outline-hover transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-background-secondary disabled:opacity-50 disabled:cursor-not-allowed': {},
    },
    
    // Contrast Button (Alias für Outline)
    '.btn-contrast': {
      '@apply btn-outline': {},
    },
    
    // Legacy Button Support
    '.button': {
      '@apply btn-primary': {},
    },
  });
}