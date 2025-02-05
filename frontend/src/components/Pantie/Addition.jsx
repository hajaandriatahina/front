import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'




const Addition = () => {
  const [values, setValues] = useState({
    nom: '', 
    prenom: '',
    date: '',
    adresse: '',
    num: '',
    email: '',
    historique: ''
  })
  const navegete = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3000/auth/addpatien', values)
    .then(result => {
        if(result.data.Status) {
            navegete('/Dashboard/Pantie')  
        } else {
            alert(result.data.error)
        }
    })
    .catch(err => console.log(err))

}

  return (
    <div className='d-flex justify-content-center align-items-center  p-3 m-5 vh-100'>
            <div className='p-3 rounded w-50 border '>
              <div className='bg-info w-100 text-white text-decoration-underline justify-content-center align-items-center'>Add Patie</div>
                <form  onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='nom'><strong>Nom:</strong></label>
                        <input type='text' name='nom' 
                            className='form-control rounded-0' 
                            onChange={(e) => setValues({...values, nom: e.target.value})}
                            placeholder='Entrer Nom' />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='prenom'><strong>Prénom:</strong></label>
                        <input type='text' name='prenom' 
                            className='form-control rounded-0'
                            onChange={(e) => setValues({...values, prenom: e.target.value})}
                            placeholder='Entrer Prénom' />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='date'><strong>Date_naissance:</strong></label>
                        <input type='date' name='date' 
                            className='form-control rounded-0'
                            onChange={(e) => setValues({...values, date: e.target.value})}
                            placeholder='Entrer Date_naissance' />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='num'><strong>Numero_telephone:</strong></label>
                        <input type='tel' name='num' 
                            className='form-control rounded-0'
                            onChange={(e) => setValues({...values, num: e.target.value})}
                            placeholder='Entrer Num' />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='adresse'><strong>Adresse:</strong></label>
                        <input type='text' name='adresse'
                            className='form-control rounded-0'
                            onChange={(e) => setValues({...values, adresse: e.target.value})}
                            placeholder='Entrer Edresse' />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='email'><strong>Email:</strong></label>
                        <input type="email" name="email" 
                        onChange={(e) => setValues({...values, email: e.target.value})} 
                         placeholder='Enter Email' className='form-control'/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='historique'><strong>Historique_medical:</strong></label>
                        <input type='text' name='historique'
                            className='form-control rounded-0'
                            onChange={(e) => setValues({...values, historique: e.target.value})}
                            placeholder='Entrer historique' />
                    </div>
                    <button className='btn btn-success w-50 rounded-0'>Ajouter</button>
                    <Link to="/Dashboard/Personnel" className='btn btn-danger w-50 rounded-0'>Annuler</Link>
                </form>
            </div>
        </div>
  )
}

export default Addition
