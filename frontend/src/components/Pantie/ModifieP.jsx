import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'


 

const ModifieP = () => {
    const {id} = useParams()
    const naviget = useNavigate()
    const [personnel, setPersonnel] = useState({
        nom: '', 
        prenom: '',
        date: '',
        adresse: '',
        num: '',
        email: '',
        historique: ''
      })
      useEffect(() => {
        axios.get('http://localhost:3000/auth/editPentie/' + id)
            .then(result => {

                setPersonnel({
                    ...personnel,
                    nom: result.data.Result[0].nom,
                    prenom: result.data.Result[0].prenom,
                    date: result.data.Result[0].date_naissance,
                    adresse: result.data.Result[0].adresse,
                    num: result.data.Result[0].numero_telephone,
                    email: result.data.Result[0].email,
                    historique: result.data.Result[0].historique_medical

                
                })
            }).catch(err => console.log(err));
    }, [id]);
      
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put('http://localhost:3000/auth/edit_pantie/'+id, personnel)
        .then(result => {
            if(result.data.Status) {
                naviget('/Dashboard/Personnel')
            }else {
                alert(result.data.Error)
            }
        }).catch(err => console.log(err))
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
                    value={personnel.nom}
                    onChange={(e) => setPersonnel({...personnel, nom: e.target.value})}
                    placeholder='Entrer Nom' />
            </div>
            <div className='mb-3'>
                <label htmlFor='prenom'><strong>Prénom:</strong></label>
                <input type='text' name='prenom' 
                    className='form-control rounded-0'
                    value={personnel.prenom}
                    onChange={(e) => setPersonnel({...personnel, prenom: e.target.value})}
                    placeholder='Entrer Prénom' />
            </div>
            <div className='mb-3'>
                <label htmlFor='date'><strong>Date_naissance:</strong></label>
                <input type='date' name='date' 
                    className='form-control rounded-0'
                    value={personnel.date}
                    onChange={(e) => setPersonnel({...personnel, date: e.target.value})}
                    placeholder='Entrer Date_naissance' />
            </div>
            <div className='mb-3'>
                <label htmlFor='num'><strong>Numero_telephone:</strong></label>
                <input type='tel' name='num' 
                    className='form-control rounded-0'
                    value={personnel.num}
                    onChange={(e) => setPersonnel({...personnel, num: e.target.value})}
                    placeholder='Entrer Num' />
            </div>
            <div className='mb-3'>
                <label htmlFor='adresse'><strong>Adresse:</strong></label>
                <input type='text' name='adresse'
                    className='form-control rounded-0'
                    value={personnel.adresse}
                    onChange={(e) => setPersonnel({...personnel, adresse: e.target.value})}
                    placeholder='Entrer Edresse' />
            </div>
            <div className='mb-3'>
                <label htmlFor='email'><strong>Email:</strong></label>
                <input type="email" name="email" 
                value={personnel.email}
                onChange={(e) => setPersonnel({...personnel, email: e.target.value})} 
                 placeholder='Enter Email' className='form-control'/>
            </div>
            <div className='mb-3'>
                <label htmlFor='historique'><strong>Historique_medical:</strong></label>
                <input type='text' name='historique'
                    className='form-control rounded-0'
                    value={personnel.historique}
                    onChange={(e) => setPersonnel({...personnel, historique: e.target.value})}
                    placeholder='Entrer historique' />
            </div>
            <button className='btn btn-success w-50 rounded-0'>Ajouter</button>
            <Link to="/Dashboard/Personnel" className='btn btn-danger w-50 rounded-0'>Annuler</Link>
        </form>
    </div>
</div>
  )
}

export default ModifieP
