import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BiEdit, BiTrash } from 'react-icons/bi'
import { Link } from 'react-router-dom'


const Dossierm = () => {
    const [personne, setPersonne] = useState([])
    useEffect(() => {
      axios.get('http://localhost:3000/auth/Dossiertable')
      .then(result => {
        if(result.data.Status){
          setPersonne(result.data.Result)
        }else{
          alert(result.data.error)
        }
      }).catch(err => console.log(err))
    }, [])
    const handleDelete = (id) =>{
      axios.delete(`http://localhost:3000/auth/delet_Dossier/`+id)
      .then(result => {
        if(result.data.Status) {
          naviget('/Dashboard/Traitements')
          
        }else {
          alert(result.data.Error)
        }
      })
  
    }
  return (
    <div className='px-5 mt-3 '>
        <div className='d-flex justify-content-center'>
            <h3>Dossier Medicale</h3>
        </div>
        <Link to="/Dashboard/AdditionMedicale" className='btn btn-success justify-content-evenly'>+++ Add</Link>
        <div className='mt-3'>
      <table className='table'>
        <thead>
          <tr >
            <th>Id</th>
            <th>Patient_id</th>
            <th>Diagnostic</th>
            <th>Prescription</th>
            <th>Notes</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            personne.map(f => (
              <tr>
                <td>{f.id}</td>
                <td>{f.patient_id}</td>
                <td>{f.diagnostic}</td>
                <td>{f.prescription}</td>
                <td>{f.notes}</td>
                <td>
                  <Link to={`/Dashboard/Modification/`+f.id} className=' btn btn-success border-10'><BiEdit /></Link>
                  <button className=' btn btn-danger border-10' onClick={() =>handleDelete(f.id)}><BiTrash /></button>
                </td>
              </tr>
              
            ))
          }
        </tbody>
      </table>
    </div>
      
    </div>
  )
}

export default Dossierm
