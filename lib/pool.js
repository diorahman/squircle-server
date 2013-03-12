var _ = require('underscore')
var clients = []

exports.add = function(c){
	clients.push(c)
}

exports.remove = function(c){
	clients = _.reject(clients, function(client) { return client.id == c.id })
}

exports.get = function(){
	return clients
}
