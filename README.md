# Portafolio de Ricardo Reyes Gomez

Portafolio personal de **Ricardo Reyes Gomez (RyuheiRG)**. Presenta su perfil como desarrollador de software Full Stack, sus habilidades, proyectos y certificaciones, con un enfoque en código limpio, seguridad y arquitectura de aplicaciones.

## Contenido

- **Sobre mí:** presentación y enfoque profesional.
- **Lenguajes y tecnologías:** JavaScript, TypeScript, Python, C++, React, Node.js, Astro, Docker, bases de datos y herramientas de desarrollo.
- **Proyectos:** enlaces a repositorios destacados, descripción y tecnologías utilizadas.
- **Certificaciones y cursos:** formación en sistemas operativos, redes, IoT y fundamentos de AWS.

## Tecnologías

- [Astro](https://astro.build/) para generar un sitio estático.
- [React](https://react.dev/) para la navegación interactiva.
- [Tailwind CSS](https://tailwindcss.com/) para los estilos.
- TypeScript y [Sharp](https://sharp.pixelplumbing.com/) para soporte de tipos y optimización de imágenes.

El sitio prioriza el contenido estático y limita la hidratación de React a la barra de navegación.

## Requisitos

- Node.js `>=22.12.0`
- pnpm `12.6.0` (versión declarada en `package.json`)

## Desarrollo local

Desde la raíz del repositorio:

```sh
pnpm install
pnpm dev
```

Abre [http://localhost:4321](http://localhost:4321) para ver el sitio durante el desarrollo.

## Comandos

| Comando        | Descripción                             |
| -------------- | --------------------------------------- |
| `pnpm dev`     | Inicia el servidor de desarrollo.       |
| `pnpm check`   | Ejecuta `astro check` y `tsc --noEmit`. |
| `pnpm build`   | Genera el sitio estático en `dist/`.    |
| `pnpm preview` | Sirve localmente la versión generada.   |

## Estructura del proyecto

```text
src/
├── assets/                 # Fotografías, logotipo e iconos
├── components/
│   ├── react/              # Componentes interactivos de React
│   ├── sections/           # Secciones del portafolio en Astro
│   └── ui/                 # Componentes visuales reutilizables
├── config/site.ts          # Metadatos y configuración del sitio
├── layouts/BaseLayout.astro # Plantilla HTML, SEO y estilos globales
├── pages/                  # Página principal, 404, robots.txt y sitemap
└── styles/global.css       # Tokens de diseño y estilos base
```

## Despliegue

El proyecto genera un sitio estático y está configurado para GitHub Pages en la ruta `/TemporalPortfolioWeb/`. La URL pública configurada es [https://RyuheiRG.github.io/TemporalPortfolioWeb/](https://RyuheiRG.github.io/TemporalPortfolioWeb/).

Para generar los archivos de producción:

```sh
pnpm build
```

El resultado se crea en `dist/`. El workflow de GitHub Actions compila con Astro y publica ese directorio en GitHub Pages. La configuración del sitio y su ruta base están definidas en `astro.config.mjs` y `src/config/site.ts`.
