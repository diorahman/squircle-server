if (require("piping")()) {

var locomotive = require('locomotive')
var env = process.env.NODE_ENV || 'development'
var port = process.env.VMC_APP_PORT || 1337
var address = '0.0.0.0'

locomotive.boot(__dirname, env, function(err, server) {
	if (err) { throw err }
	server.listen(port, address, function() {
		var addr = this.address();
		console.log('listening on %s:%d', addr.address, addr.port)
	})
})

}