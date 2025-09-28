/**
 * Cards Plugin für mindset-schlaegt-grosskonzern
 * Definiert Card-Komponenten mit verbesserter Animation
 */
export default function cardsPlugin({ addComponents }) {
  addComponents({
    // Basis Card mit subtiler Hover-Animation
    '.card-base': {
      '@apply bg-surface border border-border-surface rounded-xl p-8 text-text-on-surface shadow-sm transition-all duration-200': {},
      // Verbesserung: Subtile Y-Translation bei Hover
      '&:hover': {
        '@apply shadow-2xl shadow-black/10 -translate-y-1': {},
      },
    },
    
    // Card Grid Layout
    '.card-grid': {
      '@apply grid grid-cols-1 md:grid-cols-3 gap-8': {},
    },
    
    // Card mit besserem Fokus-State für Accessibility
    '.card-interactive': {
      '@apply card-base cursor-pointer focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-background-primary': {},
      '&:focus-visible': {
        '@apply outline-none': {},
      },
    },
    
    // Card Header für konsistente Strukturierung
    '.card-header': {
      '@apply mb-4 pb-4 border-b border-border-surface': {},
    },
    
    // Card Footer
    '.card-footer': {
      '@apply mt-6 pt-4 border-t border-border-surface': {},
    },
  });
}