/* eslint-disable import/prefer-default-export */
import styled, { css } from 'styled-components';

const ColorTheme = {
  darkTheme: css`
    color: #ffffff;
  `,
  lightTheme: css`
    color: #000000;
  `,
};

const ParamColorTheme = {
  darkTheme: '#ffffff',
  lightTheme: '#000000',
};

export const FilterTrack = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  padding-bottom: 24px;
  display: block;
  width: 152px;
  font-feature-settings: 'pnum' on, 'lnum' on;
  color: ${({ theme }) => ParamColorTheme[theme]};
  flex: none;
  order: 4;
  flex-grow: 0;
  cursor: pointer;
  ${({ isChecked }) => (!isChecked
    ? css``
    : css`
          text-decoration-line: underline;
          font-feature-settings: 'pnum' on, 'lnum' on;
          color: #b672ff;
        `)}
  &:hover {
    text-decoration-line: underline;
    font-feature-settings: 'pnum' on, 'lnum' on;
    color: #b672ff;
  }
`;

export const filterBlock = styled.div`
  padding-left: 34px;
  padding-right: 24px;
  margin-top: 36.5px;
  margin-bottom: 36.5px;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 4px;
    background: #4b4949;
    border-radius: 10px;
    padding-top: 34px;
  }
  &::-webkit-scrollbar-thumb {
    width: 4px;
    height: 65px;
    background: #ffffff;
    border-radius: 10px;
  }
`;

export const filterCounter = styled.div`
  border-radius: 50%;
  background: #ad61ff;
  width: 26px;
  height: 25.5px;
  position: relative;
  font-weight: 400;
  font-size: 13px;
  line-height: 13px;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 30px;
  top: -14px;
`;

const filterMenues = {
  'button-author': css`
    left: 80px;
  `,
  'button-year': css`
    left: 230px;
  `,
  'button-genre': css`
    left: 370px;
  `,
};

const filterMenuParamColorTheme = {
  darkTheme: '#313131',
  lightTheme: '#F6F5F3',
};

export const filterMenu = styled.div`
  width: 248px;
  height: 305px;
  position: relative;
  top: -30px;
  background: ${({ theme }) => filterMenuParamColorTheme[theme]};
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 100;
  ${({ $classPosition }) => filterMenues[$classPosition]}
`;
export const filterMenuYear = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 34px;
  gap: 14px;
  width: 403px;
  height: 92px;
  background: ${({ theme }) => filterMenuParamColorTheme[theme]};
  border-radius: 12px;
  position: relative;
  top: -30px;
  right: 140px;
  justify-content: center;
  align-items: center;
  z-index: 100;
  ${({ $classPosition }) => filterMenues[$classPosition]}
`;

export const CenterblockFilter = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-bottom: 51px;
`;

export const filterTitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-right: 15px;
  ${({ theme }) => ColorTheme[theme]};
`;

export const filteredMenu = styled.div`
  height: 1px;
`;

export const checkYear = styled.input`
  box-sizing: border-box;
  width: 18px;
  height: 18px;
  border: 1px solid #ffffff;
`;

export const labelRadio = styled.label`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  font-feature-settings: 'pnum' on, 'lnum' on;
  color: ${({ theme }) => ParamColorTheme[theme]};
`;

const btnTextClick = css`
  border-color: #ad61ff;
  color: #ad61ff;
`;

const filterButtonHoverColorTheme = {
  darkTheme: css`
    color: #d9b6ff;
  `,
  lightTheme: css`
    color: #580ea2;
  `,
};

const filterButtonBorderColorTheme = {
  darkTheme: '#d9b6ff',
  lightTheme: '#580ea2',
};

export const filterButton = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  ${({ theme }) => ColorTheme[theme]};
  border: 1px solid ${({ theme }) => ParamColorTheme[theme]};
  border-radius: 60px;
  padding: 6px 20px;
  ${({ $clickBtn }) => ($clickBtn ? btnTextClick : css``)}
  &:hover {
    border-color: ${({ theme }) => filterButtonBorderColorTheme[theme]};
    ${({ theme }) => filterButtonHoverColorTheme[theme]};
    cursor: pointer;
  }

  &:active {
    border-color: #ad61ff;
    color: #ad61ff;
    cursor: pointer;
  }

  &:not(:last-child) {
    margin-right: 10px;
  }
`;
