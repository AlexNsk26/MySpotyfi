/* eslint-disable no-unused-vars */
import { useContext } from 'react';
import * as S from './PlayerStyle';
import { ContextTheme } from '../Others/Context';
import { useSetFavTrackByIdMutation } from '../../pages/services/queryApi';
import { FindMyIdFav } from '../LoginStotigeData';
import iconSvg from '../mainIcons/sprite.svg';

export default function LikeDislike({ trackData }) {
  const { theme } = useContext(ContextTheme);
  const [SetFavTrackById, { isLoading }] = useSetFavTrackByIdMutation();
  const LikeDisHandelClick = (btnValue) => {
    SetFavTrackById({ btnValue, idTrack: trackData.id });
  };
  return (
    <S.TrackPlayLikeDis>
      <S.TrackPlayLikeDisIcon
        key="1"
        onClick={() => LikeDisHandelClick('like')}
      >
        <S.TrackPlayLikeDisSvg
          theme={theme}
          $like="like"
          isLike={
            trackData && trackData.stared_user
              ? FindMyIdFav(trackData.stared_user)
              : false
          }
          alt="like"
        >
          <use xlinkHref={`${iconSvg}#icon-like`} />
        </S.TrackPlayLikeDisSvg>
      </S.TrackPlayLikeDisIcon>

      <S.TrackPlayLikeDisIcon
        key="2"
        onClick={() => LikeDisHandelClick('dislike')}
        $dislike="dislike"
      >
        <S.TrackPlayLikeDisSvg theme={theme} $like="dislike" alt="dislike">
          <use xlinkHref={`${iconSvg}#icon-dislike`} />
        </S.TrackPlayLikeDisSvg>
      </S.TrackPlayLikeDisIcon>
    </S.TrackPlayLikeDis>
  );
}
