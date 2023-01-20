/* eslint-disable no-unused-vars */
import React from 'react';
import MainNavigation from './components/Header/navigation';
import Filters from './components/Filters/Filters';
import CenterBlock, { TrackHeader } from './components/Others/CentreBlock';
import { PlaylistTitle, Playlist } from './components/Playlist/PlaylistApp';
import Sidebar from './components/Sidebar/Slidebar';
import Player from './components/Player/Player';
import Footer from './components/Others/Footer';
import {
  SceletonTrackMain,
  SidebarSceleton,
  SceletonTrackPlayer,
} from './components/Others/Sceleton';

function App() {
  const { useState, useEffect } = React;
  const [IsLoading, SetIsLoading] = useState(true);
  let idTimeOut;
  if (IsLoading) {
    idTimeOut = setTimeout(() => {
      SetIsLoading(!IsLoading);
    }, 5000);
  }

  useEffect(() => () => {
    if (!IsLoading) {
      clearTimeout(idTimeOut);
    }
  });
  return (
    <div className="wrapper">
      <div className="container">
        <main className="main">
          <MainNavigation />
          <CenterBlock />
          <TrackHeader />
          <Filters />
          <PlaylistTitle />
          {IsLoading ? <SceletonTrackMain /> : <Playlist />}
          {IsLoading ? <SidebarSceleton /> : <Sidebar />}
        </main>
        <Player IsLoading={IsLoading} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
