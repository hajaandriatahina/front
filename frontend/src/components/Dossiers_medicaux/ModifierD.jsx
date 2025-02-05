import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const ModifierD = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [personnel, setPersonnel] = useState({
        patient_id: '', 
        diagnostic: '',
        prescription: '',
        notes: ''
    });

    useEffect(() => {
        axios.get(`http://localhost:3000/auth/editDouze/${id}`)
            .then(result => {
                if (result.data.Status && result.data.Result.length > 0) {
                    setPersonnel({
                        patient_id: result.data.Result[0].patient_id,
                        diagnostic: result.data.Result[0].diagnostic,
                        prescription: result.data.Result[0].prescription,
                        notes: result.data.Result[0].notes
                    });
                } else {
                    alert("Dossier médical non trouvé !");
                }
            })
            .catch(err => console.log("Erreur lors du chargement du dossier médical :", err));
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:3000/auth/editDossier/${id}`, personnel, {
            headers: { "Content-Type": "application/json" }
        })
        .then(result => {
            if (result.data.Status) {
                navigate('/Dashboard/Personnel');
            } else {
                alert(result.data.Error);
            }
        })
        .catch(err => console.log("Erreur lors de la mise à jour :", err));
    };

    return (
        <div className='d-flex justify-content-center align-items-center p-3 m-5 vh-100'>
            <div className='p-3 rounded w-50 border'>
                <div className='bg-info w-100 text-white text-decoration-underline text-center p-2'>Modifier Dossier Médical</div>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label><strong>Patient ID:</strong></label>
                        <input type='text' name='patient_id' 
                            className='form-control rounded-0' 
                            value={personnel.patient_id}
                            onChange={(e) => setPersonnel({...personnel, patient_id: e.target.value})}
                            placeholder='Entrer ID du patient' />
                    </div>
                    <div className='mb-3'>
                        <label><strong>Diagnostic:</strong></label>
                        <input type='text' name='diagnostic' 
                            className='form-control rounded-0'
                            value={personnel.diagnostic}
                            onChange={(e) => setPersonnel({...personnel, diagnostic: e.target.value})}
                            placeholder='Entrer le diagnostic' />
                    </div>
                    <div className='mb-3'>
                        <label><strong>Prescription:</strong></label>
                        <input type='text' name='prescription' 
                            className='form-control rounded-0'
                            value={personnel.prescription}
                            onChange={(e) => setPersonnel({...personnel, prescription: e.target.value})}
                            placeholder='Entrer la prescription' />
                    </div>
                    <div className='mb-3'>
                        <label><strong>Notes:</strong></label>
                        <input type='text' name='notes' 
                            className='form-control rounded-0'
                            value={personnel.notes}
                            onChange={(e) => setPersonnel({...personnel, notes: e.target.value})}
                            placeholder='Ajouter des notes' />
                    </div>
                    <button type='submit' className='btn btn-success w-50 rounded-0'>Modifier</button>
                    <Link to="/Dashboard/Personnel" className='btn btn-danger w-50 rounded-0'>Annuler</Link>
                </form>
            </div>
        </div>
    );
};

export default ModifierD;
