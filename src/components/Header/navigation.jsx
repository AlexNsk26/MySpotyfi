/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/no-unused-class-component-methods */
/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-constructor */
import React from 'react';
import logo from './img/logo.png';

// const { useState } = React;

function MainNavigation(props) {
  return (
    <nav className="main__nav nav">
      <div className="nav__logo logo">
        <Logo />
      </div>
      <ClickBurger />
    </nav>
  );
}
export default MainNavigation;

/* function MenuItems(props) {
  const content = [];
  for (let index = 0; index < props.items.length; index++) {
    content.push(
      <li key={String(index)} className="menu__item">
        <a href="http://" className="menu__link">
          {props.items[index]}
        </a>
      </li>
    );
  }
  return content;
} */
function Logo() {
  return <img className="logo__image" src={logo} alt="logo" />;
}

// eslint-disable-next-line react/prefer-stateless-function
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
      <li key={String(index)} className="menu__item">
        <a href="http://" className="menu__link">
          {item}
        </a>
      </li>
    ));
    /*   for (let index = 0; index < items.length; index++) {
      content.push(
        <li key={String(index)} className="menu__item">
          <a href="http://" className="menu__link">
            {items[index]}
          </a>
        </li>
      );
    } */
    return items;
  };

  BurgerLines = () => {
    const content = [];
    for (let i = 0; i < 3; i++) {
      content.push(<span key={i.toString()} className="burger__line" />);
    }
    return content;
  };

  // eslint-disable-next-line react/no-access-state-in-setstate
  handleClick = () => this.setState({ click: !this.state.click });

  FormMenuItems = () => (
    <div className="nav__menu menu">
      <ul className="menu__list">{this.MenuItems()}</ul>
    </div>
  );

  render() {
    const { click } = this.state;
    return (
      <>
        <div onClick={this.handleClick} className="nav__burger burger">
          <this.BurgerLines />
        </div>
        {click && <this.FormMenuItems />}
      </>
    );
  }
}
