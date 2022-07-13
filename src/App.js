import './App.css';
import Header from './Components/Header';
import Home from './Home';
import {Routes, Route} from 'react-router-dom';
import Login from './Login';
import Footer from './Components/Footer';
import SongLibrary from './SongLibrary';
import SubmitSong from './SubmitSong';

function App() {
  return (
    <div className="layoutGrid">
      <Header />
      <Routes> 
        <Route path="/" element={ <Home/> } />
        <Route path="/login" element={ <Login/> } />
        <Route path="/songlibrary" element={ <SongLibrary/> } />
        <Route path="/submitsong" element={ <SubmitSong/>} />
        {/*<Route path="/song/:songname" element={ <SongPage/>} />*/}
      </Routes>
      <Footer/> 
    </div>
  );
}
export default App;