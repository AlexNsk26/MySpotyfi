import { Link } from 'react-router-dom';
import playlist01 from './img/playlist01.png';
import playlist02 from './img/playlist02.png';
import playlist03 from './img/playlist03.png';
import * as S from '../Others/OtherStyle';

function Sidebar({ loginName, forSets = false }) {
  return (
    <S.MainSidebar>
      <S.SidebarPersonal>
        <S.SidebarPersonalName>{loginName}</S.SidebarPersonalName>
        <S.SidebarAvatar />
      </S.SidebarPersonal>
      {!forSets && (
        <S.SidebarBlock>
          <S.SidebarList>
            <SidebarList
              list={[
                { img: playlist01, typeSet: 'dayPlaylist' },
                { img: playlist02, typeSet: 'thousandHits' },
                { img: playlist03, typeSet: 'IndyPower' },
              ]}
            />
          </S.SidebarList>
        </S.SidebarBlock>
      )}
    </S.MainSidebar>
  );
}
export default Sidebar;
function SidebarList(props) {
  let { list } = props;

  list = list.map((item, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <S.SidebarItem key={index.toString()}>
      <Link to={`/sets/${item.typeSet}`}>
        <S.SidebarImg src={item.img} alt="day's playlist" />
      </Link>
    </S.SidebarItem>
  ));

  return list;
}
