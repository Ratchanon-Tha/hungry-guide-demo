import React from "react";
import type { Shop } from "../types";

interface ShopListProps {
  shops: Shop[];
}

const ShopList: React.FC<ShopListProps> = ({ shops }) => {
  return (
    <div className="card-container">
      {shops.map((shop) => (
        <div
          className="card"
          key={shop.id}
          // onClick={() => {
          //   window.location.href =
          //     "deeplink://directory-shop-detail?external_id=" + shop.id;
          // }}
        >
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
  );
};

export default ShopList;
