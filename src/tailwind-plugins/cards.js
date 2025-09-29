/**
 * Cards Plugin für mindset-schlaegt-grosskonzern
 * Definiert Card-Komponenten mit verbesserter Animation
 */
export default function cardsPlugin({ addComponents }) {
  addComponents({
    // Basis Card mit subtiler Hover-Animation
    '.card-base': {
      '@apply relative flex h-full min-h-[280px] flex-col justify-between gap-6 rounded-xl border border-border-surface bg-surface p-8 text-text-on-surface shadow-lg transition-transform duration-200 ease-out md:min-h-[320px]': {},
      '&:hover': {
        '@apply -translate-y-1 shadow-2xl shadow-blue-500/10': {},
      },
    },
    
    // Card Grid Layout
    '.card-grid': {
      '@apply grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-10': {},
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
      '@apply flex items-center justify-between gap-3 border-b border-border-surface pb-4': {},
    },
    '.card-title': {
      '@apply text-2xl font-semibold text-text-on-surface': {},
    },
    '.card-badge': {
      '@apply inline-flex items-center justify-center rounded-md bg-accent/10 px-3 py-1 text-sm font-bold tracking-wider uppercase text-accent': {},
    },
    '.card-content': {
      '@apply flex-1 space-y-4 text-base leading-relaxed text-text-on-surface': {},
    },
    
    // Card Footer
    '.card-footer': {
      '@apply mt-6 pt-4 border-t border-border-surface': {},
    },
  });
}