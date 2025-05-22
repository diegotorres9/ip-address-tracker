'use client';
import Search from "@/components/Search";
import Location from "@/components/Location";
import styles from './page.module.css';
import dynamic from "next/dynamic";
import { useState } from "react";


const Map = dynamic(() => import('@/components/Map'), 
  {
    loading: () => <p>map is loading...</p>, 
    ssr: false
  });

export default function Home() {
  const [inputValue, setInputValue] = useState('');
  const [locationData, setLocationData] = useState([])

  const handleSearch = (e) => {
    setInputValue(e.target.value);
  }

  const geolocate = async (e) => {
    if(e) e.preventDefault();
    const data = await fetch(`https://geo.ipify.org/api/v1?apiKey=${process.env.NEXT_PUBLIC_API_KEY}&ipAddress=${inputValue}&domain=${inputValue}`);
    const locationData = await data.json();
    // console.log(locationData);
    setLocationData(locationData);
    return locationData;
  }


  return (
    <main>
      <section className={styles.tracker__container}>
        <h1 className={styles.title}>IP Address Tracker</h1>
        <Search 
        geolocate={geolocate}
        handleSearch={handleSearch}
        
        />
        <Location
          locationData={locationData}
        />
      </section>
        <Map 
            locationData={locationData}
        />
    </main>
  );
}
