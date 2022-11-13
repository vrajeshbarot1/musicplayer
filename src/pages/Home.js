import React from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import SongCard from '../Components/SongCard/SongCard'

const Home = () => {
    const [searchparams,setSearchparams] = useSearchParams();
    const showActive = searchparams.get('filter');
    return (
        <div>
            <h2>Recently Played</h2>
            <SongCard />
            <h2>Featured</h2>
            <button onClick={()=> setSearchparams({filter: 'active'})}>Active</button>
            <button onClick={() => setSearchparams()}>Reset</button>
            <h3>{showActive}</h3>
        </div>
    );
}

export default Home;
