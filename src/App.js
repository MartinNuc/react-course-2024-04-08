import './App.css';
import { Joke } from './Joke';
import { AlbumVoting } from './AlbumVoting';
import { UserInfoPane } from './UserInfoPane';
import { UserContextProvider } from './user-context';

function App() {
  return (
    <UserContextProvider>
      <div className="App">
        <UserInfoPane />
        <AlbumVoting />

        <Joke />
      </div>
    </UserContextProvider>
  );
}

export default App;
