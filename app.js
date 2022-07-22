/* Initialization */
const midPoint = [25.70, 82.79]
const map = L.map('map', {
	minZoom: 4,
    maxZoom: 11,
}).setView(midPoint, 5);

/* Tile Provider */
const osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

osm.addTo(map)

/* Overlay - India */
const indiaBoundaryStyle = {
    "color": "#ff7800",
    "weight": 2,
    "opacity": 1,
	"fill": false
};

const indiaStateBoundary = L.geoJSON(indiaStates, {
    style: indiaBoundaryStyle
})

indiaStateBoundary.addTo(map);

/* Overlay - National Parks */
const npMarkerOptions = {
	radius: 5,
	weight: 2,
	color: 'green',
	fillOpacity: 0.5,
}

const npMarkers = L.geoJSON(nationalParks, {
	pointToLayer: function (feature, latlng) {
		return L.circleMarker(latlng, npMarkerOptions) 
	},
	onEachFeature: function (feature, layer) {
		layer.bindTooltip(feature.properties.name)
	}
})

npMarkers.addTo(map)
