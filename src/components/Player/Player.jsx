/* eslint-disable react/jsx-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-vars */
import React, {
  useContext,
  useRef,
  useState,
  useEffect,
  forwardRef,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContextTheme } from '../Others/Context';
import iconSvg from '../mainIcons/sprite.svg';
import { SceletonTrackPlayer } from '../Others/Sceleton';
import { GetPlayingTrackSelector } from '../../store/selectors/selectors';
import LikeDislike from './LikeDislike';

import * as S from './PlayerStyle';

function Player({ IsLoading, trackData }) {
  const PlayingTrackSrc = useSelector(GetPlayingTrackSelector);
  const [audio, setAudio] = useState(new Audio(''));
  const [isPlaying, setPlayBtn] = useState(false);
  const { theme } = useContext(ContextTheme);

  useEffect(() => {
    audio.pause();
    setPlayBtn(false);
    setAudio(new Audio(PlayingTrackSrc));
  }, [PlayingTrackSrc]);

  const ChangeVolume = (e) => {
    const { target } = e;
    audio.volume = target.valueAsNumber / 100;
  };

  return (
    <S.Bar theme={theme}>
      <S.BarContent>
        <GetProgressBar theme={theme} audio={audio} isPlaying={isPlaying} />
        <S.BarPlayerBlock>
          <S.BarPlayer>
            <S.Playercontrols>
              <PlayerControls
                isPlaying={isPlaying}
                setPlayBtn={setPlayBtn}
                audio={audio}
                list={[
                  { title: 'prev', svg: `${iconSvg}#icon-prev` },
                  { title: 'play', svg: `${iconSvg}#icon-play` },
                  { title: 'next', svg: `${iconSvg}#icon-next` },
                  { title: 'repeat', svg: `${iconSvg}#icon-repeat` },
                  { title: 'shuffle', svg: `${iconSvg}#icon-shuffle` },
                ]}
              />
            </S.Playercontrols>
            <S.PlayerTrackPlay>
              {IsLoading ? (
                <SceletonTrackPlayer theme={theme} />
              ) : (
                <TrackPlay
                  theme={theme}
                  authorLink={trackData?.name}
                  albumLink={trackData?.author}
                />
              )}
            </S.PlayerTrackPlay>

            <LikeDislike trackData={trackData} />
          </S.BarPlayer>

          <S.BarVolumeBlock>
            <S.VolumeContent>
              <S.VolumeImage>
                <S.VolumeSvg alt="volume">
                  <use
                    xlinkHref={
                      theme === 'darkTheme'
                        ? `${iconSvg}#icon-volume`
                        : `${iconSvg}#icon-volume-light`
                    }
                  />
                </S.VolumeSvg>
              </S.VolumeImage>

              <S.VolumeProgress>
                <S.VolumeProgressLine
                  theme={theme}
                  onChange={ChangeVolume}
                  type="range"
                  name="range"
                />
              </S.VolumeProgress>
            </S.VolumeContent>
          </S.BarVolumeBlock>
        </S.BarPlayerBlock>
      </S.BarContent>
    </S.Bar>
  );
}
export default Player;

function GetProgressBar({ audio, isPlaying, theme }) {
  const [progress, setProgress] = useState(0);
  const trackSrc = useSelector(GetPlayingTrackSelector);
  let timerId;
  const maxTime = audio.duration;
  const { currentTime } = audio;
  const duration = (currentTime / maxTime) * 100;

  useEffect(() => {
    setProgress(0);
  }, [trackSrc]);
  useEffect(() => {
    if (isPlaying) {
      timerId = setInterval(
        () => setProgress((audio.currentTime / audio.duration) * 100),
        100
      );
    }
    return () => clearInterval(timerId);
  });

  return (
    <S.BarPlayerProgress theme={theme}>
      <S.BarPlayerProgressPlayed
        $duration={String(progress)}
      />
    </S.BarPlayerProgress>
  );
}

function PlayerControls({ list, audio, isPlaying, setPlayBtn }) {
  const content = [];

  const playerBtnPlay = useRef(null);

  function handelClickPlayerBtn(e) {
    const { target } = e;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setPlayBtn(!isPlaying);
  }

  useEffect(() => {
    const btnPlay = playerBtnPlay.current;
    btnPlay.addEventListener('click', handelClickPlayerBtn);
  });

  useEffect(() => {
    audio.addEventListener('ended', () => setPlayBtn(!isPlaying));
    return () => {
      audio.removeEventListener('ended', () => setPlayBtn(!isPlaying));
    };
  });

  for (let index = 0; index < list.length; index++) {
    const PlayBtn = forwardRef((props, ref) => {
      const srcPlay = list[index].svg;
      const srcPause = `${iconSvg}#icon-pause`;
      const altPlay = list[index].title;
      return (
        <S.PlayerBtn ref={ref} key={index.toString()}>
          <S.PlayerBtnSvg
            $btn={isPlaying ? srcPause : srcPlay}
            alt={isPlaying ? 'pause' : altPlay}
          >
            <use xlinkHref={isPlaying ? srcPause : srcPlay} />
          </S.PlayerBtnSvg>
        </S.PlayerBtn>
      );
    });
    const defaultBtn = (
      <S.PlayerBtn key={index.toString()}>
        <S.PlayerBtnSvg $btn={list[index].svg} alt={list[index].title}>
          <use xlinkHref={list[index].svg} />
        </S.PlayerBtnSvg>
      </S.PlayerBtn>
    );
    content.push(
      list[index].title === 'play' ? (
        <PlayBtn ref={playerBtnPlay} />
      ) : (
        defaultBtn
      )
    );
  }
  return content;
}
function TrackPlay(props) {
  return (
    <>
      <S.TrackPlayImage theme={props.theme}>
        <S.TrackPlaySvg alt="music">
          <use
            xlinkHref={
              props.theme === 'darkTheme'
                ? `${iconSvg}#icon-note`
                : `${iconSvg}#icon-note-light`
            }
          />
        </S.TrackPlaySvg>
      </S.TrackPlayImage>
      <S.TrackGroup>
        <S.TrackPlayAuthor>
          <S.TrackPlayAuthorLink theme={props.theme} href="http://">
            {props.authorLink}
          </S.TrackPlayAuthorLink>
        </S.TrackPlayAuthor>
        <S.TrackPlayAlbum>
          <S.TrackPlayAlbumLink theme={props.theme} href="http://">
            {props.albumLink}
          </S.TrackPlayAlbumLink>
        </S.TrackPlayAlbum>
      </S.TrackGroup>
    </>
  );
}
