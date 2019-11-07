# escuelajs-reto-10

Reto 10 Noviembre 2: Curso de Server Side Render con Express

## Platzi Store Backend

Ya tenemos el backend funcionando con base de datos en la nube, es momento de realizar el server side render de Platzi Store.

### Instalación

```sh
npm install
```

### Ejecución

```sh
npm run start
```

## RETO

### Primer problema

1. Verificar que el servidor haga server side render.
2. Leer el archivo `webpack.config.js` y solucionar el problema con los archivos CSS.
   - **Primero crear el archivo `.env` en la raíz del proyecto**
     - `NODE_ENV=production`
   - **Crear manualmente la carpeta `public` en `src/server/`**
   - **Correr primero el siguiente comando**: `npm run build`
     - Este crea los _assets_ separados en la carpeta `src/server/public/assets`
   - **Ahora si ejecutar**: `npm run start`

### Segundo Problema

1. Conectar tu API del reto pasado con el actual servidor.
   - [Url especifica de la API del reto 09](https://nemo1co-reto09.now.sh/api/products/)
   - No olvidar que el servidor backend debe contar con `CORS`.

### Enviar solución de reto

Debes de crear un "Fork" de este proyecto, revolver los problemas y crear un Pull Request hacia este repositorio.

### Contribuir

Si alguien quiere agregar o mejorar algo, lo invito a colaborar directamente en este repositorio: [escuelajs-reto-10](https://github.com/platzi/escuelajs-reto-10/)

### Licencia

escuelajs-reto-010 se lanza bajo la licencia [MIT](https://opensource.org/licenses/MIT).
