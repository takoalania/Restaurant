import React from 'react'
import './ProductPage.css'
import products from '../data.json';
import { useParams, Link } from 'react-router-dom';

export default function ProductPage() {
    let {productID} = useParams()
    let productInfo = products.find((product)=>{
        return product.id == productID
    })
  return (

    <div className='product-container'>
        <img src={productInfo.image} alt={productInfo.name} />
        <div className='product-wrapper'>
          <p><span className='title'>Name:</span> {productInfo.name}</p>
          <p><span className='title'>Category:</span> {productInfo.category}</p>
          <p><span className='title'>Description:</span> {productInfo.description}</p>
          <p><span className='title'>Price:</span> {productInfo.price}$</p>
          <button><Link to={`/menu`}>Back to Menu</Link></button>
        </div>
    </div>
  )
}
