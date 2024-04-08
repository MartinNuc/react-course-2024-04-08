import {useUser} from './user-context';

export const CurrentUserInfo = () => {
  const { user, logout } = useUser();

  if (!user) { return null; }

  return <div>
    username: {user.username}
    email: {user.email}
    <button onClick={logout}>Logout</button>
  </div>
}