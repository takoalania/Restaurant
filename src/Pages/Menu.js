import React, { useEffect, useState } from 'react'
import data from '../data.json';
import Product from '../Components/Product';
import './styles.css';

export default function Menu() {
const [products, setProducts] = useState([]);

useEffect(() => {
  setProducts(data);
})

function changeStatus(index) {
  data[index].status = 'added';
  setProducts(data);
}

  return (
    <div className='products-container'>
       {products.map((item, index) => {
         return (
          <Product data={item} key={index} status={item.status} changeStatus={()=>changeStatus(index)} page="menu"/>
        )
       })}
    </div>
  )
}
