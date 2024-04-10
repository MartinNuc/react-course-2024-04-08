import {useUser} from './user-context';

export const CurrentUserInfo = () => {
  const { user, timeLeft, logout } = useUser();

  if (!user) { return null; }

  return <div>
    <div>username: {user.username}</div>
    <div>email: {user.email}</div>
    <div>Session expires in {timeLeft}s</div>
    <button onClick={logout}>Logout</button>
  </div>
}