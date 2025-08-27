import { useCallback, useEffect, useState } from 'react';
import Switch from 'react-switch';

const SwitchTheme = () => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, []);

  const onChangeTheme = useCallback((checked: boolean) => {
    const theme = checked ? 'dark' : 'light';
    localStorage.setItem('theme', theme);

    if (checked) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    setChecked(checked);
  }, []);

  return (
    <Switch
      checked={checked}
      onChange={onChangeTheme}
      onColor="#ff6f3c"
      onHandleColor="#ff6f3c"
      handleDiameter={22}
      uncheckedIcon={false}
      checkedIcon={false}
      boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
      activeBoxShadow="0px 0px 1px 10px #fff"
      height={20}
      width={40}
    />
  );
};

export default SwitchTheme;
