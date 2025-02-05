import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.json'
import  '../../styles/dasboard.css'
import Logo from '../../../public/image/logo.jpg'
import {  BiEnvelope, BiEqualizer, BiHome, BiHomeAlt2, BiHourglass, BiNotification, BiPowerOff, BiSearch, BiVideo, BiWorld } from 'react-icons/bi'
import { Link, Outlet } from 'react-router-dom'


const Dasboard = () => {
  return (
    <div>
        <input type="text" name="" id="menu-toggle" />
        <div className='sidebar '>
            <div className='side-header'>
                <h2>M<span>oder</span></h2>
            </div>
            <div className='profile'>
                     <img src={Logo} alt=""  className='profil-img bg-img'/>
                    <h3>Davide Green</h3>
                    <small>Art Director</small>
           </div>
            <div className='side-menu'>
                <ul>
                    <li>
                        <a href=""  className='active'>
                           <span ><BiHomeAlt2 /></span> 
                           <small>Dashboard</small>
                        </a>
                    </li>
                    <li>
                        <Link to="/Personnel">
                           <span ><BiHome /></span> 
                           <small>Personnele</small>
                        </Link>
                    </li>
                    <li>
                        <a href="">
                           <span > <BiWorld /></span> 
                           <small>Employer</small>
                        </a>
                    </li>
                    <li>
                        <a href="">
                           <span ><BiEqualizer /></span> 
                           <small>Emissions</small>
                        </a>
                    </li>
                    <li>
                        <a href="">
                           <span ><BiVideo /></span> 
                           <small>Video</small>
                        </a>
                    </li>
                    <li>
                        <a href="">
                           <span ><BiHome /></span> 
                           <small>Utilisateurs</small>
                        </a>
                    </li>
                </ul>

            </div>
        </div>
        <div className='main-content'>
            <header>
                <div className='header-content'>
                    <label htmlFor="nav-toggle">
                        <span className='bi-palette2'></span>
                    </label>
                    <div className='header-menu'>
                        <label htmlFor="">
                            <span ><BiSearch /> </span>
                        </label>
                        <div className='notify-icon'>
                            <span  ><BiEnvelope /></span>
                            <span className='notify'>4</span>
                        </div>
                        <div className='notify-icon'>
                            <span ><BiNotification /></span>
                            <span className='notify'>3</span>
                        </div>
                        <div className='user'>
                            <img src={Logo} alt=""  className='bg-img'/>
                            <span><BiPowerOff /></span>
                            <span >Logout</span>
                        </div>

                    </div>
                    


                </div>
                
            </header>
            <main>
                <div className="page-header">
                    <h2>Dasboard</h2>
                    <small>Home/Dasboard</small>
                </div>
                <div className="page-content">
                <div className="analytics ">
                    <div className="card">
                        <div className="card-head">
                            <h2>107,200</h2>
                            <span><BiHome /></span>
                        </div>
                        <div className="card-progress">
                            <small>User activity this month</small>
                            <div className="card-indicator">
                                <div className="indicator one" ></div>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-head">
                            <h2>107,200</h2>
                            <span ><BiHourglass /> </span>
                        </div>
                        <div className="card-progress">
                            <small>User activity this month</small>
                            <div className="card-indicator">
                                <div className="indicator two"></div>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-head">
                            <h2>107,200</h2>
                            <span ><BiEnvelope /> </span>
                        </div>
                        <div className="card-progress">
                            <small>User activity this month</small>
                            <div className="card-indicator">
                                <div className="indicator thee"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="records ">
                    <div className="record-header">
                        <div className="add">
                            <span>Entries</span>
                            <select name="" id="" ><option value="Id">ID</option>
                            </select>
                            <button>Add record</button>
                        </div>
                        <div className="browse">
                        <input type="search"  className='record-search'/>
                            <select name="" id="" ><option value="Id">Statu</option>
                            </select>
                        </div>
                    </div>

                    <div className="table-responsie">
                    <table width="100%">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Client</th>
                                    <th>tontal</th>
                                    <th>Balance</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>5</td>
                                    <td>SSSS</td>
                                    <td>$cv</td>
                                    <td>$dxfg</td>
                                </tr>
                            </tbody>

                        </table>
                    </div>
                </div>
                </div>
                
                
            </main>

        </div>
      
    </div>
  )
}

export default Dasboard
