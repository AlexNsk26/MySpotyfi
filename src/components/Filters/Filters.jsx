function Filters() {
  return (
    <div className="centerblock__filter filter">
      <div className="filter__title">Искать по:</div>
      <FilterButtons
        btnObject={{
          'button-author': 'исполнителю',
          'button-year': 'году выпуска',
          'button-genre': 'жанру',
        }}
      />
    </div>
  );
}
export default Filters;
function FilterButtons(props) {
  const { btnObject } = props;
  const arrKeysBtnObject = Object.keys(btnObject);
  const content = [];
  for (let index = 0; index < arrKeysBtnObject.length; index++) {
    content.push(
      <div
        key={index.toString()}
        className={`filter__button ${arrKeysBtnObject[index]} _btn-text`}
      >
        {btnObject[arrKeysBtnObject[index]]}
      </div>
    );
  }
  return content;
}
