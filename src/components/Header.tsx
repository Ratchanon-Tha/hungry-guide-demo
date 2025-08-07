import React from "react";

interface HeaderProps {
  searchValue: string;
  setSearchValue: (value: string) => void;
  setIsSearchFocused: (isFocused: boolean) => void;
  handleBackButtonClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ searchValue, setSearchValue, setIsSearchFocused, handleBackButtonClick }) => {
  return (
    <header>
      <div className="top-bar">
        <button className="back-btn" onClick={handleBackButtonClick}>
          <img src="/src/assets/arrow-icon.svg" alt="Back" width={20} height={20} />
        </button>
        <div className="search-bar" onFocus={() => setIsSearchFocused(true)}>
          <span className="search-icon">
            <img src="/src/assets/search-icon.svg" alt="FindIcon" />
          </span>
          <input
            type="text"
            placeholder="Search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
