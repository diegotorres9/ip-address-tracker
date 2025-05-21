'use client';
import { MapContainer, Marker, Popup, TileLayer, Tooltip } from "react-leaflet";
import ChangeView from "./ChangeView";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import { geolocate } from "@/services/geolocation";
import { useEffect } from "react";

const coordinates = await geolocate();


export default function Map ({locationData}) {
    useEffect(() => {}, [locationData]);


    let latCoord = coordinates.location.lat;
    let lngCoord = coordinates.location.lng;

    if(locationData.length !== 0) {
        latCoord = locationData.location.lat;
        lngCoord = locationData.location.lng;
    }

    return (
        <MapContainer center={[latCoord, lngCoord]} zoom={12} scrollWheelZoom={false} style={{height: '800px'}}>
            <ChangeView center={[latCoord, lngCoord]} zoom={12}/>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[latCoord, lngCoord]}>
                <Popup>
                    a customizable popup
                </Popup>
            </Marker>
        </MapContainer>
    )
}