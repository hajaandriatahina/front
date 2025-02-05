import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BiEdit, BiTrash } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const Traitement = () => {
    const [personne, setPersonne] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3000/auth/TraitementTamb')
        .then(result => {
          if(result.data.Status){
            setPersonne(result.data.Result)
          }else{
            alert(result.data.error)
          }
        }).catch(err => console.log(err))
      }, [])
      const handleDelete = (id) =>{
        axios.delete(`http://localhost:3000/auth/delet_traitement/`+id)
        .then(result => {
          if(result.data.Status) {
            naviget('/Dashboard/Traitements')
            
          }else {
            alert(result.data.Error)
          }
        })
    
      }
  return (
    <div className='px-5 mt-3'>
        <div className='d-flex justify-content-center'>
            <h3>Traitement Liste</h3>  
        </div>
        <Link to="/Dashboard/NouvelleTretment" className=' btn btn-success'>+nouvelle</Link>
        <div className='mt-3'>
      <table className='table'>
        <thead>
          <tr >
            <th>Id</th>
            <th>dossier_id</th>
            <th>medicament</th>
            <th>dosage</th>
            <th>frequence</th>
            <th>Date_debut</th>
            <th>date_fin</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            personne.map(f => (
              <tr>
                <td>{f.id}</td>
                <td>{f.dossier_id}</td>
                <td>{f.medicament}</td>
                <td>{f.dosage}</td>
                <td>{f.frequence}</td>
                <td>{f.date_debut}</td>
                <td>{f.date_fin}</td>
                <td>
                  <Link to={`/Dashboard/Tretement/`+f.id} className=' btn btn-success border-10'><BiEdit /></Link>
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

export default Traitement
