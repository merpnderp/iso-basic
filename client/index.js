const React = require('react');
const render = require('react-dom').render;
const Router = require('react-router').Router;
const Provider = require('react-redux').Provider;
const browserHistory = require('react-router').browserHistory;

const routes = require('../shared/routes');

const initialState = (window.__INITIAL_STATE__);
const store = require('../shared/store')(initialState);

render(
    <Provider store={store}>
        <Router children={routes} history={browserHistory} />
    </Provider>,
    document.getElementById('react-view')
);
