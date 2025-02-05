import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BiEdit, BiTrash } from 'react-icons/bi'
import { Link } from 'react-router-dom'




const Pantie = () => {
  const [personne, setPersonne] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3000/auth/patietable')
    .then(result => {
      if(result.data.Status){
        setPersonne(result.data.Result)
      }else{
        alert(result.data.error)
      }
    }).catch(err => console.log(err))
  }, [])
  const handleDelete = (id) =>{
    axios.delete(`http://localhost:3000/auth/delet_pantie/`+id)
    .then(result => {
      if(result.data.Status) {
        naviget('/Dashboard/Pantie')
        
      }else {
        alert(result.data.Error)
      }
    })

  }

  return (
    <div className=' px-5 mt-3 '>
      
    <div className='d-flex  justify-content-center'>
      <h3>Patient Liste</h3>
    </div>
    <Link  to="/Dashboard/Add" className='btn btn-success justify-content-evenly'>++++Add</Link>
    <div className='mt-3'>
      <table className='table'>
        <thead>
          <tr >
            <th>Id</th>
            <th>Nom</th>
            <th>Prenom</th>
            <th>Date_naissance</th>
            <th>Adresse</th>
            <th>Numero</th>
            <th>Email</th>
            <th>Historique-medicale</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            personne.map(f => (
              <tr>
                <td>{f.id}</td>
                <td>{f.nom}</td>
                <td>{f.prenom}</td>
                <td>{f.date_naissance}</td>
                <td>{f.adresse}</td>
                <td>{f.numero_telephone}</td>
                <td>{f.email}</td>
                <td>{f.historique_medical}</td>
                <td>
                  <Link to={`/Dashboard/Pantie/`+f.id} className=' btn btn-success border-10'><BiEdit /></Link>
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

export default Pantie
