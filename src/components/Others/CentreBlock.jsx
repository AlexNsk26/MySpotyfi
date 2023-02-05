import * as S from './OtherStyle';
import iconSvg from '../mainIcons/sprite.svg';

function CenterBlock() {
  return (
    <S.CenterBlockSearch>
      <CenterBlockSearchLogo />
      <CenterBlockSearchInput />
    </S.CenterBlockSearch>
  );
}
export default CenterBlock;
export function TrackHeader({ header }) {
  return <S.CenterBlockH2>{header}</S.CenterBlockH2>;
}
function CenterBlockSearchLogo() {
  return (
    <S.SearchSvg>
      <use xlinkHref={`${iconSvg}#icon-search`} />
    </S.SearchSvg>
  );
}

function CenterBlockSearchInput() {
  return <S.SearchText type="search" placeholder="Поиск" name="search" />;
}
