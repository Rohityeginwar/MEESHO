import React,{useState,useEffect} from 'react';
import {link} from 'react-router-dom'

const Listingdisplay = (props)=>{

    const renderdata = ({listdata}) =>{
        if(listdata){
            if(listdata.length >0){
                return(
                    <h1>data</h1>
                )
            }
            else{
                return(
                    <h1>no data found</h1>
                )
            }
        }
        else{
            return(
                <h1>loding</h1>
            )

        }
    }

    return(
        <>
            {renderdata(props)}
        </>
    )
}


export default Listingdisplay;