import React, { useState } from 'react'
import api from '../../services/api'
export default function Login({ history }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    async function handleSubmit(event) {
        event.preventDefault()
        const response = await api.post('/auth/authenticate', {
            email,
            password
        })
        const { _id } = response.data.user
        const { token } = response.data
        localStorage.setItem('user', _id)
        localStorage.setItem('token', token)
        history.push('/dashboard')
    }
    return (
     
        <>
            <p></p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Seu melhor Email" value={email} onChange={event => setEmail(event.target.value)} />
                <label htmlFor="password">Senha</label>
                <input type="password" id="password" value={password} onChange={event => setPassword(event.target.value)} />
                <button className="btn" type="submit">Entrar</button>
            </form>
        </>
    )
}