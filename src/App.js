import './App.css';
import { Joke } from './Joke';
import { AlbumVoting } from './AlbumVoting';
import { UserInfoPane } from './UserInfoPane';
import { UserContextProvider } from './user-context';
import {JokeFetcher} from './render-props/joke-fetcher'

function App() {
  return (
    <UserContextProvider>
      <div className="App">
        <UserInfoPane />
        <AlbumVoting />

        <JokeFetcher>
          {({isLoading, joke}) => <p>{isLoading ? 'Loading...' : joke}</p>}
        </JokeFetcher>
      </div>
    </UserContextProvider>
  );
}

export default App;
