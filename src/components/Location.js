import { useEffect } from "react";
import { geolocate } from "@/services/geolocation";
import styles from './location.module.css';

const locationInfo = await geolocate();

export default function Location({locationData}) {
    useEffect(() => {}, [locationData]);

    let locationIp = locationInfo.ip;
    let locationIsp = locationInfo.isp;
    let locationCity = locationInfo.location.city;
    let locationTimeZone = locationInfo.location.timezone;

    if(locationData.length !== 0) {
        locationIp = locationData.ip;
        locationIsp = locationData.isp;
        locationCity = locationData.location.city;
        locationTimeZone = locationData.location.timezone;
    }

    return (
        <div className={styles.location__wrapper}>
            <div className={styles.location__container}>
                <span className={styles.location__heading}>IP ADDRESS</span>
                <span className={styles.location__content}>{locationIp}</span>
            </div>
            <div className={styles.location__container}>
                <span className={styles.location__heading}>LOCATION</span>
                <span className={styles.location__content}>{locationCity}</span>
            </div>
            <div className={styles.location__container}>
                <span className={styles.location__heading}>TIMEZONE</span>
                <span className={styles.location__content}>{locationTimeZone}</span>
            </div>
            <div className={styles.location__container}>
                <span className={styles.location__heading}>ISP</span>
                <span className={styles.location__content}>{locationIsp}</span>
            </div>
        </div>
    )
}
