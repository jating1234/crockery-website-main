import Navbar from './component/navBar/navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { React, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

import Home from './pages/Home'
import Cart from './pages/Cart'
import ShopCategory from './pages/shopCategory'
import Login from './pages/Login'
import SignUp from "./pages/signUp"
import Product from './pages/product'
import Footer from '../src/component/footer/footer'
import SearchItem from './component/SearchItem/SearchItem'
import Protected from './pages/protected'

import kitchen from './assets/image/Kitchen.png';
import Decor from './assets/image/Decor.png';
import Living from './assets/image/living.jpg';
import { ToastContainer } from "react-toastify"



function App() {

  const [cart, setCart] = useState([{cart:[0] , id:uuidv4()}])


  return (
    <>
      <BrowserRouter>
        <Navbar size={cart.length} />
        <Routes>
          <Route path='/' element={<Home cart={cart} setCart={setCart} id={cart.id} />} />
          <Route path='/Decor' element={<ShopCategory banner={Decor} Category="decor" cart={cart} setCart={setCart} id={cart.id}  />} />
          <Route path='/DiningKitchen' element={<ShopCategory banner={kitchen} Category="dinning and kitchen" cart={cart} setCart={setCart} id={cart.id} />} />
          <Route path='/Living' element={<ShopCategory banner={Living} Category="Living" cart={cart} setCart={setCart} id={cart.id} />} />

          {/* <Route path='/product' element={<Product />}>
            <Route path=':ProductID' element={<Product />} />
          </Route> */}

          <Route path='/search/:term' element={<SearchItem />} />

          <Route path='/product' element={<Protected>
            <Product />
          </Protected>} />


          <Route path='/Login' element={<Login />} />
          <Route path='/register' element={<SignUp />} />


          <Route path='/cart' element={<Cart  cart={cart} setCart={setCart}/>} />

        </Routes>
        <ToastContainer />

        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
