// fetch request from geo ipify
fetch('https://geo.ipify.org/api/v1?apiKey=at_3qU3a2WWwxwh36bo19rAfTgCWwnRA&ipAddress=')
.then(response => response.json())
.then(data => console.log(data));