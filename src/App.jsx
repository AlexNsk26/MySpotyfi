/* eslint-disable comma-dangle */
// import logoPNG from '../img/logo.png';
// import '../css/style.css';
// import ArrPlayList from './Playlist.json'
// import React from 'react';

const playlistArr = require('./Playlist.json');

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <main className="main">
          <MainNavigation
            logo="../img/logo.png"
            items={['Главное', 'Мой плейлист', 'Войти']}
          />
          <div className="main__centerblock centerblock">
            <div className="centerblock__search search">
              <CenterBlockSearchLogo logo="img/icon/sprite.svg#icon-search" />
              <CenterBlockSearchInput />
            </div>
          </div>
          <h2 className="centerblock__h2">Треки</h2>
          <div className="centerblock__filter filter">
            <div className="filter__title">Искать по:</div>
            <FilterButtons
              BTNobject={{
                'button-author': 'исполнителю',
                'button-year': 'году выпуска',
                'button-genre': 'жанру',
              }}
            />
          </div>
          <div className="centerblock__content">
            <div className="content__title playlist-title">
              <PlaylistTitles
                titleObject={{
                  '01': 'Трек',
                  '02': 'ИСПОЛНИТЕЛЬ',
                  '03': 'АЛЬБОМ',
                  '04': '',
                }}
              />
            </div>
          </div>
          <div className="content__playlist playlist">
            <PlaylistItems />
          </div>
          <div className="main__sidebar sidebar">
            <div className="sidebar__personal">
              <p className="sidebar__personal-name">Sergey.Ivanov</p>
              <div className="sidebar__avatar" />
            </div>
            <div className="sidebar__block">
              <div className="sidebar__list">
                <SidebarList
                  list={[
                    '../img/playlist01.png',
                    '../img/playlist02.png',
                    '../img/playlist03.png',
                  ]}
                />
              </div>
            </div>
          </div>
        </main>
        <div className="bar">
          <div className="bar__content">
            <div className="bar__player-progress" />
            <div className="bar__player-block">
              <div className="bar__player player">
                <div className="player__controls">
                  <PlayerControls
                    list={[
                      '../img/icon/sprite.svg#icon-prev',
                      '../img/icon/sprite.svg#icon-play',
                      '../img/icon/sprite.svg#icon-next',
                      '../img/icon/sprite.svg#icon-repeat',
                      '../img/icon/sprite.svg#icon-shuffle',
                    ]}
                  />
                </div>
                <div className="player__track-play track-play">
                  <TrackPlay authorLink="Ты та..." albumLink="Баста" />
                </div>

                <div className="track-play__like-dis">
                  <div className="track-play__like _btn-icon">
                    <svg className="track-play__like-svg" alt="like">
                      <use xlinkHref="img/icon/sprite.svg#icon-like" />
                    </svg>
                  </div>
                  <div className="track-play__dislike _btn-icon">
                    <svg className="track-play__dislike-svg" alt="dislike">
                      <use xlinkHref="img/icon/sprite.svg#icon-dislike" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="bar__volume-block volume">
              <div className="volume__content">
                <div className="volume__image">
                  <svg className="volume__svg" alt="volume">
                    <use xlinkHref="img/icon/sprite.svg#icon-volume" />
                  </svg>
                </div>
                <div className="volume__progress _btn">
                  <input
                    className="volume__progress-line _btn"
                    type="range"
                    name="range"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer" />
    </div>
  );
}

export default App;
function Logo(props) {
  return <img className="logo__image" src={props.logo} alt="logo" />;
}
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
function BurgerLines() {
  const content = [];
  for (let i = 0; i < 2; i + 1) {
    content.push(<span className="burger__line" />);
  }
  return content;
}
function MenuItems(props) {
  const content = [];
  for (let index = 0; index < props.items.length; index + 1) {
    content.push(
      <li className="menu__item">
        <a href="http://" className="menu__link">
          {props.items[index]}
        </a>
      </li>
    );
  }
  return content;
}
function CenterBlockSearchLogo(props) {
  return (
    <svg className="search__svg">
      <use xlinkHref={props.logo} />
    </svg>
  );
}

function CenterBlockSearchInput() {
  return (
    <input
      className="search__text"
      type="search"
      placeholder="Поиск"
      name="search"
    />
  );
}
function FilterButtons(props) {
  const BTNobject = props;
  return BTNobject.keys().map((key) => (
    <div className={`filter__button ${key} _btn-text`}>{BTNobject[key]}</div>
  ));
}
function PlaylistTitles(props) {
  const titleObject = props;
  return titleObject.keys().map((key) => (
    <div className={`playlist-title__col col${key}`}>
      {key === '04' ? (
        <svg className="playlist-title__svg" alt="time">
          <use xlinkHref="img/icon/sprite.svg#icon-watch" />
        </svg>
      ) : (
        titleObject[key]
      )}
    </div>
  ));
}
function PlaylistItems() {
  return <PlaylistItem playlist={JSON.parse(playlistArr)} />;
}
function PlaylistItem(playlist) {
  const content = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const itemObj of playlist) {
    content.push(
      <div className="playlist__item">
        <div className="playlist__track track">
          <TrackTitle title={itemObj.title} />
          <TrackAuthor author={itemObj.author} />
          <TrackAlbum album={itemObj.album} />
          <TrackTime time={itemObj.time} />
        </div>
      </div>
    );
  }
  return content;
}
function TrackTitle(props) {
  return (
    <div className="track__title">
      <div className="track__title-image">
        <svg className="track__title-svg" alt="music">
          <use xlinkHref="img/icon/sprite.svg#icon-note" />
        </svg>
      </div>
      <div className="track__title-text">
        <a className="track__title-link" href="http://">
          {props.title}
          <span className="track__title-span" />
        </a>
      </div>
    </div>
  );
}
function TrackAuthor(props) {
  return (
    <div className="track__author">
      <a className="track__author-link" href="http://">
        {props.author}
      </a>
    </div>
  );
}
function TrackAlbum(props) {
  return (
    <div className="track__album">
      <a className="track__album-link" href="http://">
        {props.album}
      </a>
    </div>
  );
}
function TrackTime(props) {
  return (
    <div className="track__time">
      <svg className="track__time-svg" alt="time">
        <use xlinkHref="img/icon/sprite.svg#icon-like" />
      </svg>
      <span className="track__time-text">{props.time}</span>
    </div>
  );
}

function SidebarList(list) {
  return list.map((src) => (
    <div className="sidebar__item">
      <a className="sidebar__link" href="http://">
        <img className="sidebar__img" src={src} alt="day's playlist" />
      </a>
    </div>
  ));
}
function PlayerControls(controlsBTN) {
  return controlsBTN.map((src) => (
    <div className="player__btn-prev">
      <svg className="player__btn-prev-svg" alt="prev">
        <use xlinkHref={src} />
      </svg>
    </div>
  ));
}
function TrackPlay(props) {
  return (
    <>
      <div className="track-play__image">
        <svg className="track-play__svg" alt="music">
          <use xlinkHref="img/icon/sprite.svg#icon-note" />
        </svg>
      </div>
      <div className="track-play__author">
        <a className="track-play__author-link" href="http://">
          {props.authorLink}
        </a>
      </div>
      <div className="track-play__album">
        <a className="track-play__album-link" href="http://">
          {props.albumLink}
        </a>
      </div>
    </>
  );
}
