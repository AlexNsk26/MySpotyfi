/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/no-unused-class-component-methods */
/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-constructor */
import React from 'react';
import * as S from './HeaderStyle';
import logo from './img/logo.png';

// const { useState } = React;

function MainNavigation(props) {
  return (
    <S.MainNav>
      <S.NavLogo>
        <Logo />
      </S.NavLogo>
      <ClickBurger />
    </S.MainNav>
  );
}
export default MainNavigation;

function Logo() {
  return <S.LogoImage src={logo} alt="logo" />;
}

class ClickBurger extends React.Component {
  constructor() {
    super();
    this.state = { click: false };
    this.items = ['Главное', 'Мой плейлист', 'Войти'];
    this.MenuItems = this.MenuItems.bind(this);
  }

  MenuItems = () => {
    const content = [];
    let { items } = this;
    items = items.map((item, index) => (
      <S.MenuItem key={String(index)}>
        <S.MenuLink href="http://">{item}</S.MenuLink>
      </S.MenuItem>
    ));
    return items;
  };

  BurgerLines = () => {
    const content = [];
    for (let i = 0; i < 3; i++) {
      content.push(<S.BurgerLine key={i.toString()} />);
    }
    return content;
  };

  // eslint-disable-next-line react/no-access-state-in-setstate
  handleClick = () => this.setState({ click: !this.state.click });

  FormMenuItems = () => (
    <S.NavMenu>
      <S.MenuList>{this.MenuItems()}</S.MenuList>
    </S.NavMenu>
  );

  render() {
    const { click } = this.state;
    return (
      <>
        <S.NavBurger onClick={this.handleClick}>
          <this.BurgerLines />
        </S.NavBurger>

        {click && <this.FormMenuItems />}
      </>
    );
  }
}
