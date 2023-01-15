import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Product from '../Pages/Product'
import Cart from '../Pages/Cart'
const MainRoutes = () => {

  return (
    <>
    <Routes>
        <Route path='/' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
    </Routes>

    </>
  )
}

export default MainRoutes