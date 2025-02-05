import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'

const ModificatioRenz = () => {
    const { Id } = useParams();
    const navigate = useNavigate();
    const [patients, setPatients] = useState([]);
    const [personnels, setPersonnels] = useState([]);
    const [rendezvous, setRendezvous] = useState({
        patient_id: '',
        personnel_id: '',
        date_heure: '',
        motif: ''
    });
    useEffect(() => {
        axios.get(`http://localhost:3000/auth/editRend/${Id}`)
            .then(result => {
                if (result.data.Status) {
                    setRendezvous({
                        patient_id: result.data.Result[0].patient_id,
                        personnel_id: result.data.Result[0].personnel_id,
                        date_heure: result.data.Result[0].date_heure,
                        motif: result.data.Result[0].motif
                    });
                }
            }).catch(err => console.log(err));

        // Charger les patients
        axios.get("http://localhost:3000/auth/patietable")
            .then(res => setPatients(res.data.Result))
            .catch(err => console.log(err));

        // Charger les personnels
        axios.get("http://localhost:3000/auth/persontable")
            .then(res => setPersonnels(res.data.Result))
            .catch(err => console.log(err));

    }, [Id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:3000/auth/updaterendevous/${Id}`, rendezvous)
            .then(result => {
                if (result.data.Status) {
                    navigate('/Dashboard/Rendezvous');
                } else {
                    alert(result.data.Error);
                }
            }).catch(err => console.log(err));
    };

    return (
        <div className='d-flex justify-content-center align-items-center vh-100 shadow'>
            <div className='p-3 rounded w-50 border '>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='patient_id'><strong>Patient:</strong></label>
                        <select
                            name='patient_id'
                            className='form-control rounded-0'
                            value={rendezvous.patient_id}
                            onChange={(e) => setRendezvous({ ...rendezvous, patient_id: e.target.value })}
                        >
                            <option value="">-- Sélectionner un patient --</option>
                            {patients.map(p => (
                                <option key={p.id} value={p.id}>{p.id} | {p.nom}</option>
                            ))}
                        </select>
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='personnel_id'><strong>Personnel:</strong></label>
                        <select
                            name='personnel_id'
                            className='form-control rounded-0'
                            value={rendezvous.personnel_id}
                            onChange={(e) => setRendezvous({ ...rendezvous, personnel_id: e.target.value })}
                        >
                            <option value="">-- Sélectionner un personnel --</option>
                            {personnels.map(p => (
                                <option key={p.id} value={p.id}>{p.id} | {p.nom}</option>
                            ))}
                        </select>
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='date_heure'><strong>Date & Heure:</strong></label>
                        <input
                            type='datetime-local'
                            name='date_heure'
                            className='form-control rounded-0'
                            value={rendezvous.date_heure}
                            onChange={(e) => setRendezvous({ ...rendezvous, date_heure: e.target.value })}
                        />
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='motif'><strong>Motif:</strong></label>
                        <input
                            type='text'
                            name='motif'
                            className='form-control rounded-0'
                            value={rendezvous.motif}
                            onChange={(e) => setRendezvous({ ...rendezvous, motif: e.target.value })}
                            placeholder='Entrer Motif'
                        />
                    </div>

                    <button className='btn btn-success w-50 rounded-0'>Modifier</button>
                    <Link to="/Dashboard/Rendezvous" className='btn btn-danger w-50 rounded-0'>Annuler</Link>
                </form>
            </div>
        </div>
    );
}

export default ModificatioRenz;
