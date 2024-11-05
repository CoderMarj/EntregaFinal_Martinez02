
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NotFount from './components/NotFount';
import {CartProvider } from './components/context/CartContext';

import Carrito from './components/Carrito';
import Checkout from './components/Checkout';
import Contacto from './components/Contacto';
import Footer from './components/Footer';


const App = () => {


   return (
      <CartProvider>
         <BrowserRouter>

            < Navbar />

            < Routes >

               < Route path="/" element={<ItemListContainer />} />
               < Route path="/item/:id" element={<ItemDetailContainer />} />
               < Route path="/productos" element={<ItemListContainer />} />
               < Route path="/productos/:categoria" element={<ItemListContainer />} />
               < Route path="*" element={<NotFount />} />
               < Route path="/contacto" element={< Contacto />} />
               < Route path="/carrito" element={< Carrito />} />
               < Route path="/checkout" element={< Checkout />} />

            </Routes>

         </BrowserRouter>
      </CartProvider>
   )
}

export default App;
