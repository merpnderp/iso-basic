const update = require('react-addons-update');

let initialState = {test: "foo"};

const mainReducer = function (state = initialState, action) {
    switch (action.type) {
        case 'SetTest':
            return update(state, {test: {$set: action.value}})
        default:
            return state;
    }
}

module.exports = {
    main: mainReducer
}

