export async function geolocate() {
    const data = await fetch(process.env.NEXT_PUBLIC_API_CALL);
    const coordData = await data.json();
    return coordData;
}