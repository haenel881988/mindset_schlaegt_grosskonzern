/**
 * Forms Plugin für mindset-schlaegt-grosskonzern
 * Definiert konsistente Formular-Elemente mit verbesserter Accessibility
 */
export default function formsPlugin({ addComponents }) {
  addComponents({
    // Form Field Container
    '.form-field': {
      '@apply space-y-2': {},
    },
    
    // Form Label mit besserer Accessibility
    '.form-label': {
      '@apply block text-sm font-medium text-text-secondary': {},
      // Verbindung mit Input für Screen Reader
      '&[for]': {
        '@apply cursor-pointer': {},
      },
    },
    
    // Form Input mit verbessertem Fokus-State
    '.form-input': {
      '@apply w-full bg-background-primary border-2 border-border-default rounded-lg px-4 py-3 text-text-primary placeholder:text-text-secondary/70 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background-primary transition-colors': {},
      
      // Error State
      '&[aria-invalid="true"]': {
        '@apply border-error focus:border-error focus:ring-error': {},
      },
      
      // Disabled State
      '&:disabled': {
        '@apply opacity-50 cursor-not-allowed bg-background-secondary': {},
      },
    },
    
    // Textarea (erbt von form-input)
    '.form-textarea': {
      '@apply form-input min-h-[120px]': {},
      resize: 'vertical', // Native CSS anstatt Tailwind-Klasse
    },
    
    // Form Error Message
    '.form-error': {
      '@apply text-sm text-error mt-1 flex items-center gap-1': {},
    },
    
    // Form Help Text
    '.form-help': {
      '@apply text-sm text-text-secondary mt-1': {},
    },
    
    // Form Success Message
    '.form-success': {
      '@apply text-sm text-success mt-1 flex items-center gap-1': {},
    },
  });
}