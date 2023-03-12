/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/no-unused-class-component-methods */
/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-constructor */
import React, { useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ContextTheme } from '../Others/Context';
import * as S from './HeaderStyle';
import { FetchUserLogOut } from '../../store/actions/creators/creators';
import logo from './img/logo.png';
import logoLight from './img/LogoLight.png';
import iconSvg from '../mainIcons/sprite.svg';

// const { useState } = React;

function MainNavigation() {
  const { theme, setTheme } = useContext(ContextTheme);
  return (
    <S.MainNav theme={theme}>
      <S.NavLogo>
        <Logo theme={theme} />
      </S.NavLogo>
      <ClickBurgerFunc theme={theme} setTheme={setTheme} />
    </S.MainNav>
  );
}
export default MainNavigation;

function Logo({ theme }) {
  return (
    <S.LogoImage src={theme === 'darkTheme' ? logo : logoLight} alt="logo" />
  );
}

function SvgTheme({ theme }) {
  return (
    <S.SvgTheme>
      <use
        xlinkHref={
          theme === 'darkTheme'
            ? `${iconSvg}#darkTheme`
            : `${iconSvg}#lightTheme`
        }
      />
    </S.SvgTheme>
  );
}

export function FormMenuItems({ items, setTheme, theme }) {
  let arrItems = items;
  const content = [];
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const LogOut = (e, path) => {
    if (path === '/login') {
      e.preventDefault();
      localStorage.removeItem('MySpotyfyLoginData');
      dispatch(FetchUserLogOut());
      navigate('/login', { replace: true });
    }
  };

  arrItems = items.map((item, index) => (
    <S.MenuItem key={String(index)}>
      <S.MenuLink
        theme={theme}
        onClick={(e) => LogOut(e, item.path)}
        to={item.path}
      >
        {item.title}
      </S.MenuLink>
    </S.MenuItem>
  ));
  arrItems.push(
    <S.MenuItem data-TestId="themeSwitcher" key="3" onClick={setTheme}>
      <SvgTheme theme={theme} />
    </S.MenuItem>
  );
  return (
    <S.NavMenu>
      <S.MenuList>{arrItems}</S.MenuList>
    </S.NavMenu>
  );
}
function ClickBurgerFunc({ theme, setTheme }) {
  const items = [
    { title: 'Главное', path: '/' },
    { title: 'Мой плейлист', path: '/sets/4' },
    { title: 'Выйти', path: '/login' },
  ];
  const [click, setClick] = useState(false);

  const BurgerLines = () => {
    const content = [];
    for (let i = 0; i < 3; i++) {
      content.push(<S.BurgerLine theme={theme} key={i.toString()} />);
    }
    return content;
  };

  const handleClick = () => setClick(!click);

  return (
    <>
      <S.NavBurger onClick={() => handleClick()}>
        <BurgerLines />
      </S.NavBurger>

      {click && (
        <FormMenuItems items={items} setTheme={setTheme} theme={theme} />
      )}
    </>
  );
}
