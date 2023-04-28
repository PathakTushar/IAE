import React from 'react'
import Navbar from '../components/UI/Navbar'
import Chat from "../components/UI/Chat";
import ProductShowcase from '../components/product/ProductShowcase'
const Shop = () => {
  return (
    <div>
      <Navbar />
      <ProductShowcase />
      <Chat />
    </div>
  )
}

export default Shop
