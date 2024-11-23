import NavBar from '../components/Navbar';
import FruitSearch from '../components/FruitSearch';
import React from 'react';

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
