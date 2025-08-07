import React, { useEffect } from "react";
import type { ResultDataWrapper, SearchResult } from "../types";
import { fromJson, getOrNull, errorOrNull } from "../utility/apiHandler";

interface SearchBarProps {
  searchedString: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchedString }) => {
  const [searchedShops, setSearchedShops] = React.useState<
    SearchResult["stores"]["data"]
  >([]);

  useEffect(() => {
    const params = new URLSearchParams({
      search: searchedString,
      mallSlug: "CTW",
    });

    fetch(
      `${
        import.meta.env.VITE_API_BASE_URL
      }/v1/event-promotion/search/global?${params}`
    )
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error ${res.status}`);
        return res.json();
      })
      .then((json) => {
        const result: ResultDataWrapper<SearchResult> = fromJson(
          json,
          (data) => data as SearchResult
        );

        const data = getOrNull(result);
        const error = errorOrNull(result);

        if (data) {
          setSearchedShops(data.stores.data);
        } else if (error) {
          console.error("❌ API error:", error);
        }
      })
      .catch((err) => {
        console.error("❌ Network or parsing error:", err);
      });
  }, [searchedString]);

  return (
    <div className="search-list">
      {searchedShops.length === 0 ? (
        <div className="no-results"></div>
      ) : (
        searchedShops.map((shop) => (
          <div 
          className="search-list-item" 
          key={shop.id}
          onClick={() => {
            window.location.href = `centralx-app://directory-shop-detail?external_id=25fca556-7d16-507f-ae54-b877dc2fcbac%27%22%3E`;
          }}
          >
            <img className="search-list-logo" src={shop.logoUrl} alt={shop.nameEn} />
            <div className="search-list-info">
              <div className="search-list-title">{shop.nameEn}</div>
              <div className="search-list-category">
                <img
                  src="/src/assets/gray-fork-spoon-icon.svg"
                  alt="GrayForkSpoonIcon"
                />
                {shop.categoryEn}
              </div>
            </div>
            <span className="search-list-level">{shop.floor}</span>
          </div>
        ))
      )}
    </div>
  );
};

export default SearchBar;
