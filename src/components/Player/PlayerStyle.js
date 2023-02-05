import styled, { css } from 'styled-components';

export const Bar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(28, 28, 28, 0.5);
`;

export const BarContent = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
`;

export const BarPlayerProgress = styled.div`
  width: 100%;
  height: 5px;
  background: #2e2e2e;
`;

export const BarPlayerBlock = styled.div`
  height: 73px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
`;

export const BarPlayer = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
`;

export const Playercontrols = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  padding: 0 27px 0 31px;
`;

export const PlayerTrackPlay = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
`;

const DislikeAdd = css`
  margin-left: 28.5px;
`;

export const TrackPlayLikeDis = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-left: 26%;
`;

const LikeDisSvg = {
  like: css`
    width: 14px;
    height: 12px;
  `,
  dislike: css`
    width: 14.34px;
    height: 13px;
  `,
};

export const TrackPlayLikeDisSvg = styled.svg`
  fill: transparent;
  stroke: #696969;
  cursor: pointer;
  ${({ $like }) => LikeDisSvg[$like]}
`;

export const TrackPlayLikeDisIcon = styled.div`
  padding: 5px;
  ${({ $dislike }) => ($dislike === 'dislike' ? DislikeAdd : css``)}
  &:hover ${TrackPlayLikeDisSvg} {
    fill: transparent;
    stroke: #acacac;
    cursor: pointer;
  }
  &:active ${TrackPlayLikeDisSvg} {
    fill: transparent;
    stroke: #ffffff;
    cursor: pointer;
  }
`;

/*   ._btn-icon:active .track-play__like-svg,
._btn-icon:active .track-play__dislike-svg {
  fill: #696969;
  stroke: #ffffff;
  cursor: pointer;
} */

export const BarVolumeBlock = styled.div`
  width: auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 0 92px 0 0;
`;

export const VolumeContent = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: end;
`;

export const VolumeImage = styled.div`
  width: 13px;
  height: 18px;
  margin-right: 17px;
`;

export const VolumeSvg = styled.svg`
  width: 13px;
  height: 18px;
  fill: transparent;
`;

export const VolumeProgress = styled.div`
  width: 109px;
  cursor: pointer;
`;

export const VolumeProgressLine = styled.input`
  width: 109px;
  cursor: pointer;
  &::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    width: 26px;
    height: 0px;
    border: 2px solid #ffffff;
    margin-top: -14px;
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    box-sizing: border-box;
    width: 12px;
    height: 12px;
    background: #1a1a1a;
    border: 2px solid #ffffff;
    border-radius: 50%;
    margin-top: -7px;
  }
`;

const PlayerBtnPlaySvg = (button) => {
  const nameBtn = button.split('-');
  if (nameBtn.includes('play')) {
    return css`
      width: 22px;
      height: 20px;
      fill: #d9d9d9;
    `;
  }
  return css`
    width: 15px;
    height: 14px;
  `;
};

export const PlayerBtn = styled.div`
  padding: 5px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding-right: 35px;
`;

export const PlayerBtnSvg = styled.svg`
  ${({ $btn }) => PlayerBtnPlaySvg($btn)}
`;

export const TrackPlayImage = styled.div`
  width: 51px;
  height: 51px;
  background-color: #313131;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-right: 12px;
  -ms-grid-row: 1;
  -ms-grid-row-span: 2;
  -ms-grid-column: 1;
  grid-area: image;
`;

export const TrackGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TrackPlayAuthor = styled.div`
  -ms-grid-row: 1;
  -ms-grid-column: 2;
  grid-area: author;
  min-width: 49px;
`;

export const TrackPlaySvg = styled.svg`
  width: 18px;
  height: 17px;
  fill: transparent;
  stroke: #4e4e4e;
`;

export const TrackPlayAuthorLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  white-space: nowrap;
`;

export const TrackPlayAlbum = styled.div`
  -ms-grid-row: 2;
  -ms-grid-column: 2;
  grid-area: album;
  min-width: 49px;
`;

export const TrackPlayAlbumLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 24px;
  color: #ffffff;
`;
