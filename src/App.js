import './App.css';
import { Joke } from './jokes/joke';
import { AlbumVoting } from './AlbumVoting';
import { UserInfoPane } from './UserInfoPane';
import { UserContextProvider } from './user-context';
import { JokeFetcher } from './render-props/joke-fetcher'
import { ThrowComponent } from './error-boundary/throw-component';
import { ErrorBoundary } from './error-boundary/error-boundary';
import {router} from './router/router';
import { RouterProvider } from 'react-router-dom';

function App() {
  return (
    <ErrorBoundary>
      <UserContextProvider>
        <RouterProvider router={router} />
      </UserContextProvider>
    </ErrorBoundary>
  );
}

export default App;
