import React from 'react'
import './register.css'
import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {useNavigate} from 'react-router'
import { useState } from 'react'
import axios from 'axios'

export default function Login() {
    let navigate=useNavigate();

    const [Login, setLogin] = useState({
        username:"",
        password:""
    });

    const LoginHandler=(e)=>{
      const{name,value}=e.target
      setLogin({
          ...Login,
          [name]:value
      })
    }
    
    const params = {
        username:Login.username,
        password:Login.password,
       
      }
    const FetchUser=()=>{
        axios.get('http://localhost:5000/api/logn',params)
        .then((response)=>{
            console.log(response.data.data)
            navigate('/home')
        })
    }
    return (
        <div className="Register" style={{ width: "100%", height: "100vh" }}>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <h1 className='text-center text-white mt-2'>Login</h1>
                        
                            <div className='row'>
                                <div className='col-lg-6 text-center mt-5 pt-5'>
                                    <Form>
                                        <Form.Group className="mb-3">
                                            <Form.Control type="text" name='username' placeholder="Username" onChange={LoginHandler} />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Control type="password" name='password' placeholder="Password" onChange={LoginHandler}/>
                                        </Form.Group>

                                        
                                        <Button variant="primary" type="submit" onClick={FetchUser}>
                                            Login
                                        </Button><br></br>
                                        
                                        <Link to='/Register' ><label className='text-white mt-2 btn btn-outline-warning' style={{cursor:"pointer"}}>Create New Account</label></Link>
                                    </Form>
                                </div>
                                <div className='col-lg-6 mt-5'>
                                    <img src='https://ordersells.com/wp-content/uploads/2020/05/shopping-transparent-ecommerce-4.png'></img>
                                </div>
                            </div>

                       
                    </div>
                </div>
            </div>
        </div>
    )
}
