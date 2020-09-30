// IPIFY
var ip = "8.8.8.8";
var api_key = "at_3qU3a2WWwxwh36bo19rAfTgCWwnRA";

$(function(){
    var ipInfo = document.querySelector('.ip-address');
    var isp = document.querySelector('.isp-span');
    var timeZone = document.querySelector('.timezone-span');
    var ipLocation = document.querySelector('.location-span');
    $.ajax({
        url: "https://geo.ipify.org/api/v1",
        dataType: 'json',
        data: {apiKey: api_key, ipAddress: ip},
        success: function(data) {
            ipInfo.innerHTML = data.ip;
            ipLocation.innerHTML = data.location.city + ', ' + data.location.region + ' ' + data.location.postalCode;
            timeZone.innerHTML = data.location.timezone;
            isp.innerHTML = data.isp;
            console.log(data.location.city, data.location.region);
            var latLocation = data.location.lat;
            var lngLocation = data.location.lng;
            // LEAFLET
            var mymap = L.map('location-map').setView([latLocation, lngLocation], 12);
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
            L.marker([latLocation, lngLocation], {icon: customMarker}).addTo(mymap);
        }
    });
});
