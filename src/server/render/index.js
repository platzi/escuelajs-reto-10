const render = (html, preloadedState) => {
  return `
  <!DOCTYPE html>
    <html>
      <head>
        <title>Platzi Store</title>
        <link rel="stylesheet" href="assets/app.css" type="text/css"></link>
        <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
      </head>
      <body>
        <div id="app">${html}</div>
        <script>
        // WARNING: See the following for security issues around embedding JSON in HTML:
        // http://redux.js.org/recipes/ServerRendering.html#security-considerations
        window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
    /</g,
    '\\u003c',
  )}
      </script>
        <script src="assets/app.js" type="text/javascript"></script>
        <script src="assets/vendor.js" type="text/javascript"></script>
      </body>
    </html>
  `;
};

export default render;
