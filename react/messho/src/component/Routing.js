import React from 'react';
import Header from './Header';
import Footer from './Footer';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Home/Home';
import Main from './Main';
import Listing from './listing/listinglogic';
import DetailDisplay from  './details/DetailLogic';
import PlaceOrder from './orders/placeOrder';
import ViewOrder from './orders/viewOrder';
import Login from './login/loginComponent'
import Register from './login/registerComponent';

const Routing = () =>{
    return(
        <>
            <div>
                <BrowserRouter>
                    <Header/>
                        <Routes>
                            <Route path="/"  element={<Home/>}>
                                <Route index element={<Main/>}/>
                                <Route path="Home"  element={<Main/>}/>
                                <Route path = "listing/:catID"  element={<Listing/>}/>
                                <Route path="details"  element={<DetailDisplay/>}/>
                                <Route path="PlaceOrder/:proName"  element={<PlaceOrder/>}/>
                                <Route path="viewOrder"  element={<ViewOrder/>}/>
                                <Route path="login"  element={<Login/>}/>
                                <Route path="register"  element={<Register/>}/>
                            </Route>
                        </Routes>
                    <Footer/>
                </BrowserRouter>
            </div>
        </> 
    )
}

export default Routing