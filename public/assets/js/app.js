nokia.Settings.set("appId", "4rVgVrLbPNQQf3hvoLuL")
nokia.Settings.set("authenticationToken", "Xpw61XtO7UI1_9K9RM8B6w")
var mapContainer = document.getElementById("mapContainer")
var map = new nokia.maps.map.Display(mapContainer, {
	center: [34.41, 35.78],
	zoomLevel: 2,
	components:[new nokia.maps.map.component.Behavior()]
})

var markerPoints = [] 

var marker = 
{
	text: "N9",
	textPen: { strokeColor: "#333"},
	brush: { color: "#FFF"},
	pen: { strokeColor: "#333"}
}

function markers(points){

	map.objects.clear()

	markerPoints = points

	for(var i = 0; i < points.length; i++){
		var point = points[i]

		if(point.ll){
			var lat = point.ll[0]
			var lng = point.ll[1]

			var coord = new nokia.maps.geo.Coordinate(lat, lng)
			var stdMarker = new nokia.maps.map.StandardMarker(coord, marker)

			map.objects.add(stdMarker)
		}
	}
}

function load(){
	$.getJSON('/squircles', function(points){
		markers(points)
	})
}

var sockjs_url = '/sqrcl';
var sockjs = new SockJS(sockjs_url);

sockjs.onopen = function(){ console.log('open')}
sockjs.onclose   = function(){}
sockjs.onmessage = function(e) { 
	if(e.data == 'reload'){
		load()
	}
}

load()