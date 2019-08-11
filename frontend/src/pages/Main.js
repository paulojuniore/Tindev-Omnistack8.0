import React from 'react'
import './Main.css'

import logo from '../assets/logo.svg'
import like from '../assets/like.svg'
import dislike from '../assets/dislike.svg'

export default function Main({ match }) {
    return (
        <div className='main-container'>
            <img src={logo} alt='' />
            <ul>
                <li>
                    <img src='https://avatars2.githubusercontent.com/u/34824189?v=4' alt=''/>
                    <footer>
                        <strong>Paulo Júnior</strong>
                        <p>A nice guy.</p>
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
                <li>
                    <img src='https://avatars2.githubusercontent.com/u/34824189?v=4' alt=''/>
                    <footer>
                        <strong>Paulo Júnior</strong>
                        <p>A nice guy.</p>
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
                <li>
                    <img src='https://avatars2.githubusercontent.com/u/34824189?v=4' alt=''/>
                    <footer>
                        <strong>Paulo Júnior</strong>
                        <p>A nice guy.</p>
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
                <li>
                    <img src='https://avatars2.githubusercontent.com/u/34824189?v=4' alt=''/>
                    <footer>
                        <strong>Paulo Júnior</strong>
                        <p>A nice guy.</p>
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
            </ul>
        </div>
    )
}