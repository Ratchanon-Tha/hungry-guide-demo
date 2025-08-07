import React, { useState, useRef, useEffect } from "react";
import type { SortOption } from "../types";

interface SortAndFilterProps {
  selectedLevel: string;
  setSelectedLevel: (level: string) => void;
  levelOptions: string[];
  sortOption: string;
  setSortOption: (option: string) => void;
  sortOptions: SortOption[];
}

const SortAndFilter: React.FC<SortAndFilterProps> = ({
  selectedLevel,
  setSelectedLevel,
  levelOptions,
  sortOption,
  setSortOption,
  sortOptions,
}) => {
  const [sortOpen, setSortOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const sortRef = useRef<HTMLDivElement>(null);
  const filterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (sortRef.current && !sortRef.current.contains(event.target as Node)) {
        setSortOpen(false);
      }
      if (
        filterRef.current &&
        !filterRef.current.contains(event.target as Node)
      ) {
        setFilterOpen(false);
      }
    }
    if (sortOpen || filterOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sortOpen, filterOpen]);

  return (
    <div className="sort-header">
      <div
        className="filter-btn"
        ref={filterRef}
        tabIndex={0}
        onClick={() => setFilterOpen((v) => !v)}
        style={{ position: "relative" }}
      >
        <span className="option-text">{selectedLevel}</span>
        <span className="filter-btn-icon">
          <img
            src="/src/assets/chevron-down-icon.svg"
            alt="Expand"
            width={18}
          />
        </span>
        {filterOpen && (
          <div className="dropdown-menu">
            {levelOptions.map((level, index) => (
              <div
                className="dropdown-item"
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedLevel(level);
                  setFilterOpen(false);
                }}
              >
                {level}
              </div>
            ))}
          </div>
        )}
      </div>

      <div
        className="filter-btn"
        ref={sortRef}
        tabIndex={0}
        onClick={() => setSortOpen((v) => !v)}
        style={{ position: "relative" }}
      >
        <span className="option-text">
          <img src="/src/assets/sort-icon.svg" alt="Sort" width={18} />
          {sortOption}
        </span>
        <span className="filter-btn-icon">
          <img
            src="/src/assets/chevron-down-icon.svg"
            alt="Expand"
            width={18}
          />
        </span>
        {sortOpen && (
          <div className="dropdown-menu">
            {sortOptions.map((opt) => (
              <div
                className="dropdown-item"
                key={opt.label}
                onClick={(e) => {
                  e.stopPropagation();
                  setSortOption(opt.label);
                  setSortOpen(false);
                }}
              >
                <img
                  src={opt.icon}
                  alt=""
                  width={16}
                  style={{ marginRight: 8 }}
                />
                {opt.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SortAndFilter;
