import logo from './logo.svg';
import './App.css';
import { Joke } from './Joke';
import { AlbumVoting } from './AlbumVoting';

function App() {
  return (
    <div className="App">

      <AlbumVoting />

      <Joke />
    </div>
  );
}

export default App;
