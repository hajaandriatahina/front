import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'



const Nouveller = () => {
    const [values, setValues] = useState({
        patient_id: '', 
        personnel_id: '',
        date_heure: '',
        motif: ''
      })
      const [pentie, setPantie] = useState([])
    const [personne, setPersonne] = useState([])
    const navigate = useNavigate();
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
      useEffect(() => {
        axios.get('http://localhost:3000/auth/patietable')
        .then(result => {
          if(result.data.Status){
            setPantie(result.data.Result)
          }else{
            alert(result.data.error)
          }
        }).catch(err => console.log(err))
        axios.get('http://localhost:3000/auth/persontable')
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
        axios.post('http://localhost:3000/auth/rendevousNous', values)
        
        .then(result => {
            if(result.data.Status) {
              alert('tonga')
                navigate('/Dashboard/Rendezvous')  
            } else {
                alert(result.data.error)
            }
        })
        .catch(err => console.log(err))

    }
  return (
    <div>
       <div className='d-flex justify-content-center align-items-center vh-100 shadow'>
    <div className='p-3 rounded w-50 border '>
        <form onSubmit={handleSubmit}>
            <div className='mb-3'>
                <label htmlFor='patient_id'><strong>Patient_id:</strong></label>
                <select type='text' name='patient_id' 
                            className='form-control rounded-0' 
                            onChange={(e) => setValues({...values, patient_id: e.target.value})}
                            >
                              <option value="">---------------------------Selecte Patie_id-----------------------------------</option>
                                 {
                                pentie.map(f => {
                                  
                                    return <option value={f.id}>{f.id} | {f.nom}</option>
                                })
                            }

                             </select>
            </div>
            <div className='mb-3'>
                <label htmlFor='personnel_id'><strong>Personnel_id:</strong></label>
                <select type='text' name='personnel_id' 
                            className='form-control rounded-0' 
                            onChange={(e) => setValues({...values, personnel_id: e.target.value})}
                            >
                              <option value="">---------------------------Selecte Personne_id-----------------------------------</option>
                                 {
                                personne.map(f => {
                                    return <option value={f.Id}>{f.Id}</option>
                                })
                            }

                             </select>
            </div>
            <div className='mb-3'>
                <label htmlFor='date_heure'><strong>Date_Heure:</strong></label>
                <input type='datetime-local' name='date_heure' 
                    className='form-control rounded-0'
                    onChange={(e) => setValues({...values, date_heure: e.target.value})}
                     />
            </div>
            <div className='mb-3'>
                <label htmlFor='motif'><strong>Motif:</strong></label>
                <input type='text' name='motif' 
                    className='form-control rounded-0'
                    onChange={(e) => setValues({...values, motif: e.target.value})}
                    placeholder='Entrer Motif' />
            </div>
            <button className='btn btn-success w-50 rounded-0'>Ajouter</button>
            <Link to="/Dashboard/Personnel" className='btn btn-danger w-50 rounded-0'>Annuler</Link>
        </form>
    </div>
</div>
    </div>
  )
}

export default Nouveller
