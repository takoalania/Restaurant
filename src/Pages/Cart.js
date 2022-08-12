import React, { useEffect, useState } from 'react'
import data from '../data.json';
import Product from '../Components/Product';
import './styles.css';

export default function Menu() {
const [products, setProducts] = useState([]);
const [price, setPrice] = useState(0);

let cardProducts = data.filter((product)=>{
  return product.status === 'added';
})

let sumPrice = cardProducts.reduce(function(prev, current) {
  return prev + +current.price
}, 0);

useEffect(() => {
  setProducts(cardProducts);
  setPrice(sumPrice);
},[])

function removeProduct(index){
  cardProducts[index].status = 'add to cart';
  setProducts(cardProducts);
}



  return (
    <div style={{display: 'flex', flexDirection: 'column', padding: '24px', backgroundColor:'#e9d8a6'}}>
      <p style={{marginBottom: '20px', fontWeight: 'bold'}}>Count: {products.length}</p>
      <p style={{marginBottom: '20px', fontWeight: 'bold'}}>Price: {price}$</p>
      <div  className='products-container'>
      {products.map((item, index) => {
        if(item.status === 'added') {
         return (
          <Product data={item} key={index} page="cart" remove={() => removeProduct(index)}/>
        )}
       })}
      </div>
    </div>
  )
}
