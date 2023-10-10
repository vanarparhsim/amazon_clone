import React from 'react'
import "./header.css"
import { Link } from 'react-router-dom';
import { useStatevalue } from './stateProvider';


function Header(){

  const [{basket}, dispatch] = useStatevalue();
  return (
    <div className='header'>
      <Link to="/">
      <img
      className='header_logo'
      src=".\download.png" alt='error'   />
      </Link>

    <div className='header__search'>
        <input
        className='header__search_input'
        type="text"/>
        <button className='search_button' >
        <i className="fa fa-search" ></i>
        </button>
       
        </div>
        <div className='header_nav'>
      <div className='header_option'>
        <span className='header_option1'>Hello guests</span>
        <br></br>

        <span className='header_option2'> <Link to="/login"> Sign In</Link></span>

      </div>


      <div className='header_option'>
        <span className='header_option1'>Returns </span>
        <br></br>
        <span className='header_option2'> Orders</span>

      </div>


      
      <div className='header_option'>
        <span className='header_option1'>Yours </span>    
        <br></br>   
        <span className='header_option2'> Prime</span>

      </div>
      <Link to="/checkout">
      <div className='header_optionBasket'>
      <i class="fa fa-shopping-basket"></i>
      <span className='header_basketcount'>{basket?.length}</span>
      </div>
      </Link>
      </div>
     
    </div>
    

  );
}

export { Header}   
