/* eslint-disable no-unused-vars */
import React, { useContext, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
import { FetchPlayingTrack } from '../../store/actions/creators/creators';
import { GetFilerTrackSelector } from '../../store/selectors/selectors';

// const playlistArr = require('../../components/Playlist.json');

function Main({ loginName }) {
  // const filters = useSelector(GetFilerTrackSelector);
  const [idTrackCurrent, setIdTrackCurrent] = useState({ id: '', skip: true });
  const { data, error, isLoading } = useGetAllTrackQuery();
  const { theme } = useContext(ContextTheme);
  const trackQueryData = useGetTrackByIdQuery(idTrackCurrent, {
    skip: idTrackCurrent.skip,
  });

  const dispatch = useDispatch();

  const audioSrc =
    trackQueryData.data && trackQueryData.data.track_file
      ? trackQueryData.data.track_file
      : '';

  useEffect(() => {
    dispatch(FetchPlayingTrack(audioSrc));
  }, [trackQueryData.data]);

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
        {idTrackCurrent?.id !== '' && (
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
