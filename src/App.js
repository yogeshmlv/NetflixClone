
import './App.css';
import Netflixoriginals from './NetflixOriginals';
import TrandingNow from './TrandingNow';
import Comedy from './Comedy';
import ActionMovies from './ActionMovies';
import RomanceMovies from './RomanceMovies';
import Documentary from './Documentary';
import Navbar from './Navbar';
import Main from './Main';
function App() {
  return (
    <div>
      
      <Navbar/>
      <Main/>
      <Netflixoriginals />
      <TrandingNow/>
      <ActionMovies/>
      <Comedy/>
      <RomanceMovies/>
      <Documentary/>
      
    </div>
  );
}

export default App;
