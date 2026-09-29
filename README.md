# Ancizar Torres — Portafolio

Portafolio personal interactivo construido con React, TypeScript y Vite.

## Requisitos

- Node.js 22 o superior.
- npm.

## Desarrollo local

```powershell
npm install
npm run dev
```

## Verificación de producción

```powershell
npm run lint
npm run build
npm run preview
```

## Agregar o editar proyectos

El contenido de `src/data/projects.ts` es la fuente de datos única de los proyectos destacados.

1. Agrega un objeto que cumpla la interfaz `Project`.
2. Usa un `slug` único, `category` (`producto`, `laboratorio` o `aprendizaje`) y la URL pública del repositorio.
3. Escribe una descripción comprobable y declara tecnologías solo si están confirmadas.
4. Elige un `visual` para personalizar acento e ilustración; `visualIndex` y `visualLabel` personalizan el arte de tarjeta.
5. Si la adición requiere una categoría o interacción nueva, amplía `ProjectCategory` y los filtros en `src/App.tsx`.

Las tarjetas, las etiquetas, los filtros y el contador del menú se generan a partir de esa configuración.

## Interacciones y accesibilidad

- Filtros accesibles por categoría con indicadores de selección.
- Selector de tema oscuro/claro que recuerda la preferencia local.
- Navegación compacta en móvil, operable con teclado.
- Movimiento reducido para usuarios que activan `prefers-reduced-motion`.
- Enlaces a repositorios públicos y a repositorios relacionados.

## Publicación en GitHub Pages

`.github/workflows/deploy.yml` compila y publica el sitio cuando se actualiza `main`. La base de Vite se configura con `BASE_PATH` para usar el subpath del repositorio.

La publicación del primer despliegue puede requerir la configuración **Settings → Pages → Build and deployment → Source: GitHub Actions**. Una vez habilitada, el workflow genera y despliega el sitio automáticamente.

## Stack

- React y TypeScript.
- Vite.
- Lucide React.
- GitHub Actions y GitHub Pages.
