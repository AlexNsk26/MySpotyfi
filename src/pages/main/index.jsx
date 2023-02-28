/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { ContextTheme } from '../../components/Others/Context';
import * as GS from '../../GlobalStyle';
import MainNavigation from '../../components/Header/navigation';
import Filters from '../../components/Filters/Filters';
import CenterBlock, { TrackHeader } from '../../components/Others/CentreBlock';
import { PlaylistTitle, Playlist } from '../../components/Playlist/PlaylistApp';
import Sidebar from '../../components/Sidebar/Slidebar';
import Player from '../../components/Player/Player';
import Footer from '../../components/Others/Footer';
import {
  SceletonTrackMain,
  SidebarSceleton,
} from '../../components/Others/Sceleton';
import { useGetAllTrackQuery } from '../services/queryApi';

const playlistArr = require('../../components/Playlist.json');

function Main({ loginName }) {
  const { useState, useEffect } = React;
  const { data, error, isLoading } = useGetAllTrackQuery();
  const { theme } = useContext(ContextTheme);
  console.log(data);
  console.log(error);
  console.log(isLoading);
  // const [IsLoading, SetIsLoading] = useState(true);
  /* let idTimeOut;
  if (IsLoading) {
    idTimeOut = setTimeout(() => {
      SetIsLoading(!IsLoading);
    }, 5000);
  }

  useEffect(() => () => {
    if (!IsLoading) {
      clearTimeout(idTimeOut);
    }
  }); */
  return (
    <GS.Wrapper theme={theme}>
      <GS.Container theme={theme}>
        <GS.Main>
          <MainNavigation />
          <GS.MainCenterblock>
            <CenterBlock />
            <TrackHeader theme={theme} header="Треки" />
            <Filters />
            <PlaylistTitle />
            {isLoading || isLoading === undefined ? (
              <SceletonTrackMain />
            ) : (
              <Playlist allTracksData={data} />
            )}
          </GS.MainCenterblock>
          {isLoading ? (
            <SidebarSceleton loginName={loginName} theme={theme} />
          ) : (
            <Sidebar loginName={loginName} />
          )}
        </GS.Main>
        <Player IsLoading={isLoading} />
      </GS.Container>
      <Footer />
    </GS.Wrapper>
  );
}

export default Main;
