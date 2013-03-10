var mongoose = require('mongoose')
var Schema = mongoose.Schema

var SquircleSchema = new Schema({
	udid  : {type: String, unique: true ,required: true},
	manufacturer  : {type: String},
	model  : {type: String},
	firmware  : {type: String},
	os  : {type: String},
	language  : {type: String},
	remark  : {type: String},
	range : [{type: Number}],
  	country: {type: String},
  	region: {type: String},
  	city: { type: String},
  	ll: [ { type: Number} ] 
})

module.exports = mongoose.model('Squircle', SquircleSchema)