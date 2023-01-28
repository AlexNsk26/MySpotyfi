import * as S from './OtherStyle';

export function SceletonTrackMain() {
  return (
    <S.CenterBlockContent>
      <ArrTracksSceleton listLength={9} />
    </S.CenterBlockContent>
  );
}
const ArrTracksSceleton = (props) => {
  const content = [];
  for (let index = 0; index < props.listLength; index++) {
    content.push(
      <S.SceletonMainTrack key={index.toString()}>
        <SceletonTrackImage />
        <S.SceletonTrackTitle />
        <S.SceletonTrackAuthor />
        <S.SceletonTrackAlbum />
        <S.SceletonTrackTime />
      </S.SceletonMainTrack>
    );
  }
  return content;
};

export function SceletonTrackPlayer() {
  return (
    <S.SceletonTrackPlayer>
      <SceletonTrackImage />
      <S.SceletonTrackPlayerTitles>
        <S.SceletonTrackPlayerTitle />
        <S.SceletonTrackPlayerTitle />
      </S.SceletonTrackPlayerTitles>
    </S.SceletonTrackPlayer>
  );
}

export function SceletonPlaylistImg() {
  return <S.SceletonPlaylistImg />;
}

function SceletonTrackImage() {
  return <S.SceletonTrackImage />;
}

export function SidebarSceleton() {
  return (
    <S.MainSidebar>
      <S.SidebarPersonal>
        <S.SidebarPersonalName>Sergey.Ivanov</S.SidebarPersonalName>
        <S.SidebarAvatar />
      </S.SidebarPersonal>
      <S.SidebarBlock>
        <S.SidebarList>
          <SidebarListSceleton />
        </S.SidebarList>
      </S.SidebarBlock>
    </S.MainSidebar>
  );
}

function SidebarListSceleton() {
  const list = [];
  for (let index = 0; index < 3; index++) {
    list.push(<S.SidebarItemSceleton key={index.toString()} />);
  }
  return list;
}
