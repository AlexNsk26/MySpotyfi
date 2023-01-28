export function SceletonTrackMain() {
  return (
    <div className="centerblock__content">
      <ArrTracksSceleton listLength={9} />
    </div>
  );
}
const ArrTracksSceleton = (props) => {
  const content = [];
  for (let index = 0; index < props.listLength; index++) {
    content.push(
      <div key={index.toString()} className="sceleton_mainTrack">
        <SceletonTrackImage />
        <div className="Sceleton sceleton_trackTitle" />
        <div className="Sceleton sceleton_trackAuthor" />
        <div className="Sceleton sceleton_trackAlbum" />
      </div>
    );
  }
  return content;
};

export function SceletonTrackPlayer() {
  return (
    <div className="sceleton_TrackPlayer">
      <SceletonTrackImage />
      <div className="sceleton_trackPlayerTitles">
        <div className="Sceleton sceleton_trackPlayerTitle" />
        <div className="Sceleton sceleton_trackPlayerTitle" />
      </div>
    </div>
  );
}

export function SceletonPlaylistImg() {
  return <div className="Sceleton sceleton_playlistImg" />;
}

function SceletonTrackImage() {
  return <div className="Sceleton sceleton_trackImage" />;
}

export function SidebarSceleton() {
  return (
    <div className="main__sidebar sidebar">
      <div className="sidebar__personal">
        <p className="sidebar__personal-name">Sergey.Ivanov</p>
        <div className="sidebar__avatar" />
      </div>
      <div className="sidebar__block">
        <div className="sidebar__list">
          <SidebarListSceleton />
        </div>
      </div>
    </div>
  );
}

function SidebarListSceleton() {
  const list = [];
  for (let index = 0; index < 3; index++) {
    list.push(
      <div
        key={index.toString()}
        className="Sceleton sidebar__item sceleton_playlistImg"
      />
    );
  }

  return list;
}
