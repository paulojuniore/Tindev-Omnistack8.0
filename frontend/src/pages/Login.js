import React, { useState } from 'react'
import './Login.css'

import logo from '../assets/logo.svg'

export default function Login({ history }) {
    const [username, setUsername] = useState('')  
    const changeSubmit = evt => {
        evt.preventDefault()
        history.push('/main')
        console.log(username)
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