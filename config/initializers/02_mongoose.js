// Initialize connections
var mongoose = require('mongoose')
// mongodb://<dbuser>:<dbpassword>@ds037447.mongolab.com:37447/af_squircle-fog1
// mongoose.connect('mongodb://localhost/squircle')
mongoose.connect('mongodb://squircle:dio10201@ds037447.mongolab.com:37447/af_squircle-fog1')

var mongooseTypes = require("mongoose-types")
mongooseTypes.loadTypes(mongoose)
