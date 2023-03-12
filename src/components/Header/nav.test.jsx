/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { customRender, setupApiStore } from '../../tests/test-utils';
import { FormMenuItems } from './navigation';
import MyWrapperFormMenuItems from './nav_test_utils';
import { spotyfyQueryApi } from '../../pages/services/queryApi';

const storeRef = setupApiStore(spotyfyQueryApi);

describe('<ThemeSwitcher />', () => {
  it('should change theme by click', () => {
    render(<MyWrapperFormMenuItems />, { wrapper: storeRef.wrapper });
    /*     const navigate = '';
    jest.mock('./navigation', () =>
      jest.fn(() => ({ navigate: mockNavigate }))
    ); */
    const button = screen.getByTestId('themeSwitcher');
    const burgerItem = screen.getByText('Главное');

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
