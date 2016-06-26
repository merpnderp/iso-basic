require('whatwg-fetch');
const express = require('express');
const app = express();
const path = require('path');

const React = require('react');
const router = require('react-router');
const RouterContext = require('react-router').RouterContext;
const renderToString = require('react-dom/server').renderToString;
const redux = require('redux');
const thunk = require('redux-thunk');
const Provider = require('react-redux').Provider;

const fetchComponentData = require('./shared/utils/fetchComponentData');
const routes = require('./shared/routes');
const store = require('./shared/store')();



app.use(express.static(path.join(__dirname, 'public')));

app.get('/test', (req,res)=>{
    console.log("WEBAPI return test");
    res.json("I Rock");
})

app.use('/',(req,res)=>{

//    const location = createLocation(req.url);

    router.match({routes,location: req.url},(err, redirectLocation, renderProps) => {
        if(err) {
            console.error(err);
            return res.status(500).end('Internal server error');
        }

        if(!renderProps)
            return res.status(404).end('Not found');

        function renderView() {
            console.log('renderView called');
            const InitialView = (
                <Provider store={store}>
                    <RouterContext {...renderProps} />
                </Provider>
            );

            const componentHTML = renderToString(InitialView);

            const initialState = store.getState();

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
          <script type="application/javascript" src="/app.js"></script>
        </body>
      </html>
      `;
            return HTML;
        }

//        res.end(renderView());

        fetchComponentData(store.dispatch, renderProps.components, renderProps.params)
            .then(renderView)
            .then(html => res.end(html))
            .catch(err => res.end(err.message));
    });
})



// error handling middleware should be loaded after the loading the routes
if ('development' == app.get('env')) {
//  app.use(errorHandler());
}

module.exports = app;
