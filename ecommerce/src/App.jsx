import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './Pages/HomePage';
import { CheckoutPage } from './Pages/checkout/CheckoutPage';
import { OrdersPage } from './Pages/OrdersPage';
import {TrackingPage} from './Pages/TrackingPage'
import './App.css';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path='/tracking' element={<TrackingPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
