/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './OtherStyle';
import iconSvg from '../mainIcons/sprite.svg';
import { ContextTheme } from './Context';

function CenterBlock() {
  const { theme, setTheme } = useContext(ContextTheme);
  return (
    <S.CenterBlockSearch theme={theme}>
      <CenterBlockSearchLogo theme={theme} />
      <CenterBlockSearchInput theme={theme} />
    </S.CenterBlockSearch>
  );
}
export default CenterBlock;
export function TrackHeader({ header, theme }) {
  return <S.CenterBlockH2 theme={theme}>{header}</S.CenterBlockH2>;
}
function CenterBlockSearchLogo({ theme }) {
  return (
    <S.SearchSvg>
      <use
        xlinkHref={
          theme === 'darkTheme'
            ? `${iconSvg}#icon-search`
            : `${iconSvg}#icon-search-light`
        }
      />
    </S.SearchSvg>
  );
}

function CenterBlockSearchInput({ theme }) {
  return (
    <S.SearchText
      theme={theme}
      type="search"
      placeholder="Поиск"
      name="search"
    />
  );
}
