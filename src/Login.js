import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import { useState } from 'react';
import { auth, db } from './firebase';

function Login() {
  const navigate = useNavigate();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function SignIn(e) {
    e.preventDefault();
    console.log('signin');

    // Your sign-in logic

  
      auth 
       .signInWithEmailAndPassword(email,password)
       .then((auth) => {
        navigate('/')
       })
       .catch((error) => alert(error.message))    
  
  }

  function register(e) {
    e.preventDefault();

    auth 
    .createUserWithEmailAndPassword(email,password)
    .then((auth)=>{
     if(auth){
          navigate('/')
     }
      //its is succesfully crete user with email and password
    })
    .catch(error=>alert(error.message))

    // Your registration logic
  }

  return (
    <div className='Login'>
      <Link to='/'>
        <img className='Login_image' src='./download.png' alt="Amazon" />
      </Link>

      <div className='Login_container'>
        <h1>Sign in</h1>
        <form>
          <h4>Email</h4>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />

          <h4>Password</h4>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

          <button className="login_signin" type='submit' onClick={SignIn}>Sign in</button>
        </form>
        <p>
          By signing in, you agree to "Amazon's fake clone" conditions of use & sale.
          Please see our Privacy Notice, our Cookies Notice, and our Interest-Based Ads Notice.
        </p>
        <button className='login_register' type='submit' onClick={register}>Create your Amazon account</button>
      </div>
    </div>
  );
}

export default Login;
