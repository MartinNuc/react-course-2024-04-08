import { LoginForm } from './LoginForm';
import { CurrentUserInfo } from './CurrentUserInfo';
import { useUser } from './user-context';

export function UserInfoPane() {
  const contextValue = useUser();
  const {user} = contextValue;

  return <div>{user ? <CurrentUserInfo /> : <LoginForm />}</div>;
}
