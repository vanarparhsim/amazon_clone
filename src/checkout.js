import React from 'react'
import "./checkout.css"
import { Subtotal } from './subtotal'
import { useStatevalue } from './stateProvider';
import Checkoutproduct from "./CheckoutProduct.js"

function Checkout() {
  const[{basket,user},dispatch]=useStatevalue();
  return (
    <div className='checkout'>
        <div className='checkout_left'>
            <img className='checkout_add' src='72114d98-da1f-45d0-b2df-c868a458f938.jpg' alt='err'/>
        
          <div>
            <h3>hello,{user?.email}</h3>
            <h2 className='checkout_title'>
               your shopping basket</h2>
               {basket.map(item=>(
                  <Checkoutproduct
                  id={item.id}
                  title ={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                  />

                ))}


          </div>
        
        </div>
        <div className='checkout_rigt'>
         
           <Subtotal/>
        </div>
    </div>
  )
}

export  {Checkout}
