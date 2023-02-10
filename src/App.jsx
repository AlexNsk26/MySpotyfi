/* eslint-disable no-unused-vars */
import { createGlobalStyle } from 'styled-components';
import {
  ContextTheme,
  ContextThemesProvider,
} from './components/Others/Context';
import * as GS from './GlobalStyle';
import { AppRoutes } from './routes';

function App() {
  const GlobalStyle = createGlobalStyle`${GS.Global}`;
  return (
    <ContextThemesProvider>
      <GlobalStyle />
      <AppRoutes />
    </ContextThemesProvider>
  );
}

export default App;
