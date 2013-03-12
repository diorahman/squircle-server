var mongoose = require('mongoose');
mongoose.connect('')

var Squircle = require('../app/model/squircle')

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
	Squircle.find({}, function(err, list){
		console.log(list)
		list.forEach(function(item){
			item.remove()
		})
	})
});