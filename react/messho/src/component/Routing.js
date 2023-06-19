import React from 'react';
import Header from './Header';
import Footer from './Footer';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Home/Home';
import Main from './Main';
import Listing from './listing/Listinglogic'

const Routing = () =>{
    return(
        <>
            <div>
                <BrowserRouter>
                    <Header/>
                        <Routes>
                            <Route path="/"  element={<Main/>}>
                                <Route index element={<Home/>}/>
                                <Route path="Home"  element={<Home/>}/>
                                <Route path="listing/:catId"  element={<Listing/>}/>
                            </Route>
                        </Routes>
                    <Footer/>
                </BrowserRouter>
            </div>
        </> 
    )
}

export default Routing;