//if (require("piping")()) {

var locomotive = require('locomotive')
var env = process.env.NODE_ENV || 'production'
var port = process.env.VMC_APP_PORT || 1337
var address = '0.0.0.0'

var http = require('http')
var sockjs = require('sockjs')

var sockjsOpt = { sockjs_url : "http://cdn.sockjs.org/sockjs-0.3.min.js"}
var _ = require('underscore')

var pool = require('./lib/pool')
var sock = sockjs.createServer(sockjsOpt)

sock.on('connection', function(c){
	pool.add(c)
	c.on('close', function(){
		pool.remove(this)
	})
})

locomotive.boot(__dirname, env, function(err, server) {
	if (err) { throw err }

	var httpServer = http.createServer(server);
	sock.installHandlers(httpServer, { prefix: '/sqrcl'})
	
	httpServer.listen(port, address, function() {
		var addr = this.address();
		console.log('listening on %s:%d', addr.address, addr.port)
	})
})