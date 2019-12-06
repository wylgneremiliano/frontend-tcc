import React, { useState } from 'react'
import api from '../../services/api'

export default function New({ history }) {
    const [name, setName] = useState('')
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    const [description, setDescription] = useState('')
    async function handleSubmit(event) {
        event.preventDefault()
        const user_id = localStorage.getItem('user')
        

        await api.post('/city',
            {
                name,
                x,
                y,
                description,
                user_id
            }, 
        )
        history.push('/dashboard')
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Nome</label>
            <input
                type="text"
                id="name"
                value={name}
                onChange={event => setName(event.target.value)}
            />
            <label htmlFor="x">X</label>
            <input
                type="number"
                id="x"
                value={x}
                onChange={event => setX(event.target.value)}
            />
            <label htmlFor="y">Y</label>
            <input
                type="number"
                id="y"
                value={y}
                onChange={event => setY(event.target.value)}
            />
            <label htmlFor="description">Descrição</label>
            <input
                type="text"
                id="description"
                value={description}
                onChange={event => setDescription(event.target.value)}
            />

            <button type="submit" className="btn">Cadastrar</button>
        </form>
    )
}