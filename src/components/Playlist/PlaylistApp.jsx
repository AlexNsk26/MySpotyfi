/* eslint-disable react/no-array-index-key */
import iconSvg from '../mainIcons/sprite.svg';
import * as S from './PlaylistStyle';

const playlistArr = require('../Playlist.json');

export function PlaylistTitle() {
  return (
    <S.CenterblockContent>
      <S.ContentTitle>
        <PlaylistTitles
          titleObject={{
            '01': 'ТРЕК',
            '02': 'ИСПОЛНИТЕЛЬ',
            '03': 'АЛЬБОМ',
            '04': '',
          }}
        />
      </S.ContentTitle>
    </S.CenterblockContent>
  );
}
export function Playlist() {
  return (
    <S.ContentPlaylist>
      <PlaylistItems />
    </S.ContentPlaylist>
  );
}

function PlaylistTitles(props) {
  const { titleObject } = props;

  let arrTitleObject = Object.keys(titleObject);
  arrTitleObject = arrTitleObject.map((numberList, index) => (
    <S.PlaylistTitleCol key={index.toString()} $ColNum={numberList}>
      {numberList === '04' ? (
        <S.TrackTitleSvg alt="time">
          <use xlinkHref={`${iconSvg}#icon-watch`} />
        </S.TrackTitleSvg>
      ) : (
        titleObject[numberList]
      )}
    </S.PlaylistTitleCol>
  ));

  return arrTitleObject;
}
function PlaylistItems() {
  return <PlaylistItem playlist={playlistArr} />;
}
function PlaylistItem(props) {
  let { playlist } = props;
  playlist = playlist.map((track, index) => (
    <S.PlaylistItem key={index.toString()}>
      <S.PlaylistTrack>
        <TrackTitle title={track.title} />
        <TrackAuthor author={track.author} />
        <TrackAlbum album={track.album} />
        <TrackTime time={track.time} />
      </S.PlaylistTrack>
    </S.PlaylistItem>
  ));

  return playlist;
}
function TrackTitle(props) {
  return (
    <S.TrackTitle>
      <S.TrackTitleImage>
        <S.TrackTitleSvg alt="music">
          <use xlinkHref={`${iconSvg}#icon-note`} />
        </S.TrackTitleSvg>
      </S.TrackTitleImage>

      <S.TrackTitleLink href="http://">
        <S.TrackTitleLink>{props.title}</S.TrackTitleLink>
      </S.TrackTitleLink>
    </S.TrackTitle>
  );
}
function TrackAuthor(props) {
  return (
    <S.TrackAuthor>
      <S.TrackAuthorLink href="http://">{props.author}</S.TrackAuthorLink>
    </S.TrackAuthor>
  );
}
function TrackAlbum(props) {
  return (
    <S.TrackAlbum>
      <S.TrackAlbumLink href="http://">{props.album}</S.TrackAlbumLink>
    </S.TrackAlbum>
  );
}
function TrackTime(props) {
  return (
    <S.TrackTime>
      <S.TrackTimeSvg alt="time">
        <use xlinkHref={`${iconSvg}#icon-like`} />
      </S.TrackTimeSvg>
      <S.TrackTimeText>{props.time}</S.TrackTimeText>
    </S.TrackTime>
  );
}
