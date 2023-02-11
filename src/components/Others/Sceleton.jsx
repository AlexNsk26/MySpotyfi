import { useContext } from 'react';
import { ContextTheme } from './Context';
// import Sidebar from '../Sidebar/Slidebar';
import * as S from './OtherStyle';

export function SceletonTrackMain() {
  const { theme } = useContext(ContextTheme);
  return (
    <S.CenterBlockContent>
      <ArrTracksSceleton theme={theme} listLength={9} />
    </S.CenterBlockContent>
  );
}
const ArrTracksSceleton = ({ listLength, theme }) => {
  const content = [];
  for (let index = 0; index < listLength; index++) {
    content.push(
      <S.SceletonMainTrack key={index.toString()}>
        <SceletonTrackImage theme={theme} />
        <S.SceletonTrackTitle theme={theme} />
        <S.SceletonTrackAuthor theme={theme} />
        <S.SceletonTrackAlbum theme={theme} />
        <S.SceletonTrackTime theme={theme} />
      </S.SceletonMainTrack>
    );
  }
  return content;
};

export function SceletonTrackPlayer({ theme }) {
  return (
    <S.SceletonTrackPlayer theme={theme}>
      <SceletonTrackImage theme={theme} />
      <S.SceletonTrackPlayerTitles theme={theme}>
        <S.SceletonTrackPlayerTitle theme={theme} />
        <S.SceletonTrackPlayerTitle theme={theme} />
      </S.SceletonTrackPlayerTitles>
    </S.SceletonTrackPlayer>
  );
}

export function SceletonPlaylistImg() {
  return <S.SceletonPlaylistImg />;
}

function SceletonTrackImage({ theme }) {
  return <S.SceletonTrackImage theme={theme} />;
}

export function SidebarSceleton({ theme, loginName }) {
  return (
    <S.MainSidebar theme={theme}>
      <S.SidebarPersonal theme={theme}>
        <S.SidebarPersonalName>{loginName}</S.SidebarPersonalName>
        <S.SidebarAvatar theme={theme} />
      </S.SidebarPersonal>
      <S.SidebarBlock theme={theme}>
        <S.SidebarList>
          <SidebarListSceleton theme={theme} />
        </S.SidebarList>
      </S.SidebarBlock>
    </S.MainSidebar>
  );
}

function SidebarListSceleton({ theme }) {
  const list = [];
  for (let index = 0; index < 3; index++) {
    list.push(<S.SidebarItemSceleton theme={theme} key={index.toString()} />);
  }
  return list;
}
