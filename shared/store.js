const redux = require('redux');
const thunk = require('redux-thunk').default;
const reducers = require('./reducers');

const logger = store => next => action => {
    console.log('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    return result
}

module.exports = function (data) {
    var reducer = redux.combineReducers(reducers);

    var finalCreateStore;

    if (process.env.NODE_ENV != 'production' ) {
        finalCreateStore = redux.applyMiddleware(logger, thunk)(redux.createStore)
    } else {
        finalCreateStore = redux.applyMiddleware(thunk)(redux.createStore)
    }
    return  finalCreateStore(reducer, data)
}