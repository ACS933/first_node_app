
const log = require('./logger.js');
const path = require('path');

var pathObj = path.parse(__filename);
console.log(pathObj.dir);

function sayHello(name) {
    console.log('hello ' + name);
}

// sayHello('Allie');



// console is a 'global object' 
// this means we can use it anywhere, its scope is global
// there are other global objects and functions, such as:

// setTimeout() 
// clearTimeout()
// setInterval()
// clearInterval
 

// node has an object called 'global' which allows us to access global objects
// variables we define in a global scope are not automatically added to the global object
// the scope of these variables is the file, i.e. app.js in this case
// to make our code maintainable and not horrid, we should use modules


// log('me is a message!');