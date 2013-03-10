var geoip = require('../lib/geoip-lite/lib/geoip')
var ip = "8.8.8.8";
var geo = geoip.lookup(ip)
console.log(geo)