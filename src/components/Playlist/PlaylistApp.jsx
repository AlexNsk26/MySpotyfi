/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
import { useContext } from 'react';
import iconSvg from '../mainIcons/sprite.svg';
import * as S from './PlaylistStyle';
import { ContextTheme } from '../Others/Context';
import { FindMyIdFav } from '../LoginStotigeData';
// import { useGetTrackByIdQuery } from '../../pages/services/queryApi';

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

export function Playlist({ setIdTrack, allTracksData }) {
  const getPlaylistArr = (dataAllTracks) => {
    const dataAllTracksConvert = dataAllTracks.map((track) => ({
      ...track,
      isLike: FindMyIdFav(track.stared_user),
    }));
    return dataAllTracksConvert;
  };
  return (
    <S.ContentPlaylist>
      <PlaylistItems
        setIdTrack={setIdTrack}
        playlistArr={getPlaylistArr(allTracksData)}
      />
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
function PlaylistItems({ setIdTrack, playlistArr }) {
  return <PlaylistItem setIdTrack={setIdTrack} playlist={playlistArr} />;
}
function ConvertTime(timeSeconds) {
  const min = Math.floor(timeSeconds / 60);
  const sec = timeSeconds % 60;
  // const corectSec = sec<10
  return `${min}:${sec < 10 ? `0${sec}` : sec}`;
}
function OnClickTrack(e, setIdTrack) {
  const { currentTarget } = e;
  const idTrack = currentTarget.dataset.idtrack;
  setIdTrack(idTrack);
}
function PlaylistItem(props) {
  const { theme } = useContext(ContextTheme);
  let { playlist } = props;
  playlist = playlist.map((track, index) => (
    <S.PlaylistItem key={track.id}>
      <S.PlaylistTrack
        data-idTrack={track.id}
        onClick={(e) => OnClickTrack(e, props.setIdTrack)}
        theme={theme}
      >
        <TrackTitle theme={theme} title={track.name} />
        <TrackAuthor idTrack={track.id} theme={theme} author={track.author} />
        <TrackAlbum idTrack={track.id} album={track.album} />
        <TrackTime
          isLike={track.isLike}
          time={ConvertTime(track.duration_in_seconds)}
        />
      </S.PlaylistTrack>
    </S.PlaylistItem>
  ));

  return playlist;
}
function TrackTitle({ onClick, theme, title }) {
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

      <S.TrackTitleLink theme={theme} href="#">
        {title}
      </S.TrackTitleLink>
    </S.TrackTitle>
  );
}
function TrackAuthor({ theme, author }) {
  return (
    <S.TrackAuthor>
      <S.TrackAuthorLink theme={theme} href="#">
        {author}
      </S.TrackAuthorLink>
    </S.TrackAuthor>
  );
}
function TrackAlbum(props) {
  return (
    <S.TrackAlbum>
      <S.TrackAlbumLink href="#">{props.album}</S.TrackAlbumLink>
    </S.TrackAlbum>
  );
}
function TrackTime(props) {
  return (
    <S.TrackTime>
      <S.TrackTimeSvg isLike={props.isLike} alt="time">
        <use xlinkHref={`${iconSvg}#icon-like`} />
      </S.TrackTimeSvg>
      <S.TrackTimeText>{props.time}</S.TrackTimeText>
    </S.TrackTime>
  );
}
