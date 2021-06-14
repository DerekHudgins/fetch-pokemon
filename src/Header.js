import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <header>
                Welcome to Pallet Town Poke Center
                <div className="links">
                    <NavLink className="nav-link" exact to="/">
                        Home
                    </NavLink>
                    <NavLink className="nav-link" to="/pokemon">
                        Pokemon
                    </NavLink>
                </div>
            </header>
        )
    }
}
