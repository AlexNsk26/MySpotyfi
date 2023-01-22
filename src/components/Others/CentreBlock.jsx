function CenterBlock() {
  return (
    <div className="centerblock__search search">
      <CenterBlockSearchLogo />
      <CenterBlockSearchInput />
    </div>
  );
}
export default CenterBlock;
export function TrackHeader() {
  return <h2 className="centerblock__h2">Треки</h2>;
}
function CenterBlockSearchLogo() {
  return (
    <svg className="search__svg">
      <use xlinkHref="../mainIcons/icon/sprite.svg#icon-search" />
    </svg>
  );
}

function CenterBlockSearchInput() {
  return (
    <input
      className="search__text"
      type="search"
      placeholder="Поиск"
      name="search"
    />
  );
}
