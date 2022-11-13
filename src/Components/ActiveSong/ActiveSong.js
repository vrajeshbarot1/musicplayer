import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './style.css';

const ActiveSong = () => {
    const data = useSelector((state) => state.songReducer);
    return (
        <div className='active-song'>
            <div className='song-img'>
                <img src='/logo512.png' height="250" width="250" />
            </div>
            <div className='song-des'>
                <h2>{data.song[data.currentIndex].title}</h2>
                <h4>{data.song[data.currentIndex].artist}</h4>
                <p>3:00</p>
            </div>
            <div className='song-play'>
                <a href='#' title='play'>Play</a>
            </div>
        </div>
    );
}

export default ActiveSong;
