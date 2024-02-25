import React from 'react';

const Theme = () => {
  const changeTheme = (e) => {
    // If the checkbox is checked, use the 'synthwave' theme, otherwise default to 'light'
    const theme = e.target.checked ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
  };

  return (
    <input
      type="checkbox"
      className="toggle theme-controller"
      onChange={changeTheme}
    />
  );
};

export default Theme;
