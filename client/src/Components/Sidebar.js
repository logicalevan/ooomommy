import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';
import logo from '../Assets/times.jpg';

class Sidebar extends Component {
  render() {
    return (
        <header>
            <nav className="navbar navbar-dark">
                <NavLink className="navbar-brand" to="/">
                    <img id="logo" src={logo} alt="NY Times Logo" />
                </NavLink>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/latest">Latest</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/saved">Saved</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/results">Search</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
  }
}

export default Sidebar;