import React, { useState } from "react";
import "./product.css"
import { useStatevalue } from "./stateProvider";

function Product({id,title,image,price,rating}){

    const [basket,dispatch]= useStatevalue();
    console.log("this is basket >>> ",basket)
    const addtobasket= ()=>{

        dispatch({
            type:'ADD_TO_BASKET',
            item:{
                id:id,
                title:title,
                image:image,
                rating:rating,
                price:price,

            },
        });

    };
    return(
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                   {Array(rating)
                   .fill()
                   .map((_, i)=>(
                    <p>*</p> 
                   ))}
                   
                
                   
                    </div> 
            </div>
               <img src= {image} alt="err"/>
               <button onClick={addtobasket}>Add to basket</button>
        </div>
    );
}
export {Product}
