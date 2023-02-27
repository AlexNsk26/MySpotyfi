/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
import { useContext } from 'react';
import iconSvg from '../mainIcons/sprite.svg';
import * as S from './PlaylistStyle';
import { ContextTheme } from '../Others/Context';
import { useGetAllTrackQuery } from '../../pages/services/queryApi';

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
  const { data, error, isLoading } = useGetAllTrackQuery();
  const getPlaylistArr = (dataAllTracks) => {
    console.dir(dataAllTracks);
  };
  return (
    <S.ContentPlaylist>
      <PlaylistItems playlistArr={getPlaylistArr(data)} />
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
function PlaylistItems({ playlistArr }) {
  return <PlaylistItem playlist={playlistArr} />;
}
function PlaylistItem(props) {
  const { theme } = useContext(ContextTheme);
  let { playlist } = props;
  playlist = playlist.map((track, index) => (
    <S.PlaylistItem key={index.toString()}>
      <S.PlaylistTrack theme={theme}>
        <TrackTitle theme={theme} title={track.title} />
        <TrackAuthor theme={theme} author={track.author} />
        <TrackAlbum album={track.album} />
        <TrackTime time={track.time} />
      </S.PlaylistTrack>
    </S.PlaylistItem>
  ));

  return playlist;
}
function TrackTitle({ theme, title }) {
  return (
    <S.TrackTitle>
      <S.TrackTitleImage theme={theme}>
        <S.TrackTitleSvg theme={theme} alt="music">
          <use
            xlinkHref={
              theme === 'darkTheme'
                ? `${iconSvg}#icon-note`
                : `${iconSvg}#icon-note-light`
            }
          />
        </S.TrackTitleSvg>
      </S.TrackTitleImage>

      <S.TrackTitleLink theme={theme} href="http://">
        {title}
      </S.TrackTitleLink>
    </S.TrackTitle>
  );
}
function TrackAuthor({ theme, author }) {
  return (
    <S.TrackAuthor>
      <S.TrackAuthorLink theme={theme} href="http://">
        {author}
      </S.TrackAuthorLink>
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
