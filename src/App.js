
import './App.css';
import { Header } from './Header';
import { Checkout } from './checkout';
import { Home } from './home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './Login.js';
import { useEffect } from 'react';

function App() {

  // useEffect(() => {

  // },[user,basket])

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
