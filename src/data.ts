import { Category, Shop, SortOption } from "./types";

export const categories: Category[] = [
  { label: "Dessert", icon: "/src/assets/dessert-icon.svg" },
  { label: "Beverage", icon: "/src/assets/beverage-icon.svg" },
  { label: "Fast Food", icon: "/src/assets/fast-food-icon.svg" },
  { label: "Western", icon: "/src/assets/western-icon.svg" },
  { label: "Japanese", icon: "/src/assets/japanese-icon.svg" },
  { label: "Steak", icon: "/src/assets/steak-icon.svg" },
  { label: "Thai", icon: "/src/assets/thai-icon.svg" },
  { label: "Korean", icon: "/src/assets/korean-icon.svg" },
  { label: "Indian", icon: "/src/assets/indian-icon.svg" },
  { label: "Chinese", icon: "/src/assets/chinese-icon.svg" },
];

export const sortOptions: SortOption[] = [
  { label: "A-Z", icon: "/src/assets/sort-icon.svg" },
  { label: "Z-A", icon: "/src/assets/sort-icon.svg" },
  { label: "Newest", icon: "/src/assets/sort-icon.svg" },
  { label: "Oldest", icon: "/src/assets/sort-icon.svg" },
];

export const levelOptions = ["L1", "L2", "L3", "All Levels"];

export const shops: Shop[] = [
  {
    id: 1,
    name: "ANRI",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    icon: "https://cdn-icons-png.flaticon.com/512/3075/3075977.png", // bakery
    level: "L1",
    section: "L1 - 104D",
    category: "Dessert",
  },
  {
    id: 2,
    name: "Bonchon",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
    icon: "https://cdn-icons-png.flaticon.com/512/3075/3075974.png", // sushi
    level: "L2",
    section: "L2 - 205A",
    category: "Korean",
  },
  {
    id: 3,
    name: "Indian Restaurant",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
    icon: "https://cdn-icons-png.flaticon.com/512/3075/3075976.png", // burger
    level: "L3",
    section: "L3 - 301B",
    category: "Indian",
  },
  {
    id: 4,
    name: "Easy Buddy",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
    icon: "https://cdn-icons-png.flaticon.com/512/3075/3075979.png", // pasta
    level: "L1",
    section: "L1 - 110C",
    category: "Thai",
  },
  {
    id: 5,
    name: "Taco Fiesta",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    icon: "https://cdn-icons-png.flaticon.com/512/3075/3075978.png", // taco
    level: "L2",
    section: "L2 - 210E",
    category: "Fast Food",
  },
  {
    id: 6,
    name: "Curry Corner",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca",
    icon: "https://cdn-icons-png.flaticon.com/512/3075/3075980.png", // curry
    level: "L3",
    section: "L3 - 315F",
    category: "Japanese",
  },
  {
    id: 7,
    name: "Noodle Bar",
    image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc",
    icon: "https://cdn-icons-png.flaticon.com/512/3075/3075981.png", // noodles
    level: "L1",
    section: "L1 - 120G",
    category: "Chinese",
  },
  {
    id: 8,
    name: "Vegan Delights",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288",
    icon: "https://cdn-icons-png.flaticon.com/512/3075/3075982.png", // salad
    level: "L2",
    section: "L2 - 215H",
    category: "Western",
  },
  {
    id: 9,
    name: "Steak House",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    icon: "https://cdn-icons-png.flaticon.com/512/3075/3075983.png", // steak
    level: "L3",
    section: "L3 - 320J",
    category: "Steak",
  },
  {
    id: 10,
    name: "Coffee Spot",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
    icon: "https://cdn-icons-png.flaticon.com/512/3075/3075984.png", // coffee
    level: "L1",
    section: "L1 - 130K",
    category: "Beverage",
  },
];
