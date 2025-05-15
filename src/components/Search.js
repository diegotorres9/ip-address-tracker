'use client';
import Image from "next/image";
import styles from './search.module.css';
import { geolocate } from "@/services/geolocation";
import { useState } from "react";

const locationData = await geolocate();
// console.log(locationData);
const ipAddress = locationData.ip;
const isp = locationData.isp;
const location = locationData.location.city;
const timeZone = locationData.location.timezone;


export default function Search() {
    const [inputValue, setInputValue] = useState('');

    const handleSearch = (e) => {
        setInputValue(e.target.value)
    }
    console.log(inputValue);
    return (
        <section>
            <div className={styles.searchbar__container}>
                <input 
                    type="search" 
                    className={styles.address__searchbar}
                    placeholder="Search for any IP address or domain"
                    value={inputValue}
                    onChange={handleSearch}>
                </input>
                <button
                    type="submit"
                    className="search__btn"
                >
                <Image 
                    src='/images/icon-arrow.svg'
                    width={6}
                    height={12}
                    alt=""
                />
                </button>
            </div>
            <div>
                <div>
                    <span>IP ADDRESS</span>
                    <p>{ipAddress}</p>
                </div>
                <div>
                    <span>LOCATION</span>
                    <p>{location}</p>
                </div>
                <div>
                    <span>TIMEZONE</span>
                    <p>{timeZone}</p>
                </div>
                <div>
                    <span>ISP</span>
                    <p>{isp}</p>
                </div>
            </div>
        </section>
    )
}