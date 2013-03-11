nokia.Settings.set("appId", "4rVgVrLbPNQQf3hvoLuL"); 
nokia.Settings.set("authenticationToken", "Xpw61XtO7UI1_9K9RM8B6w");

// Get the DOM node to which we will append the map
var mapContainer = document.getElementById("mapContainer");
// Create a map inside the map container DOM node
var map = new nokia.maps.map.Display(mapContainer, {
	// initial center and zoom level of the map
	center: [30.0, 10.0],
	zoomLevel: 2.3,
	components: [
		// ZoomBar provides a UI to zoom the map in & out
		new nokia.maps.map.component.ZoomBar(), 
		// We add the behavior component to allow panning / zooming of the map
		new nokia.maps.map.component.Behavior(),
		// Creates UI to easily switch between street map satellite and terrain mapview modes
		new nokia.maps.map.component.TypeSelector(),
		// Creates a toggle button to show/hide traffic information on the map
		new nokia.maps.map.component.Traffic(),
		// Creates a toggle button to show/hide public transport lines on the map
		new nokia.maps.map.component.PublicTransport(),
		// Creates a toggle button to enable the distance measurement tool
		new nokia.maps.map.component.DistanceMeasurement(),
		// Shows a min-map in the bottom right corner of the map
		new nokia.maps.map.component.Overview(),
		/* Shows a scale bar in the bottom right corner of the map depicting
		 * ratio of a distance on the map to the corresponding distance in the real world
		 * in either kilometers or miles
		 */ 
		new nokia.maps.map.component.ScaleBar(),
		/* Positioning will show a set "map to my GPS position" UI button
		 * Note: this component will only be visible if W3C geolocation API
		 * is supported by the browser and if you agree to share your location.
		 * If you location can not be found the positioning button will reset
		 * itself to its initial state
		 */
		new nokia.maps.positioning.component.Positioning(),
		// Add ContextMenu component so we get context menu on right mouse click / long press tap
		new nokia.maps.map.component.ContextMenu()
	]
});

/* We create a UI notecontainer for example description
 * NoteContainer is a UI helper function and not part of the Nokia Maps API
 * See exampleHelpers.js for implementation details 
 */
var noteContainer = new NoteContainer({
	id: "basicMapWithComponentsUi",
	parent: document.getElementById("uiContainer"),
	title: "Squircles!",
	content:
		'<p>Here they are, where the squircles hiding!</p>'
});