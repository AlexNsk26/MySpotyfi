function Sidebar() {
  return (
    <div className="main__sidebar sidebar">
      <div className="sidebar__personal">
        <p className="sidebar__personal-name">Sergey.Ivanov</p>
        <div className="sidebar__avatar" />
      </div>
      <div className="sidebar__block">
        <div className="sidebar__list">
          <SidebarList
            list={[
              './img/playlist01.png',
              './img/playlist02.png',
              './img/playlist03.png',
            ]}
          />
        </div>
      </div>
    </div>
  );
}
export default Sidebar;
function SidebarList(props) {
  const content = [];
  const { list } = props;

  for (let index = 0; index < list.length; index++) {
    content.push(
      <div key={index.toString()} className="sidebar__item">
        <a className="sidebar__link" href="http://">
          <img
            className="sidebar__img"
            src={list[index]}
            alt="day's playlist"
          />
        </a>
      </div>
    );
  }
  return content;
}
