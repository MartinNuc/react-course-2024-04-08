import './App.css';
import { Joke } from './Joke';
import { AlbumVoting } from './AlbumVoting';
import { UserInfoPane } from './UserInfoPane';
import { UserContextProvider } from './user-context';
import { JokeFetcher } from './render-props/joke-fetcher'
import { ThrowComponent } from './error-boundary/throw-component';
import { ErrorBoundary } from './error-boundary/error-boundary';

function App() {
  return (
    <ErrorBoundary>
      <UserContextProvider>
        <div className="App">

          <ErrorBoundary>
            <ThrowComponent />
          </ErrorBoundary>

          <UserInfoPane />
          <AlbumVoting />

          <JokeFetcher>
            {({ isLoading, joke }) => <p>{isLoading ? 'Loading...' : joke}</p>}
          </JokeFetcher>
        </div>
      </UserContextProvider>
    </ErrorBoundary>
  );
}

export default App;
