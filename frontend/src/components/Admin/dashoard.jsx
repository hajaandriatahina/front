import React from 'react'
import Logo from '../../../public/image/logo.jpg'
import'./idex.css'
import { BiHome, BiAlarmExclamation, BiFile,  BiMagnet, BiPaint, BiTime } from 'react-icons/bi'
import { Link, Outlet } from 'react-router-dom'





const dashoard = () => {
  return (
    <div>
         <div class="side-menu">
        <div class="brand-name">
            <h1>Brand</h1>    
        </div>
        <ul>
            <li><BiHome /><Link to="/Dashboard" className='text-white w-100'> Dashboard</Link></li>
            <li><BiPaint /><Link to="/Dashboard/Pantie" className='text-white w-100'>Pantie</Link></li>
            <li ><BiFile />Dossier</li>
            <li><BiTime />rendevour</li>
            <li><BiAlarmExclamation />tretement</li>
            <li><BiMagnet />Medicament</li>
        </ul>
    </div>
    <div class="container">
        <div class="header">
            <div class="nav">
                <div class="search">
                    <input type="text" name="" id="" />
                    <button type="submit">Go</button>
                </div>
                <div class="user">
                    <a href="#" class="btn">Add New</a>
                    <div class="img-case">
                        <img src={Logo} alt="" className='img' />
                    </div>


                </div>

            </div>
        </div>
        

    </div>
    

      
    </div>
  )
}

export default dashoard
