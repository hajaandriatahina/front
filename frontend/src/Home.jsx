import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Home = () => {
    const [patients, setPatients] = useState(0);
    const [adminTratement, setAdminTratement] = useState(0);
    const [adminRendevous, setAdminRendevous] = useState(0);

    useEffect(() => {
        adminCount();
        traiCount();
        rendCount();
    }, []);

    const [personne, setPersonne] = useState([])
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

    const adminCount = () => {
        axios.get('http://localhost:3000/auth/adminCount')
            .then(result => {
                if (result.data.Status) {
                    setPatients(result.data.Result[0].personnel);
                }
            })
            .catch(error => console.error("Erreur lors du chargement des données :", error));
    };
    const traiCount = () => {
      axios.get('http://localhost:3000/auth/traitCount')
          .then(result => {
              if (result.data.Status) {
                setAdminTratement(result.data.Result[0].traitements);
              }
          })
          .catch(error => console.error("Erreur lors du chargement des données :", error));
  };
  const rendCount = () => {
    axios.get('http://localhost:3000/auth/rendCount')
        .then(result => {
            if (result.data.Status) {
              setAdminRendevous(result.data.Result[0].rendezvous);
            }
        })
        .catch(error => console.error("Erreur lors du chargement des données :", error));
};

    return (
        <div>
            <div className='p-3 d-flex justify-content-around mt-3'>
                <div className='px-3 pt-2 pb-3 border shadow-sm w-25'>
                    <div className='text-center pb-1'>
                        <h4>Personnel</h4>
                    </div>
                    <hr />
                    <div className='d-flex justify-content-around'>
                        <h5>Total: </h5>
                        <h5>{patients}</h5>
                    </div>
                </div>

                <div className='px-3 pt-2 pb-3 border shadow-sm w-25'>
                    <div className='text-center pb-1'>
                        <h4>Admin Rendez-vous</h4>
                    </div>
                    <hr />
                    <div  className='d-flex justify-content-around'>
                        <h5>Total:</h5>
                        <h5>{adminRendevous}</h5>
                    </div>
                </div>

                <div className='px-3 pt-2 pb-3 border shadow-sm w-25'>
                    <div className='text-center pb-1'>
                        <h4>Traitements</h4>
                    </div>
                    <hr />
                    <div className='d-flex justify-content-around'>
                        <h5>Total: </h5>
                        <h5>{adminTratement}</h5>
                    </div>
                </div>
            </div>
            <div className='mt-4 px-5 pt-3'>
              <h3>Liste Personnel</h3>
            <table className='table'>
              <thead>
                <tr>
                  <th>Nom</th>
                  <th>Role</th>
                  <th>Num</th>
                  <th>email</th>
                </tr>
              </thead>
              <tbody>
                {
                  personne.map(f => (
                    <tr>
                    <td>{f.nom}</td>
                    <td>{f.numero_telephone}</td>
                    <td>{f.email}</td>
                    <td>{f.role}</td>
                    </tr>
                    
                  ))
                }
              </tbody>
            </table>
            </div>
        </div>
    );
};

export default Home;
