require('whatwg-fetch');
const React = require('react');
const render = require('react-dom').render;
const match = require('react-router').match;
const Router = require('react-router').Router;
const Provider = require('react-redux').Provider;
const browserHistory = require('react-router').browserHistory;

const routes = require('../shared/routes');

const initialState = (window.__INITIAL_STATE__);
const store = require('../shared/store')(initialState);

match({history: browserHistory, routes}, (error, redirectionLocation, renderProps)=>{
    render(
        <Provider store={store}>
            <Router {...renderProps}/>
        </Provider>,
        document.getElementById('react-view')
    )
})

