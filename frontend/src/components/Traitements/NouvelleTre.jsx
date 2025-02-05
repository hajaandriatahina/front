import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'




const NouvelleTre = () => {
    const [values, setValues] = useState({
        dossier_id: '', 
        medicament: '',
        dosage: '',
        frequence: '',
        date_debut: '',
        date_fin: ''
      })
      const navigate = useNavigate()
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
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3000/auth/novelleTra', values)
        .then(result => {
            if(result.data.Status) {
                navigate('/Dashboard/Traitements')  
            } else {
                alert(result.data.error)
            }
        })
        .catch(err => console.log(err))

    }
  return (
    <div className='d-flex justify-content-center align-items-center vh-100 shadow'>
    <div className='p-3 rounded w-50 border '>
        <form onSubmit={handleSubmit}>
            <div className='mb-3'>
                <label htmlFor='dossier_id'><strong>Dossier_id:</strong></label>
                <select type='text' name='dossier_id' 
                            className='form-control rounded-0' 
                            onChange={(e) => setValues({...values, dossier_id: e.target.value})}
                            >
                                 {
                                personne.map(f => {
                                    return <option value={f.id}>{f.id}</option>
                                })
                            }

                             </select>
            </div>
            <div className='mb-3'>
                <label htmlFor='medicament'><strong>Medicament:</strong></label>
                <input type='text' name='medicament' 
                    className='form-control rounded-0'
                    onChange={(e) => setValues({...values, medicament: e.target.value})}
                    placeholder='Entrer Medicament' />
            </div>
            <div className='mb-3'>
                <label htmlFor='dosage'><strong>Dosage:</strong></label>
                <input type='text' name='dosage' 
                    className='form-control rounded-0'
                    onChange={(e) => setValues({...values, dosage: e.target.value})}
                    placeholder='Entrer Dosage' />
            </div>
            <div className='mb-3'>
                <label htmlFor='frequence'><strong>Frequence:</strong></label>
                <input type='text' name='frequence' 
                    className='form-control rounded-0'
                    onChange={(e) => setValues({...values, frequence: e.target.value})}
                    placeholder='Entrer frequence' />
            </div>
            <div className='mb-3'>
                <label htmlFor='date_debut'><strong>Date_debut:</strong></label>
                <input type='date' name='date_debut'
                    className='form-control rounded-0'
                    onChange={(e) => setValues({...values, date_debut: e.target.value})}
                    placeholder='Entrer Date_debut' />
            </div>
            <div className='mb-3'>
                <label htmlFor='date_fin'><strong>Date_fin:</strong></label>
                <input type='date' name='date_fin'
                    className='form-control rounded-0'
                    onChange={(e) => setValues({...values, date_fin: e.target.value})}
                    placeholder='Entrer Date_debut' />
            </div>
            <button className='btn btn-success w-50 rounded-0'>Ajouter</button>
            <Link to="/Dashboard/Personnel" className='btn btn-danger w-50 rounded-0'>Annuler</Link>
        </form>
    </div>
</div>
  )
}

export default NouvelleTre
