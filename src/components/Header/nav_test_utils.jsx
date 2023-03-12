import { useContext } from 'react';
import { FormMenuItems } from './navigation';

export default function MyWrapperFormMenuItems() {
  const { theme, toggleTheme } = useContext();
  const items = [
    { title: 'Главное', path: '/' },
    { title: 'Мой плейлист', path: '/sets/4' },
    { title: 'Выйти', path: '/login' },
  ];
  return <FormMenuItems items={items} setTheme={toggleTheme} theme={theme} />;
}
