
import {Navigate, Route, Routes, useNavigate} from "react-router-dom";

import Home from "./components/Home/Home.jsx";
import Cart from "./components/Cart/Cart.jsx";
import SingleProduct from "./components/SingleProduct/SingleProduct.jsx";
import Login from "./components/Auth/Login.jsx";
import Register from "./components/Auth/Register.jsx";
import {useEffect, useState} from "react";
import AuthContainer from "./components/Auth/AuthContainer.jsx";
import Header from "./components/Header/Header.jsx";

const NotFound = () => <h1>Not Found</h1>

const App = () => {
    const [isAuth,setIsAuth ] = useState(() => JSON.parse(localStorage.getItem('user')))



    // if(!isAuth?.password && !isAuth?.email){
    //     return <h2>Loading</h2>
    // }

  return (
      <>
          <Header/>
          <Routes>
              <Route index element={<Home/>} />
              <Route path="login" element={<Login setIsAuth={setIsAuth}/>} />
              <Route path="register" element={<Register />} />
              <Route path="product/:id" element={<SingleProduct/>} />
              <Route path="cart" element= {<Cart/>} />
              <Route path="*" element={<NotFound/>} />
          </Routes>
      </>

  )
}

export default App
