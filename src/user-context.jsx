import React, { useState, useContext } from 'react';

const UserContext = React.createContext('Provider required');

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);

  const userContextApi = {
    user,
    login: (user) => setUser(user),
    logout: () => setUser(null),
  };

  return (
    <UserContext.Provider value={userContextApi}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);
