# Gatsby + Redux

* Estructura base de React para escalar sitios de gran embergadura. 
* Creado a partir de Gatsby. 
* Store base en Redux con dos simples acciones (Dark mode + Counter).

Repositorio:
```
git@github.com:blackweaver/gatsby-typescript-sass-redux.git
```
```
npm install
gatsby develop -p 8000
```

Sitio en producción:
https://gatsby-redux.netlify.app

# Gatsby

Framework libre que genera contenido estático. PWA (Progressive Web App) basado en React que nos ayuda a desarrollar sitios ágilmente. Sólo HTML, CSS, datos y Javascript crítico para que el sitio cargue lo más rápido posible. No genera contenido durante tiempo de ejecución, sino durante tiempo de construcción. Una vez cargado, react se hace cargo.
Crea una estructura básica por defecto y provee plugins con todo tipo de herramientas. También podemos crear nuestros propios plugins.

* Velocidad
* Optimización para los motores de búsqueda.
* Seguridad
* GraphQL

Comparativa con otros CMS: https://www.gatsbyjs.org/features/cms/

### GraphQL: 

Lenguaje de consultas, permite comunicar clientes y servidores. Evita múltiples consultas al servidor.
Nos permite desarrollar una API de forma rápida, natural e independiente del acceso a base de datos o en algunos casos
conectarnos a un CMS. Soporta gran cantidad e lenguajes y clientes.

http://localhost:8000/___graphql

**CMSs**
Contentful, Drupal, WordPress, etc.

**Markdown**
Documentation, Posts, etc.

**Data**
APIs, Databases, YAML, JSON, CSV, etc.

#### Cargando un archivo markdown con GraphQL

```
npm install --save gatsby-source-filesystem (leer archivos externos)

plugins: [
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `markdown-pages`,
      path: `${__dirname}/src/markdown-pages`,
    },
  },
]
```

```
npm install --save gatsby-transformer-remark (formatea un markdown como HTML)

plugins: [
  `gatsby-transformer-remark`,
]
```


### Instalar interfaz de línea de comandos

```
npm install -g gatsby-cli
```

### Instalar interfaz de línea de comandos

```
gatsby new gatsby-site
```

### Iniciar el servidor de desarrollo

```
gatsby develop
```

Por defecto: http://localhost:8000

```
gatsby develop -p 8001
```

## Crear aplicación en producción

```
gatsby build
```

### Servir app en producción

```
gatsby serve
```

### Sass + Typescript

```
npm install -s gatsby-plugin-typescript
plugins: [`gatsby-plugin-typescript`] (gatsby-config.js)
```
```
npm install -s node-sass gatsby-plugin-sass
plugins: [`gatsby-plugin-sass`] (gatsby-config.js)
```


# Redux

Framework que permite escribir aplicaciones con un manejo global del estado en distinos ambientes (cliente, servidor, nativo).

* Previcible
Ejecución en diferentes entornos (cliente, servidor y nativo) y fáciles de probar.

* Centralizado
Centralizar el estado y la lógica de su aplicación permite deshacer, rehacer y persistir de estado.

* Debuggable
Fácil rastrear cuándo, dónde, por qué y cómo cambió el estado de una aplicación. Envía informes completos de errores a un servidor.

* Flexible
Redux funciona con cualquier capa de interfaz de usuario y tiene un gran ecosistema de complementos.

El estado de toda tu aplicación se almacena en un árbol de objetos dentro de una única store.
La única forma de cambiar el estado es emitir una acción, un objeto que describe lo que sucedió.
Para especificar cómo las acciones transforman el árbol de estado, escribimos reducers.

### Instalo core de redux (independiente de react, se puedo usar con javascript plano, angular, etc)

```
npm install -s redux
```

### Librería para vincular redux con react

```
npm install --save react-redux
```

### Extensión para monitorear la store en Chrome 

Redux dev tools: 
https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=es

Herramienta para debuggin de redux. Podremos ver las modificaciones del estado.

```
npm install -s redux-devtools-extension

import { composeWithDevTools } from 'redux-devtools-extension'
const store = createStore(reducers, composeWithDevTools());
o
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
en lugar de:
composeWithDevTools()
```

### Creando la Store

/store

---- actions.tsx

---- reducers.tsx

---- ReduxWrapper.tsx


* Asigno el wrapper del store como contenedor de Gatsby (gatsby-browser.js y gatsby-ssr.js)

```
export { default as wrapRootElement } from "./src/store/ReduxWrapper"
```
