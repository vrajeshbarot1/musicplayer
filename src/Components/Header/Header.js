import React from 'react';
import './style.css';

const Header = () => {
    return (
        <header>
            <div className='search-wrapper'>
                <input type="text" placeholder='Search ...' />
            </div>
        </header>
    );
}

export default Header;
