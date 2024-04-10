import { LoginForm } from './LoginForm';
import { CurrentUserInfo } from './CurrentUserInfo';
import { useUser } from './user-context';

export function UserInfoPane() {
  const {user} = useUser();

  return <div>{user ? <CurrentUserInfo /> : <LoginForm />}</div>;
}
