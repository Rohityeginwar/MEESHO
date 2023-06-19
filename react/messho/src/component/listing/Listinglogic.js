import React,{useState,useEffect} from 'react';
import './listing.css';
import Listingdisplay from './Listingdisplay';
import axios from  'axios';
import {useParams} from 'react-router-dom';

const Base_url="https://messhourl.onrender.com";

const Listing = () => {
    
    const param =useParams();
    const [list,setlist] = useState();

    useEffect (()=> {
        let productlist = param.catID;

        axios.get(`${Base_url}/products?categoryid=${productlist}`)
        .then((res)=>{
            setlist(res.data)
        })
    },[])

    return (
        <>
            <h1>listing</h1>
            <Listingdisplay listdata={list}/>
        </>
    )
}


export default Listing ;