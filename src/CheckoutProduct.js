import React from 'react'
import "./CheckoutProduct.css";
import { useStatevalue } from './stateProvider';

function Checkoutproduct({id,image,title,price,rating}) 
{
 
 const [{basket},dispatch] = useStatevalue();
 
  const removeFromBasket= ()=>{

    dispatch({
        type:'REMOVE_FROM_BASKET',
        id:id
        
        
      });

    }


  return (
    <div className='CheckoutProduct '>
        <img className='CheckoutProduct_image' src={image}
        />

        <div className='CheckoutProduct_info'>
            <p className='CheckoutProduct_title'>{title}</p>
                
                <p className='CheckoutProduct_price'>
                <small>Rs</small>
                <strong>{price}</strong></p>

            <div className='CheckoutProduct_rating'>
            {Array(rating)
                .fill()
                .map((_,i)=>(
                  <p>*</p>
                ))}
            </div>
            <button onClick={removeFromBasket}>Remove from Basket</button>

        </div>
        
      
    </div>
  )
}

export default Checkoutproduct