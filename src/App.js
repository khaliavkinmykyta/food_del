import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HeadlineCards from './components/HeadlineCards';
import Food from './components/Food';
import Category from './components/Category';
import Test from './components/Test';

function App() {
  return (
    <>
      <Navbar />
      <Hero/>
      <HeadlineCards/>
      <Food/>
      <Category/>
    </>
  );
}

export default App;
