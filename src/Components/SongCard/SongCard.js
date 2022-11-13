import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './style.css';

const SongCard = () => {
    return (
        <div className="card-wrapper">
            <div className='card-main'>
                <div className='card'>
                    <img src='./logo512.png'/>
                    <div className='card-body'>
                        <h3>Name</h3>
                    </div>
                </div>
            </div>

            <div className='card-main'>
                <div className='card'>
                    <img src='./logo512.png'/>
                    <div className='card-body'>
                        <h3>Name</h3>
                    </div>
                </div>
            </div>

            <div className='card-main'>
                <div className='card'>
                    <img src='./logo512.png'/>
                    <div className='card-body'>
                        <h3>Name</h3>
                    </div>
                </div>
            </div>
            <Outlet />
        </div>
    );
}

export default SongCard;
