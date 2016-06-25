const express = require('express');
const app = express();
const path = require('path');
const React = require('react');
const match = require('react-router').match;
const RouterContext = require('react-router').RouterContext;
const renderToString = require('react-dom/server').renderToString;
const routes = require('./shared/routes');

app.use(express.static(path.join(__dirname, 'public')));

app.use((req,res)=>{
//    const location = createLocation(req.url);
//    const reducer  = combineReducers(reducers);
//    const store    = applyMiddleware(promiseMiddleware)(createStore)(reducer);
    match({routes,location: req.url},(err, redirectLocation, renderProps) => {
        if(err) {
            console.error(err);
            return res.status(500).end('Internal server error');
        }

        if(!renderProps)
            return res.status(404).end('Not found');

        function renderView() {
            const InitialView = (
                    <RouterContext {...renderProps} />
            );

            const componentHTML = renderToString(InitialView);

//            const initialState = store.getState();
            const initialState = {};

            const HTML = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Redux Demo</title>

          <script>
            window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
          </script>
        </head>
        <body>
          <div id="react-view">${componentHTML}</div>
          <script type="application/javascript" src="/bundle.js"></script>
        </body>
      </html>
      `;
            return HTML;
        }
        console.log("calling render");
        res.end(renderView());

        /*
        fetchComponentData(store.dispatch, renderProps.components, renderProps.params)
            .then(renderView)
            .then(html => res.end(html))
            .catch(err => res.end(err.message));
         */
    });
})



// error handling middleware should be loaded after the loading the routes
if ('development' == app.get('env')) {
//  app.use(errorHandler());
}

module.exports = app;