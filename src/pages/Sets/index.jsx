/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as GS from '../../GlobalStyle';
import {
  useGetTrackByIdQuery,
  useGetSelectionByIdQuery,
  useGetAllFavTracksQuery,
} from '../services/queryApi';
import { FetchPlayingTrack } from '../../store/actions/creators/creators';
import MainNavigation from '../../components/Header/navigation';
import CenterBlock, { TrackHeader } from '../../components/Others/CentreBlock';
import Sidebar from '../../components/Sidebar/Slidebar';
import { PlaylistTitle, Playlist } from '../../components/Playlist/PlaylistApp';
import Player from '../../components/Player/Player';
import Footer from '../../components/Others/Footer';
import { SceletonTrackMain } from '../../components/Others/Sceleton';
import { ContextTheme } from '../../components/Others/Context';

function Sets({ loginName }) {
  const { useState, useEffect } = React;
  const { theme } = useContext(ContextTheme);
  const { typeSet: idSet } = useParams();
  const [idTrackCurrent, setIdTrackCurrent] = useState({ id: '', skip: true });
  const trackQueryData = useGetTrackByIdQuery(idTrackCurrent, {
    skip: idTrackCurrent.skip,
  });
  const skipSets = idSet === '4';
  const {
    data: dataSelectionResponse,
    error,
    isLoading: IsSelectionLoading,
  } = useGetSelectionByIdQuery({ idSet }, { skip: skipSets });
  const {
    data: dataFavResponse,
    error: errorFav,
    isLoading: IsFavLoading,
  } = useGetAllFavTracksQuery();
  const dispatch = useDispatch();
  const header = dataSelectionResponse?.name ?? 'Мой треклист';
  const audioSrc =
    trackQueryData.data && trackQueryData.data.track_file
      ? trackQueryData.data.track_file
      : '';
  const IsLoading = IsSelectionLoading || IsFavLoading;
  const dataResponse = dataSelectionResponse?.items ?? dataFavResponse;
  useEffect(() => {
    dispatch(FetchPlayingTrack(audioSrc));
  }, [trackQueryData.data]);

  return (
    <GS.Wrapper theme={theme}>
      <GS.Container>
        <GS.Main>
          <MainNavigation />
          <GS.MainCenterblock>
            <CenterBlock />
            <TrackHeader header={header} />
            <PlaylistTitle />
            {IsLoading ? (
              <SceletonTrackMain />
            ) : (
              <Playlist
                setIdTrack={setIdTrackCurrent}
                allTracksData={dataResponse}
              />
            )}
          </GS.MainCenterblock>
          <Sidebar forSets loginName={loginName} />
        </GS.Main>
        {idTrackCurrent?.id !== '' && (
          <Player
            trackData={trackQueryData?.data ?? []}
            IsLoading={IsLoading || trackQueryData?.isLoading}
          />
        )}
      </GS.Container>
      <Footer />
    </GS.Wrapper>
  );
}

export default Sets;
