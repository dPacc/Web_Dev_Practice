// // (function (exports, require, module, __filename, __dirname)
//
// const path = require('path');
// const os = require('os');
// const fs = require('fs');
//
//
// var pathObj = path.parse(__dirname);
// var freeMem = os.freemem();
// var totalMem = os.totalmem();
//
// console.log(`Free Memory: ${freeMem}`);
// console.log(`Total Memory: ${totalMem}`);
// const EventEmitter = require('events');
//
// // Register a listener
//
// const Logger = require('./logger');
// const logger = new Logger();
//
// logger.on('messageLogged', (arg) => {
//   console.log('Listener Called', arg);
// });
//
// logger.log('Hello');

const http = require('http');

const server = http.createServer( (req, res) => {
  if(req.url == '/') {
    res.write('Hello World');
    res.end();
  }

  if(req.url == '/api/courses') {
    res.write(JSON.stringify([1, 4, 3]));
    res.end();
  }
});


server.listen(3000);

console.log('Listening on port 3000...');
