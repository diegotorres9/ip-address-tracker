// fetch request from geo ipify
// fetch('https://geo.ipify.org/api/v1?apiKey=at_3qU3a2WWwxwh36bo19rAfTgCWwnRA&ipAddress=')
// .then(response => response.json())
// .then(data => obj = data)
// .then(() => {
//     // Initialize our ip object variables
//     var userIP = obj.ip;
//     var userLocation = obj.location.region + ', ' + obj.location.region + ' ' + obj.location.postalCode;
//     var userTimezone = 'UTC ' + obj.location.timezone;
//     var userISP = obj.isp;

//     // create variables from html elements
//     var ipAddressHtml = document.querySelector('.ip-address');
//     var locationHtml = document.querySelector('.location-span');
//     var timezoneHtml = document.querySelector('.timezone-span');
//     var ispHtml = document.querySelector('.isp-span');

//     // update the html with the corresponding object data
//     ipAddressHtml.innerHTML = userIP;
//     locationHtml.innerHTML = userLocation;
//     timezoneHtml.innerHTML = userTimezone;
//     ispHtml.innerHTML = userISP;
// });
function getIpAPI(url, callback) {
    var ipObj;
    fetch(url)
    .then(response => response.json())
    .then(data => ipObj = data)
    .then(() => callback(ipObj));
}

getIpAPI('https://geo.ipify.org/api/v1?apiKey=at_3qU3a2WWwxwh36bo19rAfTgCWwnRA&ipAddress=', getIpData);
function getIpData(data) {
    document.querySelector('.ip-address').innerHTML = data.ip;
    document.querySelector('.location-span').innerHTML = data.location.city + ', ' + data.location.region + ' ' + data.location.postalCode;
    document.querySelector('.timezone-span').innerHTML = 'UTC ' + data.location.timezone;
    document.querySelector('.isp-span').innerHTML = data.isp;
}

