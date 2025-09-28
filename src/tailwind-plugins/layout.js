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
  });
}