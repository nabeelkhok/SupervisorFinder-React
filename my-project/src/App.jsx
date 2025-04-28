import React from 'react';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import Home from "./components/views/Home";


const App = () => {
  return (
    <>
      <Navbar/>
      <main className="container mx-auto px-4 py-8">
        <Home/>
      </main>
      <Footer/>
    </>
  );
};

export default App;