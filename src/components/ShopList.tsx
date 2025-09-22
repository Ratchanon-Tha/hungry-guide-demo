import React, { useEffect, useState } from "react";
import type { Shop } from "../types";
import { getCookie, setCookie } from "../cookie";

interface ShopListProps {
  shops: Shop[];
}

const ShopList: React.FC<ShopListProps> = ({ shops }) => {
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    const stored = getCookie("darkTheme");
    setTheme(stored);
  }, []);

  const handleSetTheme = () => {
    setCookie("darkTheme", "true", 7);
    setTheme("true");
  };

  return (
    <div>
      <div className="banner">
        {theme ? (
          <p>Cookie detected: darkTheme = {theme}</p>
        ) : (
          <p>No darkTheme cookie set</p>
        )}
        <button onClick={handleSetTheme}>Set Dark Theme Cookie</button>
      </div>

      <div className="card-container">
        {shops.map((shop) => (
          <div className="card" key={shop.id}>
            <img src={shop.image} alt="Restaurant" />
            <div className="card-content">
              <h2>
                <img className="brand-icon" src={shop.icon} alt="ANRI" />
                <span className="shop-name">{shop.name}</span>
              </h2>
              <div className="card-info-row">
                <span className="level">{shop.level}</span>
                <span className="divider">|</span>
                <span className="section-text">{shop.section}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopList;
