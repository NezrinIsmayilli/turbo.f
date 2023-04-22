import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './containers/Home';
import Navbar from './components/Navbar';
import WishList from './containers/WishList';
import CarDetails from './containers/CarDetails';

const App = () => {
  return (
    <div className='app'>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/wishlist" element={<WishList/>}/>
    <Route path="/:category/car/:id" element={<CarDetails/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </div>
  )
}

export default App