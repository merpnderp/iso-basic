const update = require('react-addons-update');

let initialState = [];
const mainReducer = function (state = initialState, action) {
    switch (action.type) {
        case 'setTask':
            return update(state, {task: {$set: action.value}})
        case 'setValue':
            return update(state, {value: {$set: action.value}})
        default:
            return state;
    }
}

module.exports = {
    main: mainReducer
}

