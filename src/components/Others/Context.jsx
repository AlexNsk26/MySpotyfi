/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

export const ContextTheme = React.createContext(null);
export function ContextThemesProvider({ children }) {
  const [theme, setTheme] = useState('darkTheme');

  const value = React.useMemo(
    () => ({
      theme,
      setTheme: () => setTheme(() => {
        if (theme === 'darkTheme') {
          return 'lightTheme';
        }
        return 'darkTheme';
      }),
    }),
    [theme]
  );
  return (
    <ContextTheme.Provider value={value}>{children}</ContextTheme.Provider>
  );
}
