# escuelajs-reto-10
Reto 10 Noviembre 2: Curso de Server Side Render con Express

## Platzi Store Backend

Ya tenemos el backend funcionando con base de datos en la nube, es momento de realizar el server side render de Platzi Store.

### Instalación
```
npm install
```

### Ejecución
```
npm run start
```

## Documentación

### Archivo src/server/routes/main.js

En este archivo realizamos una petición a la API 'https://platzistore-api-afvalenciab.now.sh/api/products' por medio de 'fetch' para obtener los productos que se mostraran en PlatziStore. Adicionalmente se prepara el estado inicial de la aplicación.

```javascript
const initialState = {
  cart: [],
  products: [],
};

const getProducts = async () => {
  const API = 'https://platzistore-api-afvalenciab.now.sh/api/products';
  try {
    const response = await fetch(API);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
};

const prepareInitialState = async (state) => {
  const result = await getProducts();
  return {
    ...state,
    products: result,
  };
};

...
  const customInitialState = await prepareInitialState(initialState);
  const store = createStore(reducer, customInitialState);
...
```
### Archivo src/frontend/index.js

En este archivo se modifica el estado inicial de la aplicación por el estado que se cargó en el 'server'. Adicionalmente se agrega el history para dar funcionalidad a react router y mantener las rutas de nevegación.

```javascript
if (typeof window !== 'undefined') {
  let composeEnhacers;
  if (process.env.NODE_ENV === 'production') {
    composeEnhacers = compose;
  } else {
    composeEnhacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  }

  const preloadedState = window.__PRELOADED_STATE__;
  const store = createStore(reducer, preloadedState, composeEnhacers());
  const history = createBrowserHistory();

  hydrate(
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>,
    document.getElementById('app'),
  );
}
```

### Archivo .babelrc

Se agregó el paquete '@babel/plugin-transform-rutime' para permitir el uso del Async await.

```javascript
{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
  ],
  "env": {
    "development": {
      "plugins": [
        "transform-class-properties",
        "react-hot-loader/babel",
        "babel-plugin-transform-object-assign",
        "@babel/plugin-transform-runtime"
      ]
    }
  }
}
```

## RETO

### Primer problema

1. Verificar que el servidor haga server side render.
2. Leer el archivo `webpack.config.js` y solucionar el problema con los archivos CSS.

### Segundo Problema

1. Conectar tu API del reto pasado con el actual servidor.


### Enviar solución de reto
Debes de crear un "Fork" de este proyecto, revolver los problemas y crear un Pull Request hacia este repositorio.

### Contribuir
Si alguien quiere agregar o mejorar algo, lo invito a colaborar directamente en este repositorio: [escuelajs-reto-10](https://github.com/platzi/escuelajs-reto-10/)

### Licencia
escuelajs-reto-010 se lanza bajo la licencia [MIT](https://opensource.org/licenses/MIT).
