import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AddPersonnel = () => {
    const [values, setValues] = useState({
        nom: '',
        prenom: '',
        specialit: '',
        num: '',
        email: '',
        role: ''

    });
   
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3000/auth/add', values)
        .then(result => {
            if(result.data.Status) {
                navigate('/Dashboard/Personnel')  
            } else {
                alert(result.data.error)
            }
        })
        .catch(err => console.log(err))

    }


    return (
        <div className='d-flex justify-content-center align-items-center vh-100'>
            <div className='p-3 rounded w-50 border '>
                <form onSubmit={handleSubmit}>
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
                        <label htmlFor='specialit'><strong>Specialite:</strong></label>
                        <input type='text' name='specialit' 
                            className='form-control rounded-0'
                            onChange={(e) => setValues({...values, specialit: e.target.value})}
                            placeholder='Entrer Specialite' />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='num'><strong>Numero_telephone:</strong></label>
                        <input type='tel' name='num' 
                            className='form-control rounded-0'
                            onChange={(e) => setValues({...values, num: e.target.value})}
                            placeholder='Entrer Num' />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='email'><strong>Email:</strong></label>
                        <input type='email' name='email'
                            className='form-control rounded-0'
                            onChange={(e) => setValues({...values, email: e.target.value})}
                            placeholder='Entrer Email' />
                    </div>
                    <div className='mb-3'>
                    <label htmlFor='role'><strong>Role:</strong></label>
                      <select 
                          name="role" 
                          id="role" 
                          className='form-select' 
                          value={values.role} // Pour gérer la valeur actuelle
                          onChange={(e) => setValues({...values, role: e.target.value})}
    >
                          <option value="">-- Sélectionnez un rôle --</option>
                          <option value="medecin">Médecin</option>
                          <option value="infirmier">Infirmier</option>
                         <option value="administrateur">Administrateur</option>
                         </select>
                    </div>
                    <button className='btn btn-success w-50 rounded-0'>Ajouter</button>
                    <Link to="/Dashboard/Personnel" className='btn btn-danger w-50 rounded-0'>Annuler</Link>
                </form>
            </div>
        </div>
    );
};

export default AddPersonnel;
