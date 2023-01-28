import playlist01 from './img/playlist01.png';
import playlist02 from './img/playlist02.png';
import playlist03 from './img/playlist03.png';
import * as S from '../Others/OtherStyle';

function Sidebar() {
  return (
    <S.MainSidebar>
      <S.SidebarPersonal>
        <S.SidebarPersonalName>Sergey.Ivanov</S.SidebarPersonalName>
        <S.SidebarAvatar />
      </S.SidebarPersonal>
      <S.SidebarBlock>
        <S.SidebarList>
          <SidebarList list={[playlist01, playlist02, playlist03]} />
        </S.SidebarList>
      </S.SidebarBlock>
    </S.MainSidebar>
  );
}
export default Sidebar;
function SidebarList(props) {
  let { list } = props;

  list = list.map((picSrc, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <S.SidebarItem key={index.toString()}>
      <S.SidebarLink>
        <S.SidebarImg src={picSrc} alt="day's playlist" />
      </S.SidebarLink>
    </S.SidebarItem>
  ));

  return list;
}
