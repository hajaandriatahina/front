import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Tabloude from './tabloude'
import Addition from './components/Pantie/Addition.Jsx'
import Personnel from './components/Personnel/Personnel'
import Edit from './components/Personnel/Edit'
import AddPersonnel from './components/Personnel/AddPersonnel'
import Pantie from './components/Pantie/Pantie'
import Dossierm from './components/Dossiers_medicaux/Dossierm'
import AdditionM from './components/Dossiers_medicaux/AdditionM'
import Traitement from './components/Traitements/Traitement'
import NouvelleTre from './components/Traitements/NouvelleTre'
import Rendezvous from './components/RendezVous/Rendezvous'
import ModifieP from './components/Pantie/ModifieP'
import ModifierD from './components/Dossiers_medicaux/ModifierD'
import Nouveller from './components/RendezVous/Nouveller'
import Voalo from './components/Admin/dashoard'
import Voasolo from './components/Admin/idex'
import Home from './Home'
import ModifierTrait from './components/Traitements/ModifierTrait'
import ModificatioRenz from './components/RendezVous/ModificatioRenz'
import Login from './components/Admin/Login'








function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />}></Route>
      <Route path='/Dashboard' element={<Tabloude/>}>
      <Route path='' element={<Home />}></Route>
      <Route path='/Dashboard/Personnel' element={<Personnel />}></Route>
      <Route path='/Dashboard/Personnel/:Id' element={<Edit />}></Route>
      <Route path='/Dashboard/Pantie/:id' element={<ModifieP />}></Route> 
      <Route path='/Dashboard/Modification/:id' element={<ModifierD />}></Route>
      <Route path='/Dashboard/Tretement/:id' element={<ModifierTrait />}></Route>
      <Route path='/Dashboard/Rendevous/:id' element={<ModificatioRenz />}></Route>
      <Route path='/Dashboard/Add' element={<AddPersonnel />}></Route>
      <Route path='/Dashboard/Addd' element={<Addition />}></Route>
      <Route path='/Dashboard/Pantie' element={<Pantie />}></Route>
      <Route path='/Dashboard/Dossiers_medicaux' element={<Dossierm />}></Route>
      <Route path='/Dashboard/AdditionMedicale' element={<AdditionM />}></Route>
      <Route path='/Dashboard/Traitements' element={<Traitement />}></Route>
      <Route path='/Dashboard/NouvelleTretment' element={<NouvelleTre />}></Route>
      <Route path='/Dashboard/Rendezvous' element={<Rendezvous />}></Route>
      <Route path='/Dashboard/AddN' element={<Nouveller/>}></Route>
    
      
      </Route>
      

      
    </Routes>
    </BrowserRouter>
  )
}

export default App

