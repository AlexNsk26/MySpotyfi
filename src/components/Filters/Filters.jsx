/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable operator-linebreak */
/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

const playlistArr = require('../Playlist.json');
// let click = false;
const { useState, useEffect } = React;
function Filters() {
  return (
    <div className="centerblock__filter filter">
      <div className="filter__title">Искать по:</div>
      <FilterButtons />
    </div>
  );
}
export default Filters;
function GetFilterList(list) {
  const filteredList = list.map((titleTrack, index) => (
    <p key={index.toString()} className="filterTrack">
      {titleTrack}
    </p>
  ));
  return <div className="filterBlock">{filteredList}</div>;
}

function MenuFilterBig(props) {
  return <div className="filterMenu">{GetFilterList(props.list)}</div>;
}

function MenuFilterYear() {
  return (
    <div className="filterMenuYear">
      <input
        className="checkYear"
        type="radio"
        name="yearRadio"
        id="1"
        checked
        value="new"
      />
      <label className="labelRadio" htmlFor="1">
        Более новые
      </label>
      <input
        className="checkYear"
        type="radio"
        name="yearRadio"
        id="2"
        value="old"
      />
      <label className="labelRadio" htmlFor="2">
        Более старые
      </label>
    </div>
  );
}
function FilterButtons() {
  const [selectFilter, setSelectFilter] = useState('');
  const btnClickClass = '_btn-text_click';

  const btnObject = {
    'button-author': 'исполнителю',
    'button-year': 'году выпуска',
    'button-genre': 'жанру',
  };

  let arrKeysBtnObject = [];
  const filteredListAuthor = playlistArr.map((track) => track.author);
  const filteredListGenre = playlistArr.map((track) => track.genre);
  const sortListTrack = (listTrack) => {
    const filteredListGroup = [];
    listTrack.forEach((track) => {
      if (!filteredListGroup.includes(track)) {
        filteredListGroup.push(track);
      }
    });
    return filteredListGroup;
  };
  const onClick = (filter) => {
    if (selectFilter === filter) {
      setSelectFilter('');
    } else {
      setSelectFilter(filter);
    }

    /* setClicks(!click); */
  };
  arrKeysBtnObject = Object.keys(btnObject);
  const getFilteredList = (curButton) => {
    if (curButton === 'button-author') {
      return sortListTrack(filteredListAuthor);
    }
    if (curButton === 'button-genre') {
      return sortListTrack(filteredListGenre);
    }
    return [];
  };

  arrKeysBtnObject = arrKeysBtnObject.map((filter, index) => {
    const showMenu =
      filter === 'button-year' ? (
        <MenuFilterYear />
      ) : (
        <MenuFilterBig list={getFilteredList(filter)} />
      );
    return (
      <>
        <div
          key={index.toString()}
          onClick={() => onClick(filter)}
          className={`filter__button ${filter} _btn-text${
            selectFilter === filter ? ` ${btnClickClass}` : ''
          }`}
        >
          {btnObject[filter]}
        </div>
        {selectFilter === filter && showMenu}
      </>
    );
  });

  return arrKeysBtnObject;
}
