/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import * as GS from '../../GlobalStyle';
import MainNavigation from '../../components/Header/navigation';
import CenterBlock, { TrackHeader } from '../../components/Others/CentreBlock';
import Sidebar from '../../components/Sidebar/Slidebar';
import { PlaylistTitle, Playlist } from '../../components/Playlist/PlaylistApp';
import Player from '../../components/Player/Player';
import Footer from '../../components/Others/Footer';
import { SceletonTrackMain } from '../../components/Others/Sceleton';
import { ContextTheme } from '../../components/Others/Context';

const headersSets = {
  dayPlaylist: 'Плейлист дня',
  thousandHits: '100 Танцевальных хитов',
  IndyPower: 'Инди-заряд',
};

const dayPlaylist = require('../../components/Playlist_DayHits.json');
const thousandHits = require('../../components/Playlist_100danceHits.json');
const IndyPower = require('../../components/Playlist_indyPower.json');
const playlistArr = require('../../components/Playlist.json');

const myPlaylist = playlistArr.filter((track) => Number(track.fav) === 1);

const playlistSets = {
  dayPlaylist,
  thousandHits,
  IndyPower,
  myPlaylist,
};

function Sets({ loginName }) {
  const { useState, useEffect } = React;
  const { theme } = useContext(ContextTheme);
  const [IsLoading, SetIsLoading] = useState(true);
  const { typeSet } = useParams();
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
    <GS.Wrapper theme={theme}>
      <GS.Container>
        <GS.Main>
          <MainNavigation />
          <GS.MainCenterblock>
            <CenterBlock />
            <TrackHeader header={headersSets[typeSet]} />
            <PlaylistTitle />
            {IsLoading ? (
              <SceletonTrackMain />
            ) : (
              <Playlist playlistArr={playlistSets[typeSet]} />
            )}
          </GS.MainCenterblock>
          <Sidebar forSets loginName={loginName} />
        </GS.Main>
        <Player IsLoading={IsLoading} />
      </GS.Container>
      <Footer />
    </GS.Wrapper>
  );
}

export default Sets;
