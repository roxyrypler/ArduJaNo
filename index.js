
var express = require('express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);



const SerialPort = require('serialport')
const Readline = require('@serialport/parser-readline')
const portName = "COM3";
const port = new SerialPort(portName, {
    baudRate: 9600
})



app.use(express.static('public'));
  
  io.on('connection', function(socket){
    console.log('a user connected');
  });
  
  http.listen(3000, function(){
    console.log('listening on *:3000');
  });


const parser = new Readline()
port.pipe(parser)

parser.on('data', line => {
    //console.log(line);
    //console.log("Line Done");

    if (line.includes("InputOne")) {
      let cleanTxtPotOne = line.replace("InputOne", "");
      console.log(cleanTxtPotOne);
      io.sockets.emit('broadcast', cleanTxtPotOne);
    }
    if (line.includes("InputTwo")) {
      let cleanTxtPotTwo = line.replace("InputTwo", "");
      console.log(cleanTxtPotTwo);
    }
})
