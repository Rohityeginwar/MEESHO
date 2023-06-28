import React , {useState}from 'react'
import {useNavigate} from 'react-router-dom'
import './log.css'


const url = "http://3.17.216.66:5000/api/auth/register"


const Register = () => {

    let navigate = useNavigate()

    const initialValues = {
        name:"rohit",
        email:"rohit@gamil.com",
        password:'12345678',
        phone:"9876543210"
    }

    const [ values , setValues] = useState(initialValues)
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({
          ...values,
          [name]: value,
        });
    }
    const checkout = () => {
        console.log(values)
        fetch(url,{
            method: 'POST',
            headers:{
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(values)
        })
        .then(navigate(`/register`))
    }

    return(
        <>
          <div className="container log">
            <div className="panel panel-danger">
                <div className="panel-heading">
                    <h2 className="logheading">Register</h2>
                </div>

                <div className="panel-body">
                    <div className="row">
                       <div className="col-md-6 form-group">
                            <label for="name" className="label-control" >Name</label>
                            <input className="form-control" id="name" value={values.name} name="name" onChange={handleInputChange}/>
                        </div> 
                        <div className="col-md-6 form-group">
                            <label for="email" className="label-control">Email</label>
                            <input className="form-control" id="email" value={values.email} name="email" onChange={handleInputChange}/>
                        </div> 
                        <div className="col-md-6 form-group">
                            <label for="password" className="label-control" >Password</label>
                            <input className="form-control" id="password" value={values.password} name="password" onChange={handleInputChange}/>
                        </div> 
                        <div className="col-md-6 form-group">
                            <label for="phone" className="label-control">Phone</label>
                            <input className="form-control" id="phone" value={values.phone} name="phone" onChange={handleInputChange}/>
                        </div> 
                    </div>
                </div>

                <button className="btn btn-success logbtn" onClick={checkout}>
                    Register
                </button>
            </div>
          </div>
        </>
    )
}


export default Register