import React, { useRef,useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { songPlay , nextSong ,prevSong} from '../../actions/index';
import './style.css';

const ActionBar = () => {
    const song = useSelector((state) => state.songReducer.song);
    console.log(song);
    const currentIndex = useSelector((state) => state.songReducer.currentIndex);
    const isPlaying = useSelector((state) => state.songReducer.isPlaying);
    const dispatch = useDispatch(); 
    const audioEl = useRef(null);
    // const [isPlaying,setIsPlaying] = useState(false);
    const [currentTime,setCurrentTime] = useState(0);
    const [musicduration,setMusicduration] = useState(0);
    const [musicvolume,setMusicvolume] = useState(10);
    useEffect(() => {
        console.log(isPlaying,'playing value');
        if(isPlaying) {
            audioEl.current.play();
        } else {
            audioEl.current.pause();
        }
    },[isPlaying]);
    useEffect(() => {
        audioEl.current.volume = musicvolume / 10;
    },[musicvolume]);
    const onplaying = () => {
        setMusicduration(parseInt(audioEl.current.duration));
        setCurrentTime(parseInt(audioEl.current.currentTime));
    };
    console.log(currentTime,musicduration,musicvolume);
    return (
        <>
        <div className='action-bar'>
            <div className='progress-bar-wrapper'>
                <span className='progress-bar' style={{width:(currentTime/musicduration * 100)+'%'}}></span>
            </div>
            <h3>{song[currentIndex].title}</h3>
            <audio src={song[currentIndex].src} controls ref={audioEl} onTimeUpdate = {onplaying}></audio>
            <div className='duration'>
                <p>
                    <span>{currentTime}</span> / 
                    <span>{musicduration}</span>
                </p>
            </div>
            <div className='player'>
                <button className='prev-next' onClick={()=> dispatch(prevSong())}>
                    <svg width="24" height="24" viewBox="0 0 24 24"><g class="svg_color" fill="#000" transform="translate(-655 -2658) translate(87 2624)"><g transform="translate(520 29) rotate(-180 32.714 12.5)"><path d="M5.187 2.955L12.588 12.834 -2.215 12.834z" transform="rotate(90 5.187 7.895)"></path><rect width="1.482" height="14.803" x="9.632" y=".74" rx=".741"></rect></g></g></svg>
                </button>
                <button className='play-btn' onClick={()=> dispatch(songPlay())}>
                    {
                    isPlaying ? <span> pause</span> : 
                    <svg width="13" height="14" viewBox="0 0 16 24"><path class="svg_color" fill-rule="evenodd" d="M0 0v24l20-12z"></path></svg>
                    }
                </button>
                <button className='next'
                 onClick={()=> dispatch(nextSong())}>
                    <svg width="24" height="24" viewBox="0 0 24 24"><g class="svg_color" fill="#000" transform="translate(-655 -2658) translate(87 2624)"><g transform="translate(520 29) rotate(-180 32.714 12.5)"><path d="M5.187 2.955L12.588 12.834 -2.215 12.834z" transform="rotate(90 5.187 7.895)"></path></g></g></svg>
                </button>
            </div>
            <div className='volume'>
                <label for='volume'>
                    volume
                </label>
                <input type="range" min={0} max={10} defaultValue={musicvolume} onChange={(e) => setMusicvolume(e.target.value)}/>
            </div>
        </div>
        </>
    );
}
export default ActionBar;