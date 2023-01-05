const playlistArr = require('../Playlist.json');

export function PlaylistTitle() {
  return (
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
  );
}
export function Playlist() {
  return (
    <div className="content__playlist playlist">
      <PlaylistItems />
    </div>
  );
}

function PlaylistTitles(props) {
  const { titleObject } = props;
  const arrTitleObject = Object.keys(titleObject);
  const content = [];
  for (let index = 0; index < arrTitleObject.length; index++) {
    content.push(
      <div
        key={index.toString()}
        className={`playlist-title__col col${arrTitleObject[index]}`}
      >
        {arrTitleObject[index] === '04' ? (
          <svg className="playlist-title__svg" alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-watch" />
          </svg>
        ) : (
          titleObject[arrTitleObject[index]]
        )}
      </div>
    );
  }
  return content;
}
function PlaylistItems() {
  return <PlaylistItem playlist={playlistArr} />;
}
function PlaylistItem(props) {
  const content = [];
  const { playlist } = props;
  // eslint-disable-next-line no-restricted-syntax
  for (let index = 0; index < playlist.length; index++) {
    const itemObj = playlist[index];
    content.push(
      <div key={index.toString()} className="playlist__item">
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
