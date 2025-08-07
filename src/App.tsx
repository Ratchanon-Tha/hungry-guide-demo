import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import CategoryBar from "./components/CategoryBar";
import SortAndFilter from "./components/SortAndFilter";
import ShopList from "./components/ShopList";
import { categories, shops, sortOptions, levelOptions } from "./data";

function App() {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [sortOption, setSortOption] = useState("A-Z");
  const [selectedLevel, setSelectedLevel] = useState("All Levels");
  const [searchString, setSearchString] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleBackButtonClick = () => {
    setIsSearchFocused(false);
    setSearchString("");
  };

  const filteredShops = shops.filter((shop) => {
    const levelMatch =
      selectedLevel === "All Levels" || shop.level === selectedLevel;
    const categoryMatch =
      selectedCategories.length === 0 ||
      selectedCategories.includes(shop.category);
    return levelMatch && categoryMatch;
  });

  const sortedShops = [...filteredShops].sort((a, b) => {
    if (sortOption === "A-Z") {
      return a.name.localeCompare(b.name);
    }
    if (sortOption === "Z-A") {
      return b.name.localeCompare(a.name);
    }
    return 0;
  });

  return (
    <>
      <Header
        searchValue={searchString}
        setSearchValue={setSearchString}
        setIsSearchFocused={setIsSearchFocused}
        handleBackButtonClick={handleBackButtonClick}
      />
      <main>
        {isSearchFocused ? (
          <SearchBar searchedString={searchString} />
        ) : (
          <>
            <CategoryBar
              categories={categories}
              selectedCategories={selectedCategories}
              setSelectedCategories={setSelectedCategories}
            />
            <SortAndFilter
              selectedLevel={selectedLevel}
              setSelectedLevel={setSelectedLevel}
              levelOptions={levelOptions}
              sortOption={sortOption}
              setSortOption={setSortOption}
              sortOptions={sortOptions}
            />
            <ShopList shops={sortedShops} />
          </>
        )}
      </main>
    </>
  );
}

export default App;
