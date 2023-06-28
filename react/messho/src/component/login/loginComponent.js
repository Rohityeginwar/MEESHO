import React,{useState} from 'react'
import {useNavigate}  from 'react-router-dom'
import './log.css'

const url = "http://3.17.216.66:5000/api/auth/login"


const Login = () => {

    let navigate = useNavigate()

    const initialValues = {
        email : "rohit@gamil.com",
        password: "12345678"

    };
    const [values,setvalues] = useState(initialValues);

    const handleInputChange = (e) => {

        const {name, value} = e.target;
        setvalues({
            ...values,
            [name] : value,
        });
    }

    const checkout = () => {

        console.log(values)
        fetch(url,{
            method:'POST',
            headers:{
                'accept' : 'application/json',
                'content-type' : 'application/json'
            },
            body:JSON.stringify(values)
        })
        .then(navigate(`./login`))
    }

    return(
        <>
            <div className="container  log">
                <div className="panel panel-warning">
                    <div className="panel-heading">
                        <h2 className="logheading">Login</h2>
                    </div>

                    <div className="panel-body">
                        <div className="row">
                            <div className="col-md-6  form-group">
                                <label for="email" className="control-label">Email</label>
                                <input id="email" className="form-control" value={values.email} name="email" onChange={handleInputChange}/>
                            </div>
                            <div className="col-md-6 form-group" >
                                <label for="password" ClassName="control-label">Password</label>
                                <input id="password" type="password" className="form-control" name="password" value={values.password} 
                                onChange={handleInputChange}/>
                            </div>
                        </div>
                    </div>

                    <button className="btn btn-info logbtn" onClick={checkout}>
                        Login
                    </button>
                </div>
            </div>
        </>
    )
}


export default Login