import React from 'react'
import AddToCart from './AddToCart'
//import styles from './ProductCard.module.css'

const ProductCard = () => {
  return (
    <>  
        <div className='p-0 my-5 bg-sky-400 text-white text-xl hover:bg-sky-600'>Product Card
        <AddToCart/>
        </div>
    </>
    
  )
}

export default ProductCard