import styled, { css } from 'styled-components';

export const Global = `
* {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

*:before,
*:after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

a,
a:visited {
  text-decoration: none;    
  cursor: pointer;
}

button,
._btn {
  cursor: pointer;
}

ul li {
  list-style: none;
}

@font-face {
  font-family: 'StratosSkyeng';
  src: local('StratosSkyeng'), local('StratosSkyeng'),
    url('./fonts/Stratos-Regular.woff2') format('woff2'),
    url('./fonts/Stratos-Regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
}

html,
body {
  font-family: 'StratosSkyeng', sans-serif;
  width: 100%;
  height: 100%;
  color: #ffffff;
}
`;
const BGC = {
  darkTheme: css`
    background-color: #181818;
  `,
  lightTheme: css`
    background-color: #ffffff;
  `,
};
export const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  overflow: hidden;
  ${({ theme }) => BGC[theme]};
`;

export const Container = styled.div`
  max-width: 1920px;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  ${({ theme }) => BGC[theme]}; ;
`;

export const Main = styled.div`
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  height: 100%;
`;

export const MainCenterblock = styled.div`
  width: auto;
  -webkit-box-flex: 3;
  -ms-flex-positive: 3;
  flex-grow: 3;
  padding: 20px 40px 20px 111px;
`;
