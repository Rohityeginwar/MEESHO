import React,{useState, useEffect} from 'react'
import './detail.css'
import axios from 'axios'
import { useSearchParams, useNavigate} from 'react-router-dom'


const Base_url="https://messhourl.onrender.com" 


const DetailDisplay = () =>{

    const navigate = useNavigate()

    const[searchParam] = useSearchParams()
    const[proDetail, setProDetail] = useState()


    let productId = searchParam.getAll('productId')
    const prodetails = async () => {
        const rdata = await axios.get(`${Base_url}/details/${productId}`);
        setProDetail(rdata.data[0])
    }

    useEffect(() => {
        prodetails() 
    },[])


    const proceed = () => {
        navigate(`/PlaceOrder/${proDetail.product}`)
    }
    const renderDetail = ()=>{
        if(proDetail){
            return(
                <>
                <div className='tileImage'>
                <div className='imageclass'>
                    <img src={proDetail.image} alt={proDetail.product} className='proimage'/>
                </div>
                </div>
                <div className='tileContent'>
                    <div className='content'>
                        <h1>{proDetail.product}</h1>
                        <span id="cfeedback">231 Customers Rating Average</span>
                        <h3>Offer Price Rs. {proDetail.price}</h3>
                            <div>
                                <div className="icons">
                                    <img src="https://i.ibb.co/wJvrhYg/veg.png" alt="" className="iconimg"/>
                                </div>
                                <div className="icons">
                                    <img src="https://i.ibb.co/mD3jpgc/sentizied.png" alt="" className="iconimg"/>
                                </div>
                            </div>
                    </div>
                    <button className="btn btn-primary button" onClick={proceed}>Proceed</button>
                </div>
            </>
            )
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
        <div className='main'>
            {renderDetail()}
        </div>
    </>
    )
}

export default DetailDisplay