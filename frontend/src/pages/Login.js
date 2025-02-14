import React, { useState } from 'react'
import './Login.css'
import api from '../services/api'

import logo from '../assets/logo.svg'

export default function Login({ history }) {
    const [username, setUsername] = useState('')  

    const changeSubmit = async (evt) => {
        evt.preventDefault()
        const response = await api.post('/devs', {
            username
        })
        const { _id } = response.data
        history.push(`/dev/${_id}`)
    }

    return (
        <div className='login-container'>
            <form onSubmit={changeSubmit}>
                <img src={logo} alt='Tindev' />
                <input 
                    placeholder='Seu usuário do Github' 
                    value={username}
                    onChange={ evt => setUsername(evt.target.value) }
                />
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}