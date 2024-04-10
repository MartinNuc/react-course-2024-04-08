import React, { useState, useContext, useReducer, useEffect } from 'react';

const UserContext = React.createContext('Provider required');

function reducer(state, action) {
  switch(action.type) {
    case 'login':
      return {
        user: action.payload,
        timeLeft: 10
      };
    case 'logout':
      return {
        ...state,
        user: null
      };
    case 'sessionTick':
      if (state.timeLeft <= 1) {
        return {
          ...state,
          user: null,
        }
      }
      return {
        ...state,
        timeLeft: state.timeLeft - 1
      };
    default:
      return state;
  }
}

export function UserContextProvider({ children }) {
  const [userSession, dispatch] = useReducer(reducer, {
    user: null,
    timeLeft: 0
  });

  const userContextApi = {
    user: userSession.user,
    timeLeft: userSession.timeLeft,
    login: (user) => dispatch({type: 'login', payload: user}),
    logout: () => dispatch({type: 'logout'}),
  };

  useEffect(() => {
    if (!userSession.user) {
      return
    }

    const intervalRef = setInterval(() => dispatch({type: 'sessionTick'}), 1000);

    return () => clearInterval(intervalRef);
  }, [userSession.user]);

  return (
    <UserContext.Provider value={userContextApi}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);
