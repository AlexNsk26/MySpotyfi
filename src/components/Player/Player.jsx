import iconSvg from '../mainIcons/sprite.svg';
import { SceletonTrackPlayer } from '../Others/Sceleton';
import * as S from './PlayerStyle';

function Player(props) {
  return (
    <S.Bar>
      <S.BarContent>
        <S.BarPlayerProgress />
        <S.BarPlayerBlock>
          <S.BarPlayer>
            <S.Playercontrols>
              <PlayerControls
                list={[
                  `${iconSvg}#icon-prev`,
                  `${iconSvg}#icon-play`,
                  `${iconSvg}#icon-next`,
                  `${iconSvg}#icon-repeat`,
                  `${iconSvg}#icon-shuffle`,
                ]}
              />
            </S.Playercontrols>
            <S.PlayerTrackPlay>
              {props.IsLoading ? (
                <SceletonTrackPlayer />
              ) : (
                <TrackPlay authorLink="Ты та..." albumLink="Баста" />
              )}
            </S.PlayerTrackPlay>

            <S.TrackPlayLikeDis>
              <S.TrackPlayLikeDisIcon>
                <S.TrackPlayLikeDisSvg $like="like" alt="like">
                  <use xlinkHref={`${iconSvg}#icon-like`} />
                </S.TrackPlayLikeDisSvg>
              </S.TrackPlayLikeDisIcon>

              <S.TrackPlayLikeDisIcon $dislike="dislike">
                <S.TrackPlayLikeDisSvg $like="dislike" alt="dislike">
                  <use xlinkHref={`${iconSvg}#icon-dislike`} />
                </S.TrackPlayLikeDisSvg>
              </S.TrackPlayLikeDisIcon>
            </S.TrackPlayLikeDis>
          </S.BarPlayer>

          <S.BarVolumeBlock>
            <S.VolumeContent>
              <S.VolumeImage>
                <S.VolumeSvg alt="volume">
                  <use xlinkHref={`${iconSvg}#icon-volume`} />
                </S.VolumeSvg>
              </S.VolumeImage>

              <S.VolumeProgress>
                <S.VolumeProgressLine type="range" name="range" />
              </S.VolumeProgress>
            </S.VolumeContent>
          </S.BarVolumeBlock>
        </S.BarPlayerBlock>
      </S.BarContent>
    </S.Bar>
  );
}
export default Player;
function PlayerControls(props) {
  const content = [];
  const { list } = props;
  for (let index = 0; index < list.length; index++) {
    content.push(
      <S.PlayerBtn key={index.toString()}>
        <S.PlayerBtnSvg $btn={list[index]} alt="prev">
          <use xlinkHref={list[index]} />
        </S.PlayerBtnSvg>
      </S.PlayerBtn>
    );
  }
  return content;
}
function TrackPlay(props) {
  return (
    <>
      <S.TrackPlayImage>
        <S.TrackPlaySvg alt="music">
          <use xlinkHref={`${iconSvg}#icon-note`} />
        </S.TrackPlaySvg>
      </S.TrackPlayImage>
      <S.TrackGroup>
        <S.TrackPlayAuthor>
          <S.TrackPlayAuthorLink href="http://">
            {props.authorLink}
          </S.TrackPlayAuthorLink>
        </S.TrackPlayAuthor>
        <S.TrackPlayAlbum>
          <S.TrackPlayAlbumLink href="http://">
            {props.albumLink}
          </S.TrackPlayAlbumLink>
        </S.TrackPlayAlbum>
      </S.TrackGroup>
    </>
  );
}
