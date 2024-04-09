import { fireEvent, render, screen } from '@testing-library/react';
import { UserInfoPane } from './UserInfoPane';
import { UserContextProvider } from './user-context';
import { act } from 'react-dom/test-utils';

function setupTest() {
  function renderTest() {
    render(
      <UserContextProvider>
        <UserInfoPane />
      </UserContextProvider>
    );
  }

  function login(username, email) {
    const usernameInput = screen.getByPlaceholderText('username');
    const emailInput = screen.getByPlaceholderText('email');
    const loginButton = screen.getByRole('button', { name: 'Login' });

    fireEvent.change(usernameInput, { target: { value: username } });
    fireEvent.change(emailInput, { target: { value: email } });
    fireEvent.click(loginButton);
  }

  function logout() {
    const logoutButton = screen.getByRole('button', { name: 'Logout' });
    fireEvent.click(logoutButton);
  }

  function getUsernameInput() {
    return screen.getByPlaceholderText('username');
  }

  return {
    render: renderTest,
    login,
    logout,
    getUsernameInput
  }
}

describe('UserInfoPane', () => {
  it('shows login form when rendered', () => {
    const {render, getUsernameInput} = setupTest();
    render();
    const emailInput = screen.getByPlaceholderText('email');
    const loginButton = screen.getByRole('button', { name: 'Login' });
    expect(getUsernameInput()).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
  });

  it('shows logged user after login', () => {
    const {render, login} = setupTest();
    render();
    login('Martin', 'martin@nuc.cz');
    expect(screen.getByText('martin@nuc.cz', {exact: false})).toBeInTheDocument();
  });

  it('logouts user', () => {
    const {render, login, logout, getUsernameInput} = setupTest();
    render();
    login('Martin', 'martin@nuc.cz');
    logout();
    expect(getUsernameInput()).toBeInTheDocument();
  });
});
