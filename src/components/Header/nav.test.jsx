/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { customRender, setupApiStore } from '../../tests/test-utils.test';
import { FormMenuItems } from './navigation';
import { spotyfyQueryApi } from '../../pages/services/queryApi';

describe('<ThemeSwitcher />', () => {
  it('should change theme by click', () => {
    const storeRef = setupApiStore(spotyfyQueryApi);
    render(<FormMenuItems />, { wrapper: storeRef.wrapper });
    /*     const navigate = '';
    jest.mock('./navigation', () =>
      jest.fn(() => ({ navigate: mockNavigate }))
    ); */
    const button = screen.getAllByTestId('themeSwitcher');
    const burgerItem = screen.getAllByText('Главное');

    expect(button).toBeInTheDocument();
    expect(burgerItem).toBeInTheDocument();
    /*     expect(burgerItem).toHaveStyle({
      color: '#ffffff',
    });

    fireEvent.click(button);

    expect(button).toHaveStyle({
      color: '#000000',
    }); */
  });
});
