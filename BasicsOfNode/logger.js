const EventEmitter = require('events');

var url = 'http://www.loggerhead.com/url'

class Logger extends EventEmitter {
  log(message) {
    // Sending an HTTP request
    console.log(message);

    // Raise an event
    this.emit('messageLogged', {id: 1, url: 'https://'});

  }
}

module.exports = Logger;
