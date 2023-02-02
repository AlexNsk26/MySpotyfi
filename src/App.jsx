import { createGlobalStyle } from 'styled-components';
// import Main from './pages/main/index';
import * as GS from './GlobalStyle';
import { AppRoutes } from './routes';

function App() {
  const GlobalStyle = createGlobalStyle`${GS.Global}`;
  return (
    <>
      <GlobalStyle />
      <AppRoutes />
    </>
  );
}

export default App;
