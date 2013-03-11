var geoip = require('../lib/geoip-lite/lib/geoip')
var ip = "202.152.194.151";
var geo = geoip.lookup(ip)
console.log(geo)
