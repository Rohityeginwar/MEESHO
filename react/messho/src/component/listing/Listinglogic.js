import React,{useState,useEffect} from 'react';
import './listing.css';
import Listingdisplay from './listingdisplay'
import axios from  'axios';
import {useParams} from 'react-router-dom';
import CostFilter from '../filter/CostFilter'

const Base_url="https://messhourl.onrender.com";


const Listing = () => {


    const param =useParams();
    const [list,setlist] = useState();

    let productlist = param.catID;


    useEffect (()=> {

        axios.get(`${Base_url}/products?categoryid=${productlist}`)
        .then((res)=>{
            setlist(res.data)
        })
        
    },[])


    const setDataPerFilter  = (data) => {

        setlist(data)
    }

    return (
        <>
                <div  id="content">
                    <div id="filter">
                        <CostFilter  proId={productlist} proPerCost={(data) => { setDataPerFilter(data)}} />
                        
                    </div>
                    <Listingdisplay listData={list}/>
                </div>
            
        </>
    )
}


export default Listing ;