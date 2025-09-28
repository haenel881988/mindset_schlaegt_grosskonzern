/**
 * Utilities Plugin für mindset-schlaegt-grosskonzern
 * Definiert wiederkehrende Utility-Klassen
 */
export default function utilitiesPlugin({ addUtilities }) {
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
    '.text-muted': {
      color: 'rgba(234, 234, 234, 0.75)',
    },
    // Verbesserung: Bessere Textbreite für Lesbarkeit
    '.text-readable': {
      maxWidth: '65ch', // Optimale Zeilenlänge für Lesbarkeit
      '@apply mx-auto': {},
    },
  });
}