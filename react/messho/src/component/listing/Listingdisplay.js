import React from 'react';
import {Link} from 'react-router-dom'

const Listingdisplay = (props)=>{

    const renderdata = ({listData}) =>{
        if(listData){
            if(listData.length > 0){
                return listData.map((item)=>{
                    return(
                        <>
                                <div className="image">
                                    <img src={item.image} alt={item.product}/>
                                </div>
                                <div className="head">
                                    <Link to={`/details?productId=${item.product_id}`}>
                                        <div className="name">
                                            <b>{item.product}</b>
                                        </div>
                                    </Link>
                                    <div className="price">
                                       <span>Price:</span> {item.price}
                                    </div>
                                    {/* <div className='label label-primary tags'>
                                        <b>Size:{item.size}</b>
                                    </div>
                                    <div className='label label-info tags'>
                                        <b>Color:{item.color}</b>
                                    </div> */}
                                </div>
                                
                        </>        
                    )
                })
            }
            else{
                return(
                    <h1>no data found</h1>
                )
            }
        }
        else{
            return(
               <>
                    <img src="/image/loader.gif" alt="loader"/>
               </>
            )

        }
    }

    return(
        <>
            <div id="tiles">
                <div className="tilecontainer">
                    {renderdata(props)}
                </div>
            </div>
        </>
    )
}


export default Listingdisplay;