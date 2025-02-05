import React from 'react'
import './idex.css'
import { Link, Outlet} from 'react-router-dom'
import './idex.css'
import { BiHome, BiAlarmExclamation, BiFile,  BiMagnet, BiPaint, BiTime } from 'react-icons/bi'




const idex = () => {
  return (
    <div>
        <div class="side-menu">
        <div class="brand-name">
            <h1>Brand</h1>    
        </div>
        <ul>
            <li><BiHome /><Link to="/" className='text-white w-100'> Dashboard</Link></li>
            <li><BiPaint /><Link to="Dashboard/Pantie"className='text-white w-100'>Pantie</Link></li>
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
                    <h5 >Bienvenui sur le Page de Pantie</h5>
                </div>
                <div class="user">
                    <a href="#" class="btn">Add New</a>


                </div>

            </div>
        </div>
        <div class="content">
            <div class="content-2">
                <div class="react-payments">
                    <div class="tilte">
                        <h2>Recent Payments</h2>
                        <a href="#" class="btn" > View All</a>
                    </div>
                    <table>
                        <tr>
                            <th>Nom</th>
                            <th>Prenom</th>
                            <th>Email</th>
                            <th>Num</th>
                            <th>Optio</th>
                            
                        </tr>
                        <tr>
                            <td>TAHINA</td>
                            <td>Haja</td>
                            <td>i@gmail.com</td>
                            <td>0344230811</td>
                            <td><a href="#" class="btn">Vue all</a></td>
                        </tr>
                    </table>


                </div>
                <div class="new-students">
                    <div class="tilte">
                        <h2>Recent Payments</h2>
                        <a href="#" class="btn" > View All</a>
                    </div>
                    <table>
                        <tr className=''>
                            <th>Produit</th>
                            <th>Name</th>
                            <th>option</th>
                        </tr>
                        <tr className=''>
                            <td>Manga</td>
                            <td>Haja</td>
                            <td>
                                <a href="#" class="btn">Vue</a>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
    
        </div>

    </div>
    <Outlet />
      
    </div>
  )
}

export default idex
