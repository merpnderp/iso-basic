const React = require('react');
const Route = require('react-router').Route;
const IndexRoute = require('react-router').IndexRoute;
const App = require('./components/app');
const Home = require('./components/home');

module.exports = (
    <Route name="app" component={App} path="/">
        <IndexRoute component={Home}/>
    </Route>
);