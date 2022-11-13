import './App.css';
import {Routes, Route} from 'react-router-dom';
import Sidebar from './Components/Sidebar/Sidebar';
import Header from './Components/Header/Header'
import NoMatch from './Components/NoMatch';
import Home from './pages/Home';
import AllSongs from './pages/AllSongs';
import TrendingSongs from './pages/TrendingSongs';
import OldSongs from './pages/OldSongs';
import NewSongs from './pages/NewSongs';
import Song from './pages/Song';
import SongCard from './Components/SongCard/SongCard';

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar/> 
      <div className='main'>
          <Routes>
            <Route path='/' element={<Home />} ></Route>
            <Route path='/AllSongs' element={<AllSongs />} />
            <Route path='/TrendingSongs' element={<TrendingSongs />} />
            <Route path='/OldSongs' element={<OldSongs />} />
            <Route path='/NewSongs' element={<NewSongs />} />
            <Route path='/song/:songName' element={<Song />} />
            <Route path='*' element={<NoMatch />} />
            <Route path='/songCards' element={<SongCard />} />
          </Routes>
      </div>
    </div>
  );
}

export default App;
