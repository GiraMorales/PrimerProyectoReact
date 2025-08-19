# 🎮 FreeToGame Explorer

Este es un proyecto desarrollado con **React**, donde se consulta la API pública de [FreeToGame](https://www.freetogame.com/api-doc) para mostrar una lista de juegos gratuitos disponibles para PC.

## 🚀 Descripción

El usuario puede:

- Ver una **lista de juegos** (con imagen y título).
- Hacer clic en cualquier juego para ver su **ficha individual**.
- En la ficha, se muestra el **título** y se incrusta el propio juego en un `<iframe>`.
- También se proporciona un enlace directo para abrir el juego en otra pestaña.

Este proyecto demuestra el uso de los principales conceptos de React: **JSX, componentes, props, estado, efectos, rutas y hooks personalizados**.

## 🧠 Tecnologías usadas

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/) para bundling y desarrollo rápido
- [React Router DOM](https://reactrouter.com/) para navegación entre páginas
- API pública: [https://www.freetogame.com/api](https://www.freetogame.com/api)

## 🧪 Funcionalidades técnicas

- ✅ Responsive
- ✅ Buenas prácticas de HTML y CSS
- ✅ Uso mínimo de 3 estados (`games`, `loading`, `error`)
- ✅ Uso de `useEffect` para peticiones a APIs
- ✅ Navegación mediante `React Router` con parámetros dinámicos (`/game/:id`)
- ✅ `iframe` para embebido del juego
- ✅ Hook personalizado para manejar el scroll (`useBodyClassOnPath()`)

## 🛠 Cómo ejecutarlo localmente

1. Clona el repositorio:
   ```bash
   git clone https://github.com/GiraMorales/PrimerProyectoReact.git
   cd React
   ```

## Instalar dependecias

npm install

## Inicia el servidor

npm run dev

## Activar manualmente cors-anywhere (funciona temporalmente)

Abre esta URL en tu navegador:
👉 https://cors-anywhere.herokuapp.com/corsdemo

Haz clic en “Request temporary access to the demo server”

Luego vuelve a recargar tu app (localhost:5173) y funcionará unos minutos
