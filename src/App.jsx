import React, { useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

import Home from './Pages/Home/Home'
import Card from './Pages/Card/Card'
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder'
import Footer from './Component/Footer/Footer'
import Navbar from './Component/Navbar/Navbar'
import LoginPopup from './Component/LoginPopup/LoginPopup'
import Aboutus from './Pages/Aboutus/Aboutus'
import Contact from './Pages/Contact/Contact'
import Shop from './Pages/Shop/Shop'
import ScrollToTop from './Component/ScrollToTop/ScrollToTop'
import ProductDetails from './Component/ProductDetails/ProductDetails'


const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const location = useLocation();

  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className='app'>
        <ScrollToTop />
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/aboutus' element={<Aboutus />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:categoryName" element={<Shop />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path='/enquire' element={<Contact />} />
          <Route path='/cart' element={<Card />} />
          <Route path='/order' element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer/>
    </>
  )
}

export default App
