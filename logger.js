const EventEmitter = require('events');
// EventEmitter is a class returned from require('events'). to use it we instantiate an EventEmitter object


class Logger extends EventEmitter {
    // the function keyword is not required to define methods inside classes. you get an error if you use it.
    log(message) {
        // send an HTTP request
        console.log(message);
    
        //Logger extends EventEmitter, therefor it inherits the EventEmitter.emit method. we refer to the current class as 'this'
        this.emit('messageLogged', {id: 1, url: 'http://ex-url'});
    }
}



module.exports = Logger;
