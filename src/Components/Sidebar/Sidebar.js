import React from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='logo'>
                <h2>Logo</h2>
            </div>
            <ul>
                <li>
                    <NavLink end to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/AllSongs'>All Songs</NavLink>
                </li>
                <li>
                    <NavLink to='/TrendingSongs'>Trending</NavLink>
                </li>
                <li>
                    <NavLink to='/NewSongs'>New Songs</NavLink>
                </li>
                <li>
                    <NavLink to='/OldSongs'>Old Songs</NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
