import React from 'react';
import Musicplayer from '../Components/Musicplayer/Musicplayer';
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { songPlay,currentSong } from '../actions/index';

const Song = () => {
    const params = useParams();
    const userId = params.songName;
    const dispatch = useDispatch(); 
    dispatch(currentSong({id: userId}))
    dispatch(songPlay());
    return (
        <div>
            <Musicplayer />
        </div>
    );
}

export default Song;
