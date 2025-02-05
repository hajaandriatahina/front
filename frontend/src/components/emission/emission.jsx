import React from 'react'
import '../../styles/tamble.css'
import { Link } from 'react-router-dom'


const emission = () => {
  return (
    <div>
        <section className='p-3 mt-5 bbbbbbb'>
        <div className='row p-4'>
            <div className='col-12'>
                <button className='btn btn-primary bi bi-people' data-bs-toggle="modal" data-bs-target="#userForm"> New User</button>

            </div>

        </div>
        <div className='row'>
            <div className='col-12'>
                <table className='table table-striped table-hover mt-3 text-center table-bordered'>
                    <thead>
                        <tr >
                            <th>Nom</th>
                            <th>Prenom</th>
                            <th>Class</th>
                            <th>Num</th>
                            <th>Num</th>
                            <th>cein</th>
                        </tr>
                    </thead>
                    <tbody id='data'>
                        <tr>
                        <td>haja</td>
                        <td>feno</td>
                        <td>L3</td>
                        <td>0344230811</td>
                        <td>333333</td>
                        <td>3333333</td>
                        </tr>

                    </tbody>

                </table>
            </div>
        </div>

    </section>
    <div className='modal fade' id='userForm'>
        <div className='modal-dialog modal-dialog-centered modal-lg'>
            <div className='modal-content'>
                <div className='modal-header'>
                    <h4 className='modal-title'>Add Emission</h4>
                    <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='close' ></button>

                </div>
            </div>
        </div>

    </div>
    </div>
  )
}

export default emission

