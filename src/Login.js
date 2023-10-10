import React from 'react'
import { Link } from 'react-router-dom';
import "./Login.css";
import { useState } from 'react';

function Login() {
  
  const [email,setemail]=useState('');
  const [password,setpassword]=useState('');

  const SignIn = e => {
    e.preventDefault();
  }



  const register= e => {
    e.preventDefault();
  }
  return (
    <div className='Login'>
        <Link to = "/">
        <img className='Login_image' src=".\download.png" />
        </Link>

        <div className='Login_container'>
            <h1>Sign in</h1>   
            <form>
                <h4>email</h4>
                <input type= "text" value={email} onChange={e=> setemail(e.target.value)}/>

                <h4>Passwrd</h4>
                <input type= "password"value={password} onChange={e=> setpassword(e.target.value)}/>

                <button className="login_signin" type='submit' onClick={SignIn()}>Sign in</button>
            </form>
            <p>
              by signing in you agree to "amazon's fake clone"
              conditions of use & sale.
              please see our Privacy Notice, our Cookies Notice 
              and our Interest-Based Ads 
              Notice.
            </p>
            <button className='login_register'type='submit' onClick={register()}>Create your amazon acount</button>
        </div>
     
    </div>
  )
}

export default Login
