const midPoint = [25.70, 82.79]
const map = L.map('map', {
	minZoom: 4,
    maxZoom: 11,
}).setView(midPoint, 5);


const osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

osm.addTo(map)

