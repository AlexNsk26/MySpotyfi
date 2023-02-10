import styled, { css } from 'styled-components';

const CenterBlockSearchBorderTheme = {
  darkTheme: '#4E4E4E',
  lightTheme: '#D9D9D9',
};

export const CenterBlockSearch = styled.div`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => CenterBlockSearchBorderTheme[theme]};
  margin-bottom: 51px;
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
`;

const ColorTheme = {
  darkTheme: css`
    color: #ffffff;
  `,
  lightTheme: css`
    color: #000000;
  `,
};

export const CenterBlockH2 = styled.h2`
  font-style: normal;
  font-weight: 400;
  font-size: 60px;
  line-height: 64px;
  letter-spacing: -0.8px;
  margin-bottom: 45px;
  letter-spacing: -0.013em;
  font-feature-settings: 'pnum' on, 'lnum' on;
  ${({ theme }) => ColorTheme[theme]};
`;

export const SearchSvg = styled.svg`
  width: 17px;
  height: 17px;
  margin-right: 5px;
  stroke: #ffffff;
  fill: transparent;
`;

export const SearchText = styled.input`
  -webkit-box-flex: 100;
  -ms-flex-positive: 100;
  flex-grow: 100;
  background-color: transparent;
  border: none;
  padding: 13px 10px 14px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  ${({ theme }) => ColorTheme[theme]};
  &::-webkit-input-placeholder {
    background-color: transparent;
    ${({ theme }) => ColorTheme[theme]};
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
`;

export const CenterBlockContent = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
`;

const Sceleton = css`
  background: #313131;
`;

export const SceletonMainTrack = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 10px;
  padding-top: 10px;
  align-items: center;
`;

export const SceletonTrackImage = styled.div`
  width: 51px;
  height: 51px;
  ${Sceleton}
`;

export const SceletonTrackTime = styled.div`
  width: 71px;
  height: 19px;
  margin-left: 75px;
  ${Sceleton}
`;

export const SceletonTrackTitle = styled.div`
  width: 241px;
  height: 19px;
  ${Sceleton}
`;
export const SceletonTrackAuthor = styled.div`
  width: 271px;
  height: 19px;
  ${Sceleton}
`;
export const SceletonTrackAlbum = styled.div`
  width: 305px;
  height: 19px;
  ${Sceleton}
`;
export const SceletonTrackPlayerTitles = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5px;
  justify-content: center;
`;
export const SceletonTrackPlayerTitle = styled.div`
  width: 59px;
  height: 15px;
  margin-top: 5px;
  ${Sceleton}
`;
const SceletonPlaylistImgCss = css`
  width: 250px;
  height: 150px;
`;
export const SceletonPlaylistImg = styled.div`
  ${SceletonPlaylistImgCss}
  ${Sceleton}
`;
export const SceletonTrackPlayer = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

export const MainSidebar = styled.div`
  max-width: 418px;
  padding: 20px 90px 20px 78px;
`;

export const SidebarPersonal = styled.div`
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
  justify-content: flex-end;
  padding: 12px 0 15px 0;
`;

export const SidebarPersonalName = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  margin-right: 16px;
`;

export const SidebarAvatar = styled.div`
  width: 43px;
  height: 43px;
  background-color: #313131;
  border-radius: 50%;
`;

export const SidebarList = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`;

export const SidebarBlock = styled.div`
  height: 100%;
  padding: 240px 0 0 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
`;

export const SidebarItemSceleton = styled.div`
  ${SceletonPlaylistImgCss}
  ${Sceleton}
  &:not(:last-child) {
    margin-bottom: 30px;
  }
`;

export const SidebarItem = styled.div`
  ${SceletonPlaylistImgCss}
  &:not(:last-child) {
    margin-bottom: 30px;
  }
`;

export const SidebarLink = styled.a`
  width: 100%;
  height: 100%;
`;

export const SidebarImg = styled.img`
  width: 100%;
  height: auto;
`;

export const Error404 = styled.p`
  display: block;
  font-style: normal;
  font-weight: 400;
  font-size: 46px;
  line-height: 24px;
  color: #fff;
  margin-top: 25px;
`;

export const CenterBlock = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
