import { useEffect } from "react";

export default function Location({locationData}) {
    useEffect(() => {}, [locationData])
    return (
        <div>
            {/* <pre>{JSON.stringify(locationData, null, 2)}</pre> */}
            <span>{locationData.ip}</span>
            <span>{locationData.location?.city}</span>
            <span>{locationData.location?.timezone}</span>
            <span>{locationData.isp}</span>
        </div>
    )
}
