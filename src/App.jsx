/* eslint-disable no-plusplus */
/* eslint-disable comma-dangle */
// import logoPNG from '../public/logo.png';
// import '../css/style.css';
// import React from 'react';
import MainNavigation from './Header/navigation';
import Filters from './Filters/Filters';
import { PlaylistTitle, Playlist } from './Playlist/Playlist';
import Sidebar from './Sidebar/Slidebar';
import Player from './Player/Player';
import CenterBlock, { TrackHeader } from './Others/CentreBlock';
import Footer from './Others/Footer';

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <main className="main">
          <MainNavigation items={['Главное', 'Мой плейлист', 'Войти']} />
          <CenterBlock />
          <TrackHeader />
          <Filters />
          <PlaylistTitle />
          <Playlist />
          <Sidebar />
        </main>
        <Player />
      </div>
      <Footer />
    </div>
  );
}

export default App;
