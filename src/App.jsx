import { useState, useEffect } from 'react'
import {Routes, Route, Link} from 'react-router-dom';
import './App.css'
import Dashboard from './pages/Dashboard';
import PersonProfile from './pages/PersonProfile';

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])
  const [people, setPeople] = useState([])

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=50")
    .then(res => res.json())
    .then((data) =>{
      setPeople(data.results)
    })
  },[])


  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li>Dashboard</li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Dashboard people={people}/>}/>
        <Route path='/view/:id' element={<PersonProfile people={people}/>}/>
      </Routes>
    </>
  )
}
