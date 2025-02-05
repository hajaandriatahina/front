import React from 'react'

const consultation = () => {
    
  return (
    <div>
        <div className=' px-5 mt-3 '>
      
      <div className='d-flex  justify-content-center'>
        <h3>consultation Liste</h3>
      </div>
      <Link  to="/Dashboard/consultation" className='btn btn-success justify-content-evenly'>++++Add</Link>
      <div className='mt-3'>
        <table className='table'>
          <thead>
            <tr >
              <th>Id</th>
              <th>Nom</th>
              <th>Prenom</th>
              <th>Date_naissance</th>
              <th>Adresse</th>
              <th>Numero</th>
              <th>Email</th>
              <th>Historique-medicale</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              personne.map(f => (
                <tr>
                  <td>{f.id}</td>
                  <td>{f.nom}</td>
                  <td>{f.prenom}</td>
                  <td>{f.date_naissance}</td>
                  <td>{f.adresse}</td>
                  <td>{f.numero_telephone}</td>
                  <td>{f.email}</td>
                  <td>{f.historique_medical}</td>
                  <td>
                    <Link to={`/Dashboard/Pantie/`+f.id} className=' btn btn-success border-10'><BiEdit /></Link>
                    <button className=' btn btn-danger border-10' onClick={() =>handleDelete(f.id)}><BiTrash /></button>
                  </td>
                </tr>
                
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
      
    </div>
  )
}

export default consultation
