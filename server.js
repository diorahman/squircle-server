//if (require("piping")()) {

var locomotive = require('locomotive')
var env = process.env.NODE_ENV || 'production'
var port = process.env.VMC_APP_PORT || 1337
var address = '0.0.0.0'

var http = require('http')
var sockjs = require('sockjs')

var sockjsOpt = { sockjs_url : "http://cdn.sockjs.org/sockjs-0.3.min.js"}

var sock = sockjs.createServer(sockjsOpt)
sock.on('connection', function(c){
	c.on('data', function(message){
		c.write(message)
	})
})

locomotive.boot(__dirname, env, function(err, server) {
	if (err) { throw err }

	var httpServer = http.createServer(server);
	sock.installHandlers(server, { prefix: '/echo'})
	
	httpServer.listen(port, address, function() {
		var addr = this.address();
		console.log('listening on %s:%d', addr.address, addr.port)
	})
})

//}