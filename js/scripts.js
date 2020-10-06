// ------------------********************************----------------------------------------
// Inital fetch request to populate html fields and location map based on user location
var leafletMap = L.map('location-map');
fetch('https://geo.ipify.org/api/v1?apiKey=at_3qU3a2WWwxwh36bo19rAfTgCWwnRA&ipAddress=')
.then(response => response.json())
.then(data => {
    let ipInfo = [];
    ipInfo.push(data.ip, data.location.city, data.location.region, data.location.postalCode, data.location.timezone, data.isp, data.location.lat, data.location.lng);

    document.querySelector('.ip-address').innerHTML = ipInfo[0];
    document.querySelector('.location-span').innerHTML = ipInfo[1] + ', ' + ipInfo[2] + ' ' + ipInfo[3];
    document.querySelector('.timezone-span').innerHTML = 'UTC ' + ipInfo[4];
    document.querySelector('.isp-span').innerHTML = ipInfo[5];

    leafletMap.setView(new L.LatLng(ipInfo[6],ipInfo[7]),12);
    
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZGllZ290b3JyZXM5IiwiYSI6ImNrZm9sYWN5aDAzZzgzMGxkd3VvbnVkczIifQ.siD760YhTxGGgoQ-OVQhSw'
    }).addTo(leafletMap);

    var customMarker = L.icon({
        iconUrl: 'images/icon-location.svg',
        iconSize: [46, 56]
    });
    L.marker([ipInfo[6], ipInfo[7]], {icon: customMarker}).addTo(leafletMap);
});


// Grab the search button in html and run a function to get the ip or domain that a user inputs
// then use that value to fetch from the IP Database to update html fields and Map
let searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', (e) => {
    e.preventDefault();
    let searchInput = document.querySelector('#ip-address-input');
    let searchInputValue = searchInput.value;
    searchInput.value = '';

    fetch(`https://geo.ipify.org/api/v1?apiKey=at_3qU3a2WWwxwh36bo19rAfTgCWwnRA&ipAddress=${searchInputValue}`)
    .then(response => response.json())
    .then(data => {
        let ipInputInfo = [];
        ipInputInfo.push(data.ip, data.location.city, data.location.region, data.location.postalCode, data.location.timezone, data.isp, data.location.lat, data.location.lng);

        // console.log(ipInputInfo);
        document.querySelector('.ip-address').innerHTML = ipInputInfo[0];
        document.querySelector('.location-span').innerHTML = ipInputInfo[1] + ', ' + ipInputInfo[2] + ' ' + ipInputInfo[3];
        document.querySelector('.timezone-span').innerHTML = 'UTC ' + ipInputInfo[4];
        document.querySelector('.isp-span').innerHTML = ipInputInfo[5];

        leafletMap.setView(new L.LatLng(ipInputInfo[6], ipInputInfo[7]),12);

        L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1,
            accessToken: 'pk.eyJ1IjoiZGllZ290b3JyZXM5IiwiYSI6ImNrZm9sYWN5aDAzZzgzMGxkd3VvbnVkczIifQ.siD760YhTxGGgoQ-OVQhSw'
            }).addTo(leafletMap);
        
            var customMarker = L.icon({
                iconUrl: 'images/icon-location.svg',
                iconSize: [46, 56]
            });
            L.marker([ipInputInfo[6], ipInputInfo[7]], {icon: customMarker}).addTo(leafletMap);
    });
});