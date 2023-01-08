import MainNavigation from './components/Header/navigation';
import Filters from './components/Filters/Filters';
import CenterBlock, { TrackHeader } from './components/Others/CentreBlock';
import { PlaylistTitle, Playlist } from './components/Playlist/PlaylistApp';
import Sidebar from './components/Sidebar/Slidebar';
import Player from './components/Player/Player';
import Footer from './components/Others/Footer';

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
