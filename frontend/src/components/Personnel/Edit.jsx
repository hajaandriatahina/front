import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const Edit = () => {

    const {Id} = useParams()
    const naviget = useNavigate()
    const [personnel, setPersonnel] = useState({
        nom: '',
        prenom: '',
        specialit: '',
        num: '',
        email: '',
        role: ''
        
    })
    useEffect(() => {
        axios.get('http://localhost:3000/auth/editP/' + Id)
            .then(result => {

                setPersonnel({
                    ...personnel,
                    nom: result.data.Result[0].nom,
                    prenom: result.data.Result[0].prenom,
                    specialit: result.data.Result[0].specialite,
                    num: result.data.Result[0].numero_telephone,
                    email: result.data.Result[0].email,
                    role: result.data.Result[0].role

                
                })
            }).catch(err => console.log(err));
    }, [Id]);
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put('http://localhost:3000/auth/editP_up/'+Id, personnel)
        .then(result => {
            if(result.data.Status) {
                naviget('/Dashboard/Personnel')
            }else {
                alert(result.data.Error)
            }
        }).catch(err => console.log(err))
    }
  return (
    <div>
        <div className='d-flex justify-content-center align-items-center vh-100 shadow-lg'>
            <div className='p-3 rounded w-25 border'>
                <form  onSubmit={handleSubmit} className='row-1'>
                    <div className='mb-3'>
                        <label className='form-label'>Nom:</label>
                        <input type='text' name='nom'
                            id='inputNom'
                            value={personnel.nom}
                            className='form-control rounded-0' 
                            onChange={(e) => setPersonnel({...personnel, nom: e.target.value})}
                            placeholder='Entrer Nom' />
                            
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Prenom:</label>
                        <input type='text' name='prenom'
                            id='inputNom'
                            value={personnel.prenom}
                            className='form-control rounded-0' 
                            onChange={(e) => setPersonnel({...personnel, prenom: e.target.value})}
                            placeholder='Entrer Nom' />
                            
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Numero_telephone:</label>
                        <input type='text' name='num'
                            id='inputNom'
                            value={personnel.num}
                            className='form-control rounded-0' 
                            onChange={(e) => setPersonnel({...personnel, num: e.target.value})}
                            placeholder='Entrer Nom' />
                            
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Specialite:</label>
                        <input type='text' name='specialite'
                            id='inputNom'
                            value={personnel.specialit}
                            className='form-control rounded-0' 
                            onChange={(e) => setPersonnel({...personnel, specialit: e.target.value})}
                            placeholder='Entrer Nom' />
                            
                    </div>
                    <div className='mb-3'>
                        <label  className='form-label'>Email:</label>
                        <input type='email' name='email'
                        value={personnel.email}
                            className='form-control rounded-0'
                            onChange={(e) => setPersonnel({...personnel, email: e.target.value})}
                            placeholder='Entrer Email' 
                            id='inputEmail'/>
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Role:</label>
                        <input type='text' name='role'
                            id='inputNom'
                            value={personnel.role}
                            className='form-control rounded-0' 
                            onChange={(e) => setPersonnel({...personnel, role: e.target.value})}
                            placeholder='Entrer Nom' />
                            
                    </div>
                    <div className='justify-content-around'>
                         <button className='btn btn-success   w-50 rounded-0'>Ajouter</button>
                         <Link to="/" className='btn  btn-danger  w-50  rounded-0'>Annulie</Link>
                    </div>
                </form>
            </div>
        </div>
      
    </div>
  )
}

export default Edit
