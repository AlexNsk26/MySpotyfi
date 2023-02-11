/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable operator-linebreak */
/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { render } from '@testing-library/react';
import React, { useContext } from 'react';
import * as S from './FilterStyle';
import { ContextTheme } from '../Others/Context';

const playlistArr = require('../Playlist.json');

const { useState, useEffect } = React;
function Filters() {
  return <ShowFilterMenu />;
}
export default Filters;
function GetFilterList(list, theme) {
  const filteredList = list.map((titleTrack, index) => (
    <S.FilterTrack theme={theme} key={index.toString()}>
      {titleTrack}
    </S.FilterTrack>
  ));
  return <S.filterBlock>{filteredList}</S.filterBlock>;
}

function MenuFilterBig({ list, classPosition, theme }) {
  return (
    <S.filterMenu theme={theme} $classPosition={classPosition}>
      {GetFilterList(list, theme)}
    </S.filterMenu>
  );
}

function ShowFilterMenu() {
  const [selectFilter, setSelectFilter] = useState('');
  const { theme, setTheme } = useContext(ContextTheme);

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
      <MenuFilterYear theme={theme} classPosition={selectFilter} />
    ) : (
      <MenuFilterBig
        theme={theme}
        list={getFilteredList(selectFilter)}
        classPosition={selectFilter}
      />
    );

  return (
    <>
      <S.CenterblockFilter>
        <S.filterTitle theme={theme}>Искать по:</S.filterTitle>
        <FilterButtons
          theme={theme}
          OnClickFunc={onClick}
          selectFilter={selectFilter}
        />
      </S.CenterblockFilter>
      <S.filteredMenu>{selectFilter !== '' && showMenu}</S.filteredMenu>
    </>
  );
}
function MenuFilterYear({ classPosition, theme }) {
  return (
    <S.filterMenuYear theme={theme} $classPosition={classPosition}>
      <S.checkYear
        className="checkYear"
        type="radio"
        name="yearRadio"
        id="1"
        checked
        value="new"
      />
      <S.labelRadio theme={theme} htmlFor="1">Более новые</S.labelRadio>

      <S.checkYear
        className="checkYear"
        type="radio"
        name="yearRadio"
        id="2"
        value="old"
      />
      <S.labelRadio theme={theme} htmlFor="2">Более старые</S.labelRadio>
    </S.filterMenuYear>
  );
}

function FilterButtons({ OnClickFunc, selectFilter, theme }) {
  const btnObject = {
    'button-author': 'исполнителю',
    'button-year': 'году выпуска',
    'button-genre': 'жанру',
  };

  let arrKeysBtnObject = [];

  arrKeysBtnObject = Object.keys(btnObject);

  arrKeysBtnObject = arrKeysBtnObject.map((filter, index) => (
    <S.filterButton
      theme={theme}
      key={index.toString()}
      onClick={() => OnClickFunc(filter)}
      $clickBtn={selectFilter === filter}
    >
      {btnObject[filter]}
    </S.filterButton>
  ));

  return arrKeysBtnObject;
}
