/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable operator-linebreak */
/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { render } from '@testing-library/react';
import React from 'react';
import * as S from './FilterStyle';

const playlistArr = require('../Playlist.json');
// let click = false;
const { useState, useEffect } = React;
function Filters() {
  return <ShowFilterMenu />;
}
export default Filters;
function GetFilterList(list) {
  const filteredList = list.map((titleTrack, index) => (
    <S.FilterTrack key={index.toString()}>{titleTrack}</S.FilterTrack>
  ));
  return <S.filterBlock>{filteredList}</S.filterBlock>;
}

function MenuFilterBig({ list, classPosition }) {
  return (
    <S.filterMenu $classPosition={classPosition}>
      {GetFilterList(list)}
    </S.filterMenu>
  );
}

function ShowFilterMenu() {
  const [selectFilter, setSelectFilter] = useState('');

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
  const getFilteredList = (curButton) => {
    if (curButton === 'button-author') {
      return sortListTrack(filteredListAuthor);
    }
    if (curButton === 'button-genre') {
      return sortListTrack(filteredListGenre);
    }
    return [];
  };
  const onClick = (filter) => {
    setSelectFilter((prevState) => (prevState === filter ? '' : filter));
    render();
  };
  const showMenu =
    selectFilter === 'button-year' ? (
      <MenuFilterYear classPosition={selectFilter} />
    ) : (
      <MenuFilterBig
        list={getFilteredList(selectFilter)}
        classPosition={selectFilter}
      />
    );

  return (
    <>
      <S.CenterblockFilter>
        <S.filterTitle>Искать по:</S.filterTitle>
        <FilterButtons OnClickFunc={onClick} selectFilter={selectFilter} />
      </S.CenterblockFilter>
      <S.filteredMenu>{selectFilter !== '' && showMenu}</S.filteredMenu>
    </>
  );
}
function MenuFilterYear({ classPosition }) {
  return (
    <S.filterMenuYear $classPosition={classPosition}>
      <S.checkYear
        className="checkYear"
        type="radio"
        name="yearRadio"
        id="1"
        checked
        value="new"
      />
      <S.labelRadio htmlFor="1">Более новые</S.labelRadio>

      <S.checkYear
        className="checkYear"
        type="radio"
        name="yearRadio"
        id="2"
        value="old"
      />
      <S.labelRadio htmlFor="2">Более старые</S.labelRadio>
    </S.filterMenuYear>
  );
}

function FilterButtons({ OnClickFunc, selectFilter }) {
  const btnObject = {
    'button-author': 'исполнителю',
    'button-year': 'году выпуска',
    'button-genre': 'жанру',
  };

  let arrKeysBtnObject = [];

  arrKeysBtnObject = Object.keys(btnObject);

  arrKeysBtnObject = arrKeysBtnObject.map((filter, index) => (
    <S.filterButton
      key={index.toString()}
      onClick={() => OnClickFunc(filter)}
      $clickBtn={selectFilter === filter}
    >
      {btnObject[filter]}
    </S.filterButton>
  ));

  return arrKeysBtnObject;
}
