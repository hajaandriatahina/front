import React from 'react'
import "bootstrap-icons/font/bootstrap-icons.css"
import { Link, Outlet } from 'react-router-dom'
const tabloude = () => {
  return (
    <div className='container-fluid'>
        <div className='row flex-nowrap'>
            <div className='col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-info'>
                <div className='d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100'>
                    <Link 
                    to="/dashboard"
                    className='d-flex align-items-center pb-3 mb-md-1 mt-md-5 text-white  text-decoration-none'>
                        <span className='fs-5 fw-bold d-none d-sm-inline'>
                            Policlinique PSFA
                        </span>
                    </Link>
                    <ul className='nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start'
                    id='menu'>
                        <li className='w-100'>
                            <Link to="/Dashboard" className='nav-link text-white px-0 align-middle'>
                            <i className='fs-4 bi-hospital ms-2'></i>
                            <span className='ms-2 d-none d-sm-inline'>Dashboard</span>
                            </Link>
                        </li>
                        <li className='w-100'>
                            <Link to="/Dashboard/Personnel" className='nav-link text-white px-0 align-middle'>
                            <i className='fs-4 bi-houses ms-2'></i>
                            <span className='ms-2 d-none d-sm-inline'>Personnel</span>
                            </Link>
                        </li>
                        <li className='w-100'>
                            <Link to="/Dashboard/Pantie" className='nav-link text-white px-0 align-middle'>
                            <i className='fs-4 bi-signpost ms-2'></i>
                            <span className='ms-2 d-none d-sm-inline'>Pantie</span>
                            </Link>
                        </li>
                        <li className='w-100'>
                            <Link to="/Dashboard/Dossiers_medicaux" className='nav-link text-white px-0 align-middle'>
                            <i className='fs-4 bi-discord ms-2'></i>
                            <span className='ms-2 d-none d-sm-inline'>Dossier_medicaux</span>
                            </Link>
                        </li>
                        <li className='w-100'>
                            <Link to="/Dashboard/Traitements" className='nav-link text-white px-0 align-middle'>
                            <i className='fs-4 bi-table ms-2'></i>
                            <span className='ms-2 d-none d-sm-inline'>Traitements</span>
                            </Link>
                        </li>
                        <li className='w-100'>
                            <Link to="/Dashboard/Rendezvous" className='nav-link text-white px-0 align-middle'>
                            <i className='fs-4 bi-terminal ms-2'></i>
                            <span className='ms-2 d-none d-sm-inline'>Rendezvous</span>
                            </Link>
                        </li>
                        
                    </ul>
                </div>
            </div>
            <div className='col p-0 m-0'>
                <div className='p-2 d-flex justify-content-center shadow'>
                    <h4>Policlinique PSFA</h4>
                </div>
                <Outlet />
            </div>
        </div>

    </div>
  )
}

export default tabloude
