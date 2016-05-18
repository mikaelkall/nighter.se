/*!
 * nighter.se
 * Copyright(c) 2016 Mikael Kall
 * MIT Licensed
 */

/**
 * Application dependencies.
 */
var http         = require('http');
var finalhandler = require('finalhandler');
var serveStatic  = require('serve-static');
var express      = require('express');        
var bodyParser   = require('body-parser');
var fs 		 = require('fs');

/**
 * Settings.
 */
var static_port = 8080

var serve = serveStatic(__dirname + '/public');
var server = http.createServer(function(req, res) {
  var done = finalhandler(req, res);
  serve(req, res, done);
});

/**
 * Serve static files.
 */
server.listen(static_port);
console.log('[SERVER] Listen: %s', static_port);
