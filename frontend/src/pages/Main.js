import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Main.css'

import logo from '../assets/logo.svg'
import like from '../assets/like.svg'
import dislike from '../assets/dislike.svg'

import api from '../services/api'

export default function Main({ match }) {
    const [users, setUsers] = useState([])

    useEffect(() => {
        async function loadUsers() {
            const result = api.get('/devs', {
                headers: {
                    user: match.params.id
                }
            })
            setUsers(result.data)
        }
        loadUsers()
    }, [match.params.id])
    console.log(users)
    return (
        <div className='main-container'>
            <Link to='/'>
                <img src={logo} alt='' />
            </Link>
            <ul>
                { users.map(user => (
                    <li>
                        <img src={ user.avatar } alt={user.name} />
                        <footer>
                            <strong>{ user.name }</strong>
                            <p>{ user.bio }</p>
                        </footer>
                        <div className='buttons'>
                            <button type='button'>
                                <img src={like} alt='' />
                            </button>
                            <button type='button'>
                                <img src={dislike} alt='' />
                            </button>
                        </div>
                    </li>
                )) }
            </ul>
        </div>
    )
}