# joseluisariashc.github.io
Portafolio profesional de Jose Luis Arias: desarrollo backend con .NET y automatización de procesos con n8n.

Hecho con Vue 3.5, Vite 8, TypeScript y SCSS (BEM).

## Desarrollo

Requiere Node `^22.18.0 || >=24.12.0` (recomendado 24 LTS).

```sh
npm install
npm run dev      # http://localhost:5173/ (es) y http://localhost:5173/en/ (en)
npm run build    # comprueba tipos y genera dist/
npm run lint
npm run format
```

## Publicación

Cada vez que se sube algo a `main`, el flujo [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) compila la web y la publica en GitHub Pages: https://joseluisariashc.github.io/ (y `/en/`). También se puede lanzar a mano desde la pestaña Actions.

Requisito: en Settings → Pages, «Source» tiene que estar en «GitHub Actions».
