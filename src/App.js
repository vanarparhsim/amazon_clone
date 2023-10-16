
import './App.css';
import { Header } from './Header';
import { Checkout } from './checkout';
import { Home } from './home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './Login.js';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStatevalue } from './stateProvider';

function App() {

  const[{user,basket},dispatch] = useStatevalue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser=>{
      console.log('this is user>>>',authUser);

      if(authUser){

        dispatch({

        type:"SET_USER", 
        user:authUser})
     
      }

      else{
        dispatch({
          type:"SET_USER",
          user:null})
      }
      
    })

  },[user,basket])

  return (



    <BrowserRouter>
    <Routes>
    <Route path='/' element={<><Header/><Home/></>}></Route>
    <Route path='/checkout' element={<><Header/><Checkout/></>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    </Routes>
    </BrowserRouter>

  );
}

export default App;
