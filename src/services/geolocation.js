export async function geolocate() {
    const data = await fetch('https://geo.ipify.org/api/v1?apiKey=at_3qU3a2WWwxwh36bo19rAfTgCWwnRA&ipAddress=&domain=');
    const coordData = await data.json();
    return coordData;
}