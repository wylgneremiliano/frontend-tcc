import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../../services/api'
import './styles.css'
export default function Dashboard() {
    const [cities, setCities] = useState([])
    useEffect(() => {
        async function loadCities() {
            const user_id = localStorage.getItem('user')
            const authorization = localStorage.getItem('token')
            const response = await api.get('/city', {
                headers: { user_id, authorization },

            })
            setCities(response.data.cities)
        }
   
        loadCities()
       
    }, [])
  
    return (
        <>
            <ul className="cities-list">
                {cities.map(city => (
                    <li key={city._id}>
                        <strong> {city.name} </strong>
                        <span> {city.x} </span>
                        <span> {city.y} </span>
                    </li>
                ))}
            </ul>
            <Link to="/new">
                <button className="btn"> Cadastrar nova cidade</button>
            </Link>
        </>
    )
}