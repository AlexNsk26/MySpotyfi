/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

const playlistArr = require('../Playlist.json');

const { useState } = React;
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
function GetFilterList() {
  // const content = [];
  let filteredList = playlistArr.map((track) => track.title);
  filteredList = filteredList.map((titleTrack) => <p>{titleTrack}</p>);
  return filteredList;
}

function MenuFilterBig(props) {
  return <div className="filterMenu">{GetFilterList()}</div>;
}

function FilterButtons(props) {
  const [click = false, setClicks] = useState(0);
  const handleClick = () => setClicks(!click);
  const { btnObject } = props;

  let arrKeysBtnObject = [];
  arrKeysBtnObject = Object.keys(btnObject);

  arrKeysBtnObject = arrKeysBtnObject.map((button, index) => (
    <div
      key={index.toString()}
      onClick={handleClick}
      className={`filter__button ${button} _btn-text`}
    >
      {btnObject[button]}
    </div>
  ));
  /*   const content = [];
  for (let index = 0; index < arrKeysBtnObject.length; index++) {
    content.push(
      <div
        key={index.toString()}
        onClick={handleClick}
        className={`filter__button ${arrKeysBtnObject[index]} _btn-text`}
      >
        {btnObject[arrKeysBtnObject[index]]}
      </div>
    );
  } */
  return arrKeysBtnObject;
}
