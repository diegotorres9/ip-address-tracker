'use client';
import Image from "next/image";
import styles from './search.module.css';
// import { geolocate } from "@/services/geolocation";
// import { useEffect } from "react";


export default function Search({geolocate, handleSearch}) {
    return (
        <section>
            <div className={styles.searchbar__container}>
            <form onSubmit={geolocate}>
                <input 
                    type="search" 
                    className={styles.address__searchbar}
                    placeholder="Search for any IP address or domain"
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
            </form>
            </div>
        </section>
    )
}