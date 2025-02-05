import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Pantie from '../Pantie/Pantie'
import Personnel from '../Personnel/Personnel'
const addcosultation = () => {
    const [values, setValues] = useState({ 
        Pantie: '',
        personnel: '',
        dossier: '',
        descriptio: ''
      })
      const navegete = useNavigate()
      const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3000/auth//addConsultation', values)
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
                        <label htmlFor='nom'><strong>Nom Patie:</strong></label>
                        <input type='text' name='Pantie' 
                            className='form-control rounded-0' 
                            onChange={(e) => setValues({...values, Pantie: e.target.value})}
                            placeholder='Entrer Nom' />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='prenom'><strong>Nom Medicin:</strong></label>
                        <input type='text' name='personnel' 
                            className='form-control rounded-0'
                            onChange={(e) => setValues({...values, Personnel: e.target.value})}
                            placeholder='Entrer Prénom' />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor=''><strong>Description:</strong></label>
                        <input type='date' name='descriptio' 
                            className='form-control rounded-0'
                            onChange={(e) => setValues({...values, descriptio: e.target.value})}
                            placeholder='Entrer Date_naissance' />
                    </div>
                    <button className='btn btn-success w-50 rounded-0'>Ajouter</button>
                    <Link to="/Dashboard/Personnel" className='btn btn-danger w-50 rounded-0'>Annuler</Link>
                </form>
            </div>
        </div>
  )
}

export default addcosultation
