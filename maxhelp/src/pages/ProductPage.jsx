import React from 'react'
import ProductSidebar from '../components/products/ProductSidebar'
import { Outlet } from 'react-router-dom'

const ProductPage = () => {
  return (
    <div className='grid gap-4 p-4 grid-cols-[220px,_1fr] bg-stone-100 h-[100vh] text-stone-950'>
        <ProductSidebar/>
        <Outlet/>
    </div>
  )
}

export default ProductPage