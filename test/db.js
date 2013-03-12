var mongoose = require('mongoose');
mongoose.connect('mongodb://squircle:dio10201@ds037447.mongolab.com:37447/af_squircle-fog1')

var Squircle = require('../app/model/squircle')

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
	Squircle.find({}, function(err, list){
		list.forEach(function(item){
			item.remove()
		})
	})
});