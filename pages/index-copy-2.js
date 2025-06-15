import Head from "next/head";
import Image from "next/image";
import Styles from '/styles/Marvel.module.scss'; // scss file for UI
import { Geist, Geist_Mono } from "next/font/google";
//import styles from "@/styles/Home.module.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Marvelverse</title>
      </Head>
      <main className={Styles.main}>
        <h1>Welcome to Marvelverse</h1>
        <p>This is your Marvel homepage built with Next.js</p>
      </main>
    </>
  );
}