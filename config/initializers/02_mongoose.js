// Initialize connections
var mongoose = require('mongoose')
mongoose.connect('mongodb://squircle:dio10201@ds037447.mongolab.com:37447/af_squircle-fog1')
var mongooseTypes = require("mongoose-types")
mongooseTypes.loadTypes(mongoose)
