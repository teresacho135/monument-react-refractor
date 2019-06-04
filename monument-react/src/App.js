import React from 'react';
import NavBar from './components/NavBar/NavBar';
// import Landing from './components/Landing/Landing'
import Blog from './components/Blog/Blog'
import Footer from './components/Footer/Footer'

import './App.css';

function App() {
  return (
    <>
      <NavBar />
      {/* <Landing /> */}
      <Blog />
      <Articles />
      <Footer />
    </>
  );
}

export default App;
