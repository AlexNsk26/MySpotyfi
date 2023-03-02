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
import {
  useGetAllTrackQuery,
  useGetTrackByIdQuery,
} from '../services/queryApi';

const playlistArr = require('../../components/Playlist.json');

const { useState, useEffect } = React;

function Main({ loginName }) {
  const [idTrackCurrent, setIdTrackCurrent] = useState();
  const { data, error, isLoading } = useGetAllTrackQuery();
  const { theme } = useContext(ContextTheme);
  let trackQueryData;

  if (idTrackCurrent) {
    trackQueryData = useGetTrackByIdQuery(idTrackCurrent);
  }
  /*
  useEffect(() => {
    if (idTrackCurrent) {
      trackQueryData = useGetTrackByIdQuery(idTrackCurrent);
    }
  }, [idTrackCurrent]); */

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
              <Playlist setIdTrack={setIdTrackCurrent} allTracksData={data} />
            )}
          </GS.MainCenterblock>
          {isLoading ? (
            <SidebarSceleton loginName={loginName} theme={theme} />
          ) : (
            <Sidebar loginName={loginName} />
          )}
        </GS.Main>
        {idTrackCurrent && (
          <Player
            trackData={trackQueryData?.data}
            IsLoading={isLoading || trackQueryData?.isLoading}
          />
        )}
      </GS.Container>
      <Footer />
    </GS.Wrapper>
  );
}

export default Main;
