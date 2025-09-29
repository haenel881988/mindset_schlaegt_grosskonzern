/**
 * Zentrale Design Tokens für mindset-schlaegt-grosskonzern
 * Single Source of Truth für alle Farb- und Design-Tokens
 * 
 * Diese Datei ist die einzige Quelle der Wahrheit für Design-Tokens
 * und wird sowohl von Tailwind als auch von CSS Custom Properties verwendet.
 */

export const designTokens = {
  colors: {
    // Hintergrund (Dark Mode)
    'background-primary': '#000000',
    'background-secondary': '#111111',
    
    // Text (Dark Mode)
    'text-primary': '#EAEAEA',
    'text-secondary': '#A0A0A0',
    
    // Border (Dark Mode)
    'border-default': '#27272a',
    
    // Akzent (Governance-konform)
    accent: '#2563eb',
  'accent-hover': '#1d4ed8',
    
    // Semantic Colors
    error: '#dc2626',
    success: '#16a34a',
    
    // Surfaces (Hell) für Cards
    surface: '#ffffff',
    'text-on-surface': '#111111',
    'text-on-surface-secondary': '#4b5563',
    'border-surface': '#e5e7eb',
    
    // Interactive Elements
    'interactive-secondary': '#1f2937',
    'interactive-secondary-hover': '#374151',
    'interactive-outline-border': 'rgba(255,255,255,0.7)',
    'interactive-outline-hover': 'rgba(255,255,255,0.08)',
    
    // Legacy support (deprecated)
    primary: '#000000',
    secondary: '#111111',
  },
  
  fontFamily: {
    sans: ['Inter', 'system-ui', 'sans-serif'],
  },
  
  spacing: {
    // Rhythm-basierte Abstände für bessere Konsistenz
    'rhythm-xs': '0.5rem',
    'rhythm-sm': '1rem', 
    'rhythm-md': '1.5rem',
    'rhythm-lg': '2rem',
    'rhythm-xl': '3rem',
  },
  
  animation: {
    // Motion Tokens für konsistente Animationen
    'transition-fast': '150ms ease-out',
    'transition-medium': '200ms ease-out',
    'transition-slow': '300ms ease-out',
  }
};

/**
 * CSS Custom Properties für Theme-Support
 * Wird in global.css verwendet
 */
export const cssCustomProperties = {
  ':root': {
    '--color-primary': designTokens.colors['background-primary'],
    '--color-secondary': designTokens.colors['background-secondary'],
    '--color-accent': designTokens.colors.accent,
  '--color-accent-hover': designTokens.colors['accent-hover'],
    '--color-text-primary': designTokens.colors['text-primary'],
    '--color-text-secondary': designTokens.colors['text-secondary'],
    '--color-border-default': designTokens.colors['border-default'],
    '--color-error': designTokens.colors.error,
    '--color-success': designTokens.colors.success,
    '--color-surface': designTokens.colors.surface,
    '--color-text-on-surface': designTokens.colors['text-on-surface'],
    '--color-border-surface': designTokens.colors['border-surface'],
  }
};

export default designTokens;