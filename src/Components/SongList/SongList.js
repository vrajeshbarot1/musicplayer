import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './style.css';

const SongList = (props) => {
    const list = useSelector((state) => state.songReducer.song);
    const currentIndex = useSelector((state) => state.songReducer.currentIndex);
    const navigate = useNavigate();
    return (
        <div className='song-list'>
            <h3>
                {props.type?props.type:'All'} Songs
            </h3>
            <table>
                <tbody>
                    {list.map((song,id) => {
                        if(props.type) {
                            if(song.category == props.type) {
                                return(
                                    <tr key={id} className={(id===currentIndex)?'active':''}>
                                        <td>
                                            <div className='song-profile'>
                                                <div >
                                                    <img src='/logo512.png' height="48" width="48" alt='song' />
                                                </div>
                                                <div className='song-desc'>
                                                    <h4>{song.title}</h4>
                                                    <p>{song.artist}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <button class="play-btn" 
                                            onClick={() => navigate('/song/'+song.songId) }
                                            ><svg width="13" height="14" viewBox="0 0 16 24"><path class="svg_color" fill-rule="evenodd" d="M0 0v24l20-12z"></path></svg></button>
                                            
                                            <p className='playing-icon'>Playing ...</p>
                                        </td>
                                    </tr>
                                );
                            }
                        } else {
                            return(
                                <tr key={id} className={(id===currentIndex)?'active':''}>
                                    <td>
                                        <div className='song-profile'>
                                            <div >
                                                <img src='/logo512.png' height="48" width="48" alt='song' />
                                            </div>
                                            <div className='song-desc'>
                                                <h4>{song.title}</h4>
                                                <p>{song.artist}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <button class="play-btn" 
                                        onClick={() => navigate('/song/'+song.songId) }
                                        ><svg width="13" height="14" viewBox="0 0 16 24"><path class="svg_color" fill-rule="evenodd" d="M0 0v24l20-12z"></path></svg></button>
                                        
                                        <p className='playing-icon'>Playing ...</p>
                                    </td>
                                </tr>
                            );
                        }
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default SongList;
