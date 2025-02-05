import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/navabar.css'
import Logo from '../../../public/image/logo.jpg'


const dasboardf = () => {
  return (
        <div>
            <nav className='navbar navbar-expand-lg navbar-info bg-info d-flex justify-content-between '>
            <h5 className='text-white m-3'>Poiclinique PSFA</h5>
            <div className='d-flex'></div>
            <ul className='d-flex navbar-nav '>
                <li className='nav-item'><Link to="/" className='nav-link'>Admin</Link></li>
                <li className='nav-item'><Link to="/" className='nav-link'>Doctor</Link></li>
                <li className='nav-item'><Link to="/" className='nav-link'>Patient</Link></li>
            </ul>
        </nav>
        <div className='w-75 justify-content-center  align-items-center p-5'>
            <img src={Logo} alt="" />
        </div>
        <div className='container m-5 '>
            <div className='col-md-12'>
                <div className='row display-6 justify-content-around'>
                    <div className='col-md-3 mx-1 shadow '>
                        <img src={Logo} alt=""  className='w-75 p-5 '/>
                        <p></p>
                    </div>
                    <div className='col-md-3 mx-1 shadow'>
                        <img src={Logo} alt=""  className='w-100 p-5'/>
                    </div>
                    <div className='col-md-3 mx-1 shadow'>
                        <img src={Logo} alt=""  className='w-75 p-5'/>
                    </div>
                </div>
            </div>
        </div>
        </div>
    
  )
}

export default dasboardf
