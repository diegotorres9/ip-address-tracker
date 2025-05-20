import { useMap } from "react-leaflet";

function changeView({center, zoom}) {
    const map = useMap();
    map.setView(center, zoom);
    return null;
}

export default changeView