import React from 'react';
import './Product.css';

const Product = (props) => {
  const { addToCart, product } = props;
  const { name, id, img, price, ratings, seller } = product;
  return (
    <div className='product'>
      <img src={img} alt='product-img' />
      <div className='product-info'>
        <h6 className='product-name'>{name}</h6>
        <p>Price: ${price}</p>
        <p>Brand: {seller}</p>
        <p>Ratings: {ratings}</p>
      </div>
      <button onClick={() => addToCart(product)} className='btn-cart'>
        <p>Add to Cart</p>
      </button>
    </div>
  );
};

export default Product;
