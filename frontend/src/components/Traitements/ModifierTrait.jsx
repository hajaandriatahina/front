import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const ModifierTrait = () => {
    const { id } = useParams();
    const navigate = useNavigate();  // Correction ici

    const [personnel, setPersonnel] = useState({
        dossier_id: '', 
        medicament: '',
        dosage: '',
        frequence: '',
        date_debut: '',
        date_fin: '',
        historique: ''
    });

    useEffect(() => {
        axios.get(`http://localhost:3000/auth/editTrait/${id}`)
            .then(result => {
                if (result.data.Status && result.data.Result.length > 0) {
                    setPersonnel(result.data.Result[0]);  // Correction ici
                }
            })
            .catch(err => console.log(err));
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:3000/auth/updateTrait/${id}`, personnel)
            .then(result => {
                if (result.data.Status) {
                    navigate('/Dashboard/Traitements'); // Correction ici
                } else {
                    alert(result.data.Error);
                }
            })
            .catch(err => console.log(err));
    };

    return (
        <div className='d-flex justify-content-center align-items-center p-3 m-5 vh-100'>
            <div className='p-3 rounded w-50 border'>
                <div className='bg-info w-100 text-white text-decoration-underline text-center p-2'>
                    Modifier Traitement
                </div>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='dossier_id'><strong>Dossier ID:</strong></label>
                        <input type='text' name='dossier_id' 
                            className='form-control rounded-0' 
                            value={personnel.dossier_id}
                            onChange={(e) => setPersonnel({...personnel, dossier_id: e.target.value})}
                            placeholder='Entrer le dossier ID' />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='medicament'><strong>Médicament:</strong></label>
                        <input type='text' name='medicament' 
                            className='form-control rounded-0'
                            value={personnel.medicament}
                            onChange={(e) => setPersonnel({...personnel, medicament: e.target.value})}
                            placeholder='Entrer le médicament' />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='dosage'><strong>Dosage:</strong></label>
                        <input type='text' name='dosage' 
                            className='form-control rounded-0'
                            value={personnel.dosage}
                            onChange={(e) => setPersonnel({...personnel, dosage: e.target.value})}
                            placeholder='Entrer le dosage' />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='frequence'><strong>Fréquence:</strong></label>
                        <input type='text' name='frequence' 
                            className='form-control rounded-0'
                            value={personnel.frequence}
                            onChange={(e) => setPersonnel({...personnel, frequence: e.target.value})}
                            placeholder='Entrer la fréquence' />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='date_debut'><strong>Date début:</strong></label>
                        <input type='date' name='date_debut' 
                            className='form-control rounded-0'
                            value={personnel.date_debut}
                            onChange={(e) => setPersonnel({...personnel, date_debut: e.target.value})} />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='date_fin'><strong>Date fin:</strong></label>
                        <input type='date' name='date_fin'
                            className='form-control rounded-0'
                            value={personnel.date_fin}
                            onChange={(e) => setPersonnel({...personnel, date_fin: e.target.value})} />
                    </div>
                    <button className='btn btn-success w-50 rounded-0'>Modifier</button>
                    <Link to="/Dashboard/Personnel" className='btn btn-danger w-50 rounded-0'>Annuler</Link>
                </form>
            </div>
        </div>
    );
};

export default ModifierTrait;
