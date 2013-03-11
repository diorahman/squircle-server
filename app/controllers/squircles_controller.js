var locomotive = require('locomotive')
var Controller = locomotive.Controller
var geoip = require('../../lib/geoip-lite/lib/geoip')
var Squircle = require('../model/squircle')
var _ = require('underscore')

var SquirclesController = new Controller()

SquirclesController.index = function() {
	var self = this

	function all(cb){
		Squircle.find({}, function(err, squircles){

			// todo: pick data to be sent back
			return cb(err, squircles)
		})
	}

	self.respond({
		'json' : function(){
			all(function(err, squircles){
				if(err) self.res.send(500)
				else{
					self.res.send(squircles)
				}
			})
		}
	})
}

SquirclesController.create = function() {
	var self = this

	var body = self.req.body

	function update(squircle, data, cb){
		squircle = _.extend(squircle, data)
		squircle.save(cb)
	}

	function create(data, cb){
		var s = new Squircle(data)
		s.save(cb)
	}

	function handle(data, cb){
		Squircle.findOne({ udid : data.udid}, function(err, squircle){
			if(err) return cb(err)
			if(squircle){
				update(squircle, data, cb)
			}else{
				create(data, cb)
			}
		})
	}

	function ip(req){
		var _ip;
		if(req.headers['x-forwarded-for']) {
			_ip = req.headers['x-forwarded-for']
			if(_ip.indexOf(',') > -1){
				return _ip.split(',')[0].trim()
			}
		}
		else
			_ip = self.req.connection.remoteAddress

		return _ip == "127.0.0.1" ? "202.152.194.151" : _ip
	}

	self.respond({
		'json' : function(){

			body = _.extend(body, geoip.lookup(ip(self.req)))

			handle(body, function(err, squircle){
				if(err) self.res.send(500)
				self.res.send(squircle)
			})
		}
	})
}

SquirclesController.show = function() {
	var self = this
	self.respond({
		'html' : self.render(),
		'json' : self.res.send({ hello : 'squircle'})
	})
}


module.exports = SquirclesController;
