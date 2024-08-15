import React, { useRef } from "react";

const Header = ({ theme, font, handleFontChange, toggleTheme }) => {
  const selectRef = useRef(null);


  return (
    <header>
      <div className="logo">
        <img src="./assets/images/logo.svg" alt="" />{" "}
      </div>
      {/* font selector */}
      <div className="font-selector-container bg-white text-black">
        <select
          ref={selectRef}
          className="font-selector bg-white text-black"
          value={font}
          onChange={(e) => {
            handleFontChange(e.target.value);
          }}
        >
          <option value="sans-serif">Sans Serif</option>
          <option value="serif">Serif</option>
          <option value="monospace">Mono</option>
        </select>
      </div>
      <div className="divider"></div>
      {/* theme toggle */}
      <div className="theme-toggle">
        <label className="switch">
          <input type="checkbox" onChange={toggleTheme} checked={theme} />
          <span className="slider round"></span>
        </label>
        <span className="theme-label">
          {" "}
          {theme ? <img src="./assets/images/icon-moon-purple.svg" alt="" /> : <img src="./assets/images/icon-moon.svg" alt="" />}

        </span>
      </div>
    </header>
  );
};

export default Header;
