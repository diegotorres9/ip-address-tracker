var mymap = L.map('location-map').setView([40.105, -75.345], 13);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZGllZ290b3JyZXM5IiwiYSI6ImNrZm9sYWN5aDAzZzgzMGxkd3VvbnVkczIifQ.siD760YhTxGGgoQ-OVQhSw'
}).addTo(mymap);

var customMarker = L.icon({
    iconUrl: '../images/icon-location.svg',
    iconSize: [46, 56]
});
L.marker([40.105, -75.345], {icon: customMarker}).addTo(mymap);