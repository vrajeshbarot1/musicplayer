import {React,useState,useEffect} from 'react';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import ActiveSong from '../ActiveSong/ActiveSong';
import ActionBar from '../ActionBar/ActionBar';
import SongList from '../SongList/SongList';

const Musicplayer = () => {
    return (
        <>
            <ActiveSong
            />
            <ActionBar 
            /> 
            <SongList 
            />
        </>
    );
}

export default Musicplayer;
