/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-lone-blocks */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-expressions */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-unused-vars */
import React, { useContext, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Navigate } from 'react-router-dom';
import mapSort from 'mapsort';
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
import { FetchPlayingTrack, FetchUserLogOut } from '../../store/actions/creators/creators';
import {
  GetFilerTrackSelector,
  yearFilterSelector,
} from '../../store/selectors/selectors';

function convertResponseByFilters(response, filters) {
  const yearFilter = useSelector(yearFilterSelector);
  const sortListTrack = (listTrack) => {
    const filteredListGroup = [];
    listTrack.forEach((track) => {
      if (!filteredListGroup.includes(track)) {
        filteredListGroup.push(track);
      }
    });
    return filteredListGroup;
  };
  let responseFiltered = response;
  if (response && Object.entries(filters).length) {
    for (const filterType in filters) {
      switch (filterType) {
        case 'button-author': {
          const filteredListAuthor = sortListTrack(
            response.map((track) => track.author)
          );
          const authorFilterItems = filteredListAuthor.filter(
            (filterItem, index) => filters[filterType].includes(index)
          );
          responseFiltered = response.filter((track) =>
            authorFilterItems.includes(track.author)
          );
          break;
        }
        case 'button-genre': {
          const filteredListGenre = sortListTrack(
            response.map((track) => track.genre)
          );
          const genreFilterItems = filteredListGenre.filter(
            (filterItem, index) => filters[filterType].includes(index)
          );
          responseFiltered = responseFiltered.filter((track) =>
            genreFilterItems.includes(track.genre)
          );
          break;
        }
        case 'button-year': {
          if (yearFilter === 'old') {
            responseFiltered = mapSort(
              responseFiltered,
              (tarck) => new Date(tarck.release_date),
              (a, b) => b - a
            );
            break;
          }
          responseFiltered = mapSort(
            responseFiltered,
            (tarck) => new Date(tarck.release_date),
            (a, b) => a - b
          );
          break;
        }
        default:
          break;
      }
    }
    return responseFiltered;
  }

  return response;
}

function Main({ loginName }) {
  const filters = useSelector(GetFilerTrackSelector);
  const navigate = useNavigate();
  const [idTrackCurrent, setIdTrackCurrent] = useState({ id: '', skip: true });
  const { data, error, isLoading } = useGetAllTrackQuery();
  const { theme } = useContext(ContextTheme);
  const trackQueryData = useGetTrackByIdQuery(idTrackCurrent, {
    skip: idTrackCurrent.skip,
  });
  const dataResponse = convertResponseByFilters(data, filters);
  const dispatch = useDispatch();

  const audioSrc =
    trackQueryData.data && trackQueryData.data.track_file
      ? trackQueryData.data.track_file
      : '';
  const errorsRedirect = error?.status === 401;
  if (errorsRedirect) {
    localStorage.removeItem('MySpotyfyLoginData');
    dispatch(FetchUserLogOut());
    navigate('/login');
  }
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
              <Playlist
                setIdTrack={setIdTrackCurrent}
                allTracksData={dataResponse}
              />
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
