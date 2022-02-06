/* eslint-disable @next/next/no-page-custom-font */
import Head from 'next/head';

import Header from 'components/Header/Header';
import Greetings from 'components/Greetings/Greetings';
import AboutMe from 'components/AboutMe/AboutMe';
import Experience from 'components/Experience/Experience';
import Skills from 'components/Skills/Skills';
import Footer from '../components/Footer/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Leonardo Romero</title>
        <meta
          name="description"
          content="This is my personal site and here can you see my career like a developer"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <Greetings />
      <AboutMe />
      <Experience />
      <Skills />
      <Footer />
    </div>
  );
}
