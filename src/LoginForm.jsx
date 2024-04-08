import {useState} from 'react';
import {useUser} from './user-context';

export function LoginForm() {
  const { login } = useUser();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  return <div>
    <input placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} />
    <input placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />

    <button onClick={() => login({username, email})}>Login</button>
  </div>
}
