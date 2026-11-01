# Tortrixland

Tienda web de rangos, kits y llaves del servidor de Minecraft TORTRIXLAND.

Son tres archivos estáticos (`index.html`, `style.css`, `script.js`): se puede publicar tal cual en GitHub Pages.

## Cambiar precios o productos

Todo el catálogo está en `script.js`, en la constante `CATALOG`. Cada producto tiene:

- `name`, `price`, `img` (imagen del rango) y `color` (color del nombre).
- `every`: cada cuántos días se reclama (`0` = una sola vez). `once: true` para pagos únicos.
- `items`: lo que trae, con `it(objeto, cantidad, stacks, variante)`. Ej.: `it('gapple', 64, 4)` son 4 stacks de 64 manzanas doradas.

Objetos disponibles: `kit`, `gapple`, `notch`, `totem`, `rocket`, `web`, `telas`, `wool`, `shears`, `strength`, `punch`, `coin`, `key` (variantes `comun`, `op`, `legendaria`, `kits`, `tortrix`).

El número de WhatsApp y el enlace de Discord están arriba del archivo (`WA_NUMBER`, `DISCORD_URL`).
