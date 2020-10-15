// ------------------********************************----------------------------------------
const baseEndpoint = 'https://geo.ipify.org/api/v1';
const apiKey = 'at_3qU3a2WWwxwh36bo19rAfTgCWwnRA';
const customMarker = L.icon({
    iconUrl: 'images/icon-location.svg',
    iconSize: [46,55]
});
let mymap;

function gridValues(searchResult) {
    document.querySelector('.ip-address').textContent = searchResult.ip;
    document.querySelector('.location-span').textContent = `${searchResult.location.city}, ${searchResult.location.region} ${searchResult.location.postalCode}`;
    document.querySelector('.timezone-span').textContent = `UTC ${searchResult.location.timezone}`;
    document.querySelector('.isp-span').textContent = searchResult.isp;
}
function createMap(searchResult) {
    mymap.setView([searchResult.location.lat, searchResult.location.lng], 15);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZGllZ290b3JyZXM5IiwiYSI6ImNrZm9sY3phZjAyOHoycnM5MTh5YjF5em8ifQ.WEcj32llLyotdltO2DCouA'
}).addTo(mymap);
L.marker([searchResult.location.lat, searchResult.location.lng], {icon: customMarker}).addTo(mymap);
}

async function ipSearch() {
    let url = `${baseEndpoint}?apiKey=${apiKey}&ipAddress=&domain=`;
    try{
        let response = await fetch(url);
        return await response.json();
    }
    catch(error) {
        console.log(error);
    }
}
async function useIp() {
    let searchResult = await ipSearch();
    gridValues(searchResult);
    createMap(searchResult);
    // console.log(searchResult);
}
let userSearchInput;
document.querySelector('#search-button').addEventListener('click', (e) => {
    e.preventDefault();
    let searchInput = document.querySelector('#search-input');
    userSearchInput = searchInput.value;
    searchInput.value = '';
    useUserIpSearch(userSearchInput);
});
async function userIpSearch() {
    let userUrl = `${baseEndpoint}?apiKey=${apiKey}&ipAddress=${userSearchInput}&domain=${userSearchInput}`;
    try {
        let response = await fetch(userUrl);
        return await response.json();
    } catch(error) {
        console.log(error);
    }
}
async function useUserIpSearch(userSearchInput) {
    let searchResult = await userIpSearch();
    gridValues(searchResult);
    createMap(searchResult);
}

function init(){
    useIp();
    mymap = L.map('location-map');
}
init();