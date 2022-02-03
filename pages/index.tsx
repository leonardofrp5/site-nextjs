import Head from 'next/head';
import Image from 'next/image';

import Header from 'components/Header/Header';
import AboutMe from 'components/AboutMe/AboutMe';
import Experience from 'components/Experience/Experience';
import Skills from 'components/Skills/Skills';
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
      <AboutMe />
      <Experience />
      <Skills />
      <Footer />
    </div>
  );
}
