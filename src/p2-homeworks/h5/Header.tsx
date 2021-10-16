import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <div>
            <NavLink to='/pre-junior'>PRE JUNIOR</NavLink>
            <NavLink to='/junior'>Junior</NavLink>
            <NavLink to='/plus-junior'>Plus Junior</NavLink>

        </div>
    )
}

export default Header
