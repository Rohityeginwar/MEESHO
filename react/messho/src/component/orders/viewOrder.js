import React ,{useState,useEffect}from 'react'
import axios from 'axios'
import DisplayOrder from './displayorder'

const url = "https://messhourl.onrender.com/orders"



const ViewOrder =  () => {


    const [order , setorder] = useState()

    useEffect(()=>{
        axios.get(url)
        .then((res)=>{
            setorder(res.data) 
        })
    })

    return(
        <>
         <DisplayOrder orderData={order}/>
        </>
    )
}


export default ViewOrder