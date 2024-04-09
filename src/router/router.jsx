
import {createBrowserRouter,Outlet } from 'react-router-dom';
import { AlbumVoting } from '../AlbumVoting';
import {Layout} from './layout'
import { Categories } from '../jokes/categories';
import { Joke } from '../jokes/joke';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'votes',
        element: <AlbumVoting />
      },
      {
        path: 'categories',
        element: <Outlet />,
        children: [
          {
            index: true,
            element: <Categories />,
          },
          {
            path: ':category',
            element: <Joke />
          }
        ]
      }
    ]
  }
]);