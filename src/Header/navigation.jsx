function MainNavigation(props) {
  return (
    <nav className="main__nav nav">
      <div className="nav__logo logo">
        <Logo logo={props.logo} />
      </div>
      <div className="nav__burger burger">
        <BurgerLines />
      </div>
      <div className="nav__menu menu">
        <ul className="menu__list">
          <MenuItems items={props.items} />
        </ul>
      </div>
    </nav>
  );
}
export default MainNavigation;
function BurgerLines() {
  const content = [];
  for (let i = 0; i < 2; i++) {
    content.push(<span key={i.toString()} className="burger__line" />);
  }
  return content;
}
function MenuItems(props) {
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
}
function Logo() {
  return <img className="logo__image" src="./img/logo.png" alt="logo" />;
}
