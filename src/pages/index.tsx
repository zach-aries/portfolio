import Head from "next/head";
import { Roboto } from "next/font/google";

import styles from "@/styles/home.styles";
import Hero from "@/components/molecules/Hero";
import Navigation from "@/components/molecules/Navigation";

const roboto = Roboto({ weight: "500", subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Zachary Aries - Software Engineer</title>
        <meta name="description" content="Zachary Aries - Software Engineer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/portfolio/favicon.ico" />
      </Head>
      <Navigation position="absolute" transparent />
      <main className={roboto.className}>
        <div className={styles.heroContainer}>
          <Hero title="Zach Aries" />
        </div>
      </main>
    </>
  );
}
