import Head from 'next/head';

import Header from '../components/Header/Header';
import Skiils from '../components/Skills/Skills';
import Experience from '../components/Experiences/Experiences';
import Footer from '../components/Footer/Footer';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Leonardo Romero</title>
        <meta
          name="description"
          content="This is my personal site and here can you see my career like a developer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        {/* <img className={styles.imageProfile} src="/images/photo-home.jpg" alt="photo profile" /> */}
        <h1 className={styles.title}>Coming soon</h1>
      </main>
      <Experience />
      <Skiils />
      <Footer />
    </div>
  );
}
