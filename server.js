var React = require('react');
    // This is our React component, shared by server and browser thanks to browserify

process.argv.forEach(function (val, index, array) {
 // console.log(index + ': ' + val);
});
    var file ='./assets/bundle.js'; 
   MyApp = require(file)

