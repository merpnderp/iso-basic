var ncp = require('ncp').ncp;

ncp.limit = 16;

ncp("./node_modules/bootstrap/dist", "./public/build/bootstrap", function (err) {
    if (err) {
        return console.error(err);
    }
    console.log('bootstrap copied!');
});

ncp("./node_modules/jquery/dist", "./public/build/jquery", function (err) {
    if (err) {
        return console.error(err);
    }
    console.log('jquery copied!');
});

ncp("./node_modules/react-widgets/dist", "./public/build/react-widgets", function (err) {
    if (err) {
        return console.error(err);
    }
    console.log('react-widgets copied!');
});

ncp("./node_modules/font-awesome/css", "./public/build/font-awesome/css",{clobber: true}, function (err) {
    if (err) {
        return console.error(err);
    }
    console.log('font-awesome css copied!');
});

ncp("./node_modules/font-awesome/fonts", "./public/build/font-awesome/fonts",{clobber: true}, function (err) {
    if (err) {
        return console.error(err);
    }
    console.log('font-awesome fonts copied!');
});
