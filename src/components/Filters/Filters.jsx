/* eslint-disable object-curly-newline */
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
import { useDispatch, useSelector } from 'react-redux';
import * as S from './FilterStyle';
import { ContextTheme } from '../Others/Context';
import {
  allTracksSelector,
  GetFilerTrackSelector,
} from '../../store/selectors/selectors';
import {
  FetchTrackFilter,
  FetchTrackFilterYear,
} from '../../store/actions/creators/creators';

const { useState, useEffect } = React;
function Filters() {
  const playlistArr = useSelector(allTracksSelector);
  const filters = useSelector(GetFilerTrackSelector);
  return <ShowFilterMenu filters={filters} playlistArr={playlistArr} />;
}
export default Filters;

function GetFilterList(list, theme, filter, selectFilter) {
  const dispatch = useDispatch();
  const onClickFilerItem = (e) => {
    const { target } = e;
    const itemIndex = Number(target.id);
    dispatch(FetchTrackFilter({ itemIndex, typeFilter: selectFilter }));
  };
  const filteredList = list.map((titleTrack, index) => (
    <S.FilterTrack
      onClick={(e) => onClickFilerItem(e)}
      isChecked={filter ? filter.includes(index) : false}
      id={index.toString()}
      theme={theme}
      key={index.toString()}
    >
      {titleTrack}
    </S.FilterTrack>
  ));
  return <S.filterBlock>{filteredList}</S.filterBlock>;
}

// eslint-disable-next-line object-curly-newline
function MenuFilterBig({ filter, list, classPosition, theme, selectFilter }) {
  return (
    <S.filterMenu theme={theme} $classPosition={classPosition}>
      {GetFilterList(list, theme, filter, selectFilter)}
    </S.filterMenu>
  );
}

function ShowFilterMenu({ filters, playlistArr }) {
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
      <MenuFilterYear
        filter={filters[selectFilter]}
        selectFilter={selectFilter}
        theme={theme}
        classPosition={selectFilter}
      />
    ) : (
      <MenuFilterBig
        filter={filters[selectFilter]}
        selectFilter={selectFilter}
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
          filters={filters}
          theme={theme}
          OnClickFunc={onClick}
          selectFilter={selectFilter}
        />
      </S.CenterblockFilter>
      <S.filteredMenu>{selectFilter !== '' && showMenu}</S.filteredMenu>
    </>
  );
}
// eslint-disable-next-line object-curly-newline
function MenuFilterYear({ classPosition, theme, selectFilter, filter }) {
  const dispatch = useDispatch();
  const onChangeFilterYear = (e) => {
    const { target } = e;
    dispatch(
      FetchTrackFilterYear({ value: target.value, typeFilter: selectFilter })
    );
  };
  return (
    <S.filterMenuYear theme={theme} $classPosition={classPosition}>
      <S.checkYear
        onChange={(e) => onChangeFilterYear(e)}
        className="checkYear"
        type="radio"
        name="yearRadio"
        id="1"
        checked={filter === 'new'}
        value="new"
      />
      <S.labelRadio theme={theme} htmlFor="1">
        Более новые
      </S.labelRadio>

      <S.checkYear
        onChange={(e) => onChangeFilterYear(e)}
        className="checkYear"
        type="radio"
        name="yearRadio"
        id="2"
        checked={filter === 'old'}
        value="old"
      />
      <S.labelRadio theme={theme} htmlFor="2">
        Более старые
      </S.labelRadio>
    </S.filterMenuYear>
  );
}

function FilterButtons({ OnClickFunc, selectFilter, theme, filters }) {
  const btnObject = {
    'button-author': 'исполнителю',
    'button-year': 'году выпуска',
    'button-genre': 'жанру',
  };

  let arrKeysBtnObject = [];

  arrKeysBtnObject = Object.keys(btnObject);

  arrKeysBtnObject = arrKeysBtnObject.map((filter, index) => (
    <>
      <S.filterButton
        theme={theme}
        key={index.toString()}
        onClick={() => OnClickFunc(filter)}
        $clickBtn={selectFilter === filter}
      >
        {btnObject[filter]}
      </S.filterButton>
      {filters[filter] && filter !== 'button-year' && (
        <S.filterCounter>{filters[filter].length}</S.filterCounter>
      )}
    </>
  ));

  return arrKeysBtnObject;
}
