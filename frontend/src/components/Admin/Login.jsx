
import React, { useState } from 'react'
import './login.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [values, setValues] = useState({
        email: '',
        password: '',
    })
    const [error, setError] = useState(null)
    const navigate = useNavigate();
    
    axios.defaults.withCredentials = true
    
    const handleSubmit = (event) => {
        event.preventDefault()
        
        // Validation to ensure email and password are not empty
        if (!values.email || !values.password) {
            setError("Please fill in both email and password fields.")
            return
        }
        
        axios.post('http://localhost:3000/auth/adminlogin ', values)
        .then(result => {
            if (result.data.loginStatus) {
                navigate('/Dashboard')
            } else {
                setError(result.data.Error)
            }
        })
        .catch(err => {
            console.error(err)
            setError("An error occurred. Please try again later.")
        })
    }

    return (
        <div className='d-flex justify-content-center align-items-center vh-100 loginPage'>
            <div className='p-3 rounded w-25 h-50 border loginForm'>
                <div className='text-danger'>
                    {error && error}
                </div>
                <h2>Login Page</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="email"><strong>Email:</strong></label>
                        <input 
                            type="email" 
                            name="email" 
                            autoComplete='off' 
                            placeholder='Enter Email'
                            className='form-control rounded-0'
                            onChange={(e) => setValues({ ...values, email: e.target.value })}
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password"><strong>Password:</strong></label>
                        <input 
                            type="password" 
                            name="password" 
                            placeholder='Enter Password' 
                            className='form-control rounded-0'
                            onChange={(e) => setValues({ ...values, password: e.target.value })}
                        />
                    </div>
                    <button type='submit' className='btn btn-success w-100 rounded-0 mb-2'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Login
