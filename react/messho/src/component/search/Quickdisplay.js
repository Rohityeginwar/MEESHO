import React from 'react'
import {Link} from 'react-router-dom'

const Quickdisplay = (props)=>{

    const types =({Quicksearch}) => {

        if (Quicksearch){
            return(Quicksearch.map((item) => {

                return(

                    <Link to={`/listing/${item.id}`}>
                        <div >
                            <img src={item.img} alt={item.category} className="category"/>
                            <div className="names">{item.category}</div>
                        </div>
                    </Link>
                )
            }))
        }
    }
    return(
        <>
            <div className="everything">
                <div className="all">All</div>
                <div className="all">Women</div>
                <div className="all">Men</div>
                <div className="all">Kids</div>
                <div className="all">Electronics</div>
                <div className="all">Home & Kitchen</div>
            </div>
            <div id="location">
            <img className="point" src="/image/geo-alt.svg" alt="point"/> Add Delivery Location To get Extra Discount 
            </div>
            <div id="category">
               {types(props)}
            </div>
        </>
    )
}

export default Quickdisplay