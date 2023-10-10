import React from 'react'
import { Product } from './product.js'
import "./home_.css"

function Home() {
  return (
    <div className="home">
      <div className='home_container'>
      <img  className='home_image'src="efc3bfec-3d3e-4932-93ff-87d06b03c592.jpg"/>
    <div className='home_row'>
      <Product
      id="1"
      title="the lean start up"
      rating={5}
      price={19.99}
      image="download.jpg"
      />

      <Product
      id="1"
      title="the lean start up"
      rating={5}
      price="19.99"
      image="download.jpg"
      />
      </div>
      <div className='home_row'>
      <Product
      id="2"
      title="the lean start up"
      rating={5}
      price="19.99"
      image="download.jpg"
      />
      <Product
      id="3"
      title="the lean start up"
      rating={5}
      price="19.99"
      image="download.jpg"
      />
      <Product
      id="4"
      title="the lean start up"
      rating={5}
      price="19.99"
      image="download.jpg"
      />
      </div>
      <div className='home_row'>
      <Product
      id="5"
      title="Gaming Monitor "
      rating={5}
      price="199.99"
      image="in-gaming-monitor-c49g95tssw-lc49g95tsswxxl-swivelwhite-335279637.webp"
      />
      </div> 
      </div>
      </div>
  )
}

export {Home}
