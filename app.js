
const path = require('path');
const os = require('os');
const fs = require('fs');

const EventEmitter = require('events');
// EventEmitter is a class returned from require('events'). to use it we instantiate an EventEmitter object


const Logger = require('./logger.js');
const logger = new Logger();

// register a listener
logger.on('messageLogged', (eventArg) => {
    console.log('listener called', eventArg);
});

logger.log('hiya :3');

// the fs object has synchronous and asynchronous versions of almost all of its methods
// the 'default' is asynchronous, so there will be 'exampleFunc' and 'exampleFuncSync'
// you should probably use the asynchronous methods unless there is an explicit reason to not do so.

// const files = fs.readdirSync('./');  // this returns a string array of files
// console.log(files);

// now the asynchronous version of readdir

fs.readdir('./', function(error, files) {
    if (error) console.log('Error', error);
    else console.log('Result', files);
})


var totalMem = os.totalmem();
var freeMem = os.freemem();



// console.log(`Total Memory: ${totalMem}`);
// console.log(`Free Memory: ${freeMem}`);


var pathObj = path.parse(__filename);
// console.log(pathObj.dir);

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