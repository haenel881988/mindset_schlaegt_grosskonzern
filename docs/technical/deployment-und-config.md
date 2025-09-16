# Technische Dokumentation: mindset-schlaegt-grosskonzern

Dieses Dokument dient als zentrale "Source of Truth" für alle technischen Konfigurationen, Deployment-Prozesse und strategischen Entscheidungen bezüglich der Infrastruktur dieses Projekts.

## 1. Tech-Stack & Domain

- **Framework:** Astro
- **Styling:** Tailwind CSS
- **Deployment-Plattform:** Vercel
- **Finale Domain:** `https://www.simon-haenel.com`

## 2. Vercel Deployment Konfiguration

Für das Deployment auf Vercel wird der offizielle `@astrojs/vercel`-Adapter verwendet. Er wurde mit `npx astro add vercel -y` installiert. Diese Integration passt die `astro.config.mjs` automatisch an, um den `output` auf `'server'` zu setzen, was die Kompatibilität mit den Serverless- und Edge-Funktionen von Vercel sicherstellt.

## 3. SEO-Automatisierung & Konfiguration

### 3.1. Sitemap
Das `@astrojs/sitemap`-Paket (`npx astro add sitemap -y`) generiert bei jedem Build automatisch eine `sitemap-index.xml`. Damit dies korrekt funktioniert, wurde die finale Produktions-URL in `astro.config.mjs` hinterlegt:

```javascript
// astro.config.mjs
export default defineConfig({
  site: 'https://www.simon-haenel.com',
  // ... weitere Konfigurationen
});
```

### 3.2. robots.txt
Die Datei `public/robots.txt` steuert die Web-Crawler. Sie gewährt vollen Zugriff und verweist explizit auf die Sitemap unter der finalen Domain.
