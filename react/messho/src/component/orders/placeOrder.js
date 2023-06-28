import React , {useState} from 'react'
import {useParams , useNavigate} from 'react-router-dom'
import './order.css'


const url = "https://messhourl.onrender.com/placeorder"


const PlaceOrder = () => {

    const param = useParams()
    const  navigate = useNavigate()

    const initialValues = {
        id:Math.floor( Math.random()*100000),
        pro_name: param.proName,
        name: "Nidhi",
        email: "nidhi@gmail.com",
        cost: Math.floor(Math.random()*1000),
        phone: "9876543211",
        address: "Hno 12 Sec 34",
    };

    const [values, setValues] = useState(initialValues);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({
          ...values,
          [name]: value,
        });
    };

    const checkOut = () => {
        console.log(values)

        fetch(url,{
            method:'Post',
            headers:{
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(values)
        })
        .then(navigate(`/viewOrder`))
    }
    

    return(
        <>
        <div className="container order" >
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3>Order For {param.proName}</h3>
                </div>
                <div className="panel-body">
                    <div className="row">
                        <div className="col-md-6 form-group">
                            <label for="fname" className="control-label">Name</label>
                            <input className="form-control" id="fname"
                            name="name" value={values.name} onChange={handleInputChange}/>
                        </div>
                        <div className="col-md-6 form-group">
                            <label for="email" className="control-label">Email</label>
                            <input className="form-control" id="email"
                            name="email" value={values.email} onChange={handleInputChange}/>
                        </div>
                        <div className="col-md-6 form-group">
                            <label for="email" className="control-label">Phone</label>
                            <input className="form-control" id="phone"
                            name="phone" value={values.phone} onChange={handleInputChange}/>
                        </div>
                        <div className="col-md-6 form-group">
                            <label for="address" className="control-label">Address</label>
                            <input className="form-control" id="address"
                            name="address" value={values.address} onChange={handleInputChange}/>
                        </div>
                        
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <h2>Total Price is Rs. {values.cost}</h2>
                        </div>
                    </div>
                    <button className='btn btn-success' onClick={checkOut}>
                            Submit
                    </button>
                </div>
            </div>
        </div>
    </>
    )
}


export default PlaceOrder