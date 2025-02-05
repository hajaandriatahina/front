import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BiDroplet, BiEdit, BiTrash } from 'react-icons/bi'
import { Link, useNavigate } from 'react-router-dom'


const Personnel = () => {
  const [personne, setPersonne] = useState([])
  const naviget = useNavigate();
  useEffect(() => {
    axios.get('http://localhost:3000/auth/persontable')
    .then(result => {
      if(result.data.Status){
        setPersonne(result.data.Result)
      }else{
        alert(result.data.error)
      }
    }).catch(err => console.log(err))
  }, [])

  const handleDelete = (Id) => {
    axios.delete(`http://localhost:3000/auth/delet_personnel/`+Id)
    .then(result => {
      if(result.data.Status) {
        naviget('/Dashboard/Personnel')
        
      }else {
        alert(result.data.Error)
      }
    })
  }
 
  return (
    <div className=' px-5 mt-3 '>
      <div className='d-flex  justify-content-center'>
        <h3>Personnel Liste</h3>
      </div>
      <Link  to="/Dashboard/Add" className='btn btn-success justify-content-evenly'>++++Add</Link>
      <div className='mt-3'>
        <table className='table'>
          <thead>
            <tr >
              <th>Id</th>
              <th>Nom</th>
              <th>Prenom</th>
              <th>Specialite</th>
              <th>num</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              personne.map(f => (
                <tr>
                  <td>{f.Id}</td>
                  <td>{f.nom}</td>
                  <td>{f.prenom}</td>
                  <td>{f.specialite}</td>
                  <td>{f.numero_telephone}</td>
                  <td>{f.email}</td>
                  <td>{f.role}</td>
                  <td>
                    <Link to={`/Dashboard/Personnel/`+f.Id} className=' btn btn-success border-10'><BiEdit /></Link>
                    <button className=' btn btn-danger border-10' onClick={() =>handleDelete(f.Id)}><BiTrash /></button>
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

export default Personnel
