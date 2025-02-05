import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const AdditionM = () => {
    const [values, setValues] = useState({
        patient_id: '', 
        dignostic: '',
        prescriptio: '',
        note: ''
      })
      const navigete = useNavigate ()
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
      const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3000/auth/addDossier', values)
        .then(result => {
            if(result.data.Status) {
                navigete('/Dashboard/Dossiers_medicaux')  
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
                        <label htmlFor='patient_id'><strong>Nom:</strong></label>
                        <select type='text' name='patient_id' 
                            className='form-control rounded-0' 
                            onChange={(e) => setValues({...values, patient_id: e.target.value})}
                            placeholder='Entrer Nom'>
                                 {
                                personne.map(f => {
                                    return <option value={f.id}>{f.id}</option>
                                })
                            }

                             </select>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='dignostic'><strong>Diangostic:</strong></label>
                        <input type='text' name='dignostic' 
                            className='form-control rounded-0'
                            onChange={(e) => setValues({...values, dignostic: e.target.value})}
                            placeholder='Entrer Diagnostic' />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='prescriptio'><strong>Prescription:</strong></label>
                        <input type='text' name='prescriptio' 
                            className='form-control rounded-0'
                            onChange={(e) => setValues({...values, prescriptio: e.target.value})}
                            placeholder='Entrer Prescription' />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='note'><strong>Note:</strong></label>
                        <input type='text' name='note' 
                            className='form-control rounded-0'
                            onChange={(e) => setValues({...values, note: e.target.value})}
                            placeholder='Entrer note' />
                    </div>
                    <button className='btn btn-success w-50 rounded-0'>Ajouter</button>
                    <Link to="/Dashboard/Personnel" className='btn btn-danger w-50 rounded-0'>Annuler</Link>
                </form>
            </div>
        </div>
    
  )
}

export default AdditionM
