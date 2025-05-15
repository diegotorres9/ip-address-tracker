'use client';
import { MapContainer, Marker, Popup, TileLayer, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import { geolocate } from "@/services/geolocation";

const coordinates = await geolocate();
// console.log(coordinates.location);
const latCoord = coordinates.location.lat;
const lngCoord = coordinates.location.lng;
// console.log(latCoord, lngCoord);


export default function Map () {
    
    return (
        <MapContainer center={[latCoord,lngCoord]} zoom={12} scrollWheelZoom={false} style={{height: '800px'}}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[latCoord,lngCoord]}>
                <Popup>
                    a customizable popup
                </Popup>
            </Marker>
        </MapContainer>
    )
}