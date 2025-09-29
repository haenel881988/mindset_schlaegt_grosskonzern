/**
 * Layout Plugin für mindset-schlaegt-grosskonzern
 * Definiert Layout-Helfer und strukturelle Komponenten
 */
export default function layoutPlugin({ addComponents }) {
  addComponents({
    // Content Width Constraints für bessere Lesbarkeit
    '.content-narrow': {
      '@apply max-w-3xl mx-auto': {},
    },
    
    // Prose Width für optimale Lesbarkeit (Empfehlung aus Problem-Statement)
    '.content-prose': {
      '@apply max-w-prose mx-auto': {},
    },
    
    // Wide Content
    '.content-wide': {
      '@apply max-w-7xl mx-auto': {},
    },
    
    // Image Frame mit verbessertem Shadow
    '.img-frame': {
      '@apply rounded-xl border border-border-default/60 shadow-lg transition-shadow duration-200': {},
      '&:hover': {
        '@apply shadow-xl': {},
      },
    },
    
    // Section Spacing für konsistenten Rhythm
    '.section-spacing': {
      '@apply py-rhythm-lg lg:py-rhythm-xl': {},
    },
    
    // Container mit responsive Padding
    '.container-responsive': {
      '@apply mx-auto px-4 sm:px-6 lg:px-8': {},
    },
    
    // Flexbox Utilities
    '.flex-center': {
      '@apply flex items-center justify-center': {},
    },
    
    // Grid Gaps mit konsistenten Spacing
    '.grid-gap-responsive': {
      '@apply gap-4 md:gap-6 lg:gap-8': {},
    },

    // FAQ Accordion Styles
    '.faq-accordion': {
      '@apply space-y-4': {},
    },
    '.faq-item': {
      '@apply overflow-hidden rounded-xl border border-border-default/60 bg-background-secondary/60 transition-colors duration-200': {},
      '&[open]': {
        '@apply border-accent/60 bg-background-secondary/80': {},
      },
    },
    '.faq-summary': {
      '@apply flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-4 text-left text-lg font-semibold text-text-primary outline-none transition-colors duration-200': {},
      '&:hover': {
        '@apply bg-accent/10': {},
      },
      '&:focus-visible': {
        '@apply ring-2 ring-accent ring-offset-2 ring-offset-background-primary': {},
      },
    },
    '.faq-content': {
      '@apply border-t border-border-default/60 px-5 py-4 text-base leading-relaxed text-text-primary/80': {},
    },
  });
}