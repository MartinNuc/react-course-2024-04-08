import { UserInfoPane } from '../UserInfoPane';
import { NavBar } from './nav-bar';
import { Outlet } from 'react-router-dom';

export function Layout() {
  return (
    <>
      <NavBar />
      <UserInfoPane />

      <hr />

      <Outlet />
    </>
  );
}
