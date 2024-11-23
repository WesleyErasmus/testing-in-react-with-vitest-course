import React from 'react';
import FruitSearch from '../components/FruitSearch';
import NavBar from '../components/Navbar';

const Home = () => {
  return (
    <>
      <NavBar />
      <div>
        <h1 className="text-center p-3">Hello World</h1>
        <FruitSearch />
      </div>
    </>
  );
};

export default Home;
