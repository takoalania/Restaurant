import React from 'react'
import './Product.css';
import { Link } from 'react-router-dom';
import { render } from 'react-dom';

export default function product(props) {
  return (
    <div className="product-card">
        <img src={props.data.image} alt={props.data.name}/>
        <div className="text-container">
            <p><span className='title'>Name:</span> {props.data.name}</p>
            <p className='price'><span className='title'>Price:</span> {props.data.price}$</p>
        </div>
        <div className="button-container">
          {props.page === 'menu' && <button className="cart-button" onClick={props.changeStatus}>Add to Cart</button>}
          {props.page === 'menu' ?
            <button className="details-button">
              <Link to={`/menu/${props.data.id}`}>Details</Link>
            </button> : 
            <button className="details-button">
            <Link to={`/cart/${props.data.id}`}>Details</Link>
            </button>}
          {props.page === 'cart' && 
            <button className="details-button" onClick={props.remove}>
              Remove from Cart
            </button>}
        </div>
    </div>
  )
}
