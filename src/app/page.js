'use client';
import Search from "@/components/Search";
import styles from './page.module.css';
import dynamic from "next/dynamic";

const Map = dynamic(() => import('@/components/Map'), 
  {
    loading: () => <p>map is loading...</p>, 
    ssr: false
  });

export default function Home() {
  return (
    <main>
      <section className={styles.tracker__container}>
        <h1>IP Address Tracker</h1>
        <Search />
      </section>
      <Map />
    </main>
  );
}
