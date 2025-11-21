import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './Pages/HomePage';
import { CheckoutPage } from './Pages/checkout/CheckoutPage';
import { OrdersPage } from './Pages/OrdersPage';
import {TrackingPage} from './Pages/TrackingPage'
import './App.css';
import './index.css';
import { useState,useEffect } from 'react';

function App() {
  const [cart, setCart] = useState([])
  useEffect( () =>{
    axios.get("/api/cart-items")
            .then((response) =>{
                setCart(response.data)
                
            })

  })
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage cart={cart} />} />
        <Route path="/checkout" element={<CheckoutPage cart={cart} />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path='/tracking' element={<TrackingPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
