/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
// import { ButtonLogIn } from './Login';
import * as S from './LoginStyles';

describe('tests for Login', () => {
  test('render button Login', () => {
    const isLoading = true;
    render(<S.ButtonLogIn disabled={isLoading}>Войти</S.ButtonLogIn>);
    const linkElement = screen.getByText(/Войти/i);
    expect(linkElement).toBeInTheDocument();
  });
});
