import React from 'react'
import { Link } from 'react-router-dom'
import './Menu.css'

export default function Menu() {
    return (
        <nav className='MenuList'>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="quote">Quote</Link>
                </li>
                <li>
                    <Link to="cities">Cities</Link>
                </li>
                <li>
                    <Link to="cards">Cards</Link>
                </li>
            </ul>
        </nav>
    )
}