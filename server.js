'use strict';
/**
 * Module dependencies.
 */
var config = require('./config/config.js');
var mongoose = require ('mongoose');
var express = require ('express');

/**
 * Main application entry file.
 * Please note that the order of loading is important.
 */

var uri = process.env.MONGOLAB_URI || config.db.uri;
mongoose.Promise = require('q').Promise;
var db = mongoose.connect(uri,function(){
	require('./seeds.js');
});

// Init the express application
var app = require('./express.js')(db);

// Bootstrap passport config
require('./passport')();

app.listen(app.get('port'), function(){
	console.log('Server running');
})

module.exports = app;

//Zishan
/*
var app = require('express')();
var http = require('http').Server(app);
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

io.on('connection', function(socket){
  socket.broadcast.emit('hi');
  socket.on('chat message', function(msg){
       io.emit('chat message', msg);
    console.log('message: ' + msg);
  });
});

io.emit('some event', { for: 'everyone' });


http.listen(process.env.PORT, function(){
  console.log('listening on *:process.env.PORT');
});
*/
//Zishan