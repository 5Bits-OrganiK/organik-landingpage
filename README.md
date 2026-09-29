# OrganiK Landing Page

Landing page estatica para OrganiK construida con HTML, CSS y JavaScript simple.

## Estructura

- `index.html`: contenido principal de la landing.
- `styles.css`: estilos visuales y responsive.
- `main.js`: cambio de idioma, menu mobile y previews de videos.
- `public/`: imagenes, favicon y recursos estaticos.

## Ejecutar localmente

Puedes abrir `index.html` directamente en el navegador.

Si quieres servirla por HTTP, usa cualquier servidor estatico apuntando a la raiz del proyecto. Por ejemplo:

```bash
npx serve .
```

## Deploy

El workflow de Azure Static Web Apps publica la raiz del repositorio como contenido estatico y no ejecuta build de Angular.
