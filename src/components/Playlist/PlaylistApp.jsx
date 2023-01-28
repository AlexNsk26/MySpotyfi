/* eslint-disable react/no-array-index-key */
import iconSvg from '../mainIcons/sprite.svg';

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

  let arrTitleObject = Object.keys(titleObject);
  arrTitleObject = arrTitleObject.map((numberList, index) => (
    <div
      // eslint-disable-next-line react/no-array-index-key
      key={index.toString()}
      className={`playlist-title__col col${numberList}`}
    >
      {numberList === '04' ? (
        <svg className="playlist-title__svg" alt="time">
          <use xlinkHref={`${iconSvg}#icon-watch`} />
        </svg>
      ) : (
        titleObject[numberList]
      )}
    </div>
  ));

  return arrTitleObject;
}
function PlaylistItems() {
  return <PlaylistItem playlist={playlistArr} />;
}
function PlaylistItem(props) {
  let { playlist } = props;
  playlist = playlist.map((track, index) => (
    <div key={index.toString()} className="playlist__item">
      <div className="playlist__track track">
        <TrackTitle title={track.title} />
        <TrackAuthor author={track.author} />
        <TrackAlbum album={track.album} />
        <TrackTime time={track.time} />
      </div>
    </div>
  ));

  return playlist;
}
function TrackTitle(props) {
  return (
    <div className="track__title">
      <div className="track__title-image">
        <svg className="track__title-svg" alt="music">
          <use xlinkHref={`${iconSvg}#icon-note`} />
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
        <use xlinkHref={`${iconSvg}#icon-like`} />
      </svg>
      <span className="track__time-text">{props.time}</span>
    </div>
  );
}
