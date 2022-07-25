import React from 'react';
import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';
import LoveToDo from '../components/loveToDo/LoveToDo';
import Portfolios from '../components/portfolio/Portfolios';
import Progressbar from '../components/progressbar/Progressbar';
import Footer from '../components/footer/Footer';

const Home = () => {
  return (
    <>
      <Hero />
      <AboutMe />
      <LoveToDo />
      <Progressbar />
      <Portfolios />
      <Footer />
    </>
  )
}

export default Home;