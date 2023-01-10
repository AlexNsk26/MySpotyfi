import playlist01 from './img/playlist01.png';
import playlist02 from './img/playlist02.png';
import playlist03 from './img/playlist03.png';

function Sidebar() {
  return (
    <div className="main__sidebar sidebar">
      <div className="sidebar__personal">
        <p className="sidebar__personal-name">Sergey.Ivanov</p>
        <div className="sidebar__avatar" />
      </div>
      <div className="sidebar__block">
        <div className="sidebar__list">
          <SidebarList list={[playlist01, playlist02, playlist03]} />
        </div>
      </div>
    </div>
  );
}
export default Sidebar;
function SidebarList(props) {
  let { list } = props;

  list = list.map((picSrc, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <div key={index.toString()} className="sidebar__item">
      <a className="sidebar__link" href="http://">
        <img className="sidebar__img" src={picSrc} alt="day's playlist" />
      </a>
    </div>
  ));

  return list;
}
