require('isomorphic-fetch');

exports.test = function(){
    return function(dispatch){
        return fetch('http://localhost:3000/test').then(function(response){
            return response.json();
        }).then(function(results){
            console.log("axios returned");
            console.log(results);
            dispatch({
                type: 'SetTest',
                value: results
            })
        }).catch(function(response){
            console.log("get test failed");
            console.log(response);
        })
    }
}