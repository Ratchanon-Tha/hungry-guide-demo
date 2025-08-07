export interface Category {
  label: string;
  icon: string;
}

export interface SortOption {
  label: string;
  icon: string;
}

export interface Shop {
  id: number;
  name: string;
  image: string;
  icon: string;
  level: string;
  section: string;
  category: string;
}

export type Pagination = {
  total: number;
  page: number;
  perPage: number;
  totalPages: number;
};

export type ApiError = {
  message: string;
  code?: string | number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};

export type ResultDataWrapper<T> =
  | { type: "data"; data: T; pagination?: Pagination }
  | { type: "error"; error: ApiError };

export type ShopType = {
  categoryEn: string;
  categoryTh: string;
  floor: string;
  id: string;
  logoUrl: string;
  nameEn: string;
  nameTh: string;
  slug: string;
  tagEn: string[];
  tagTh: string[];
  venue: {
    externalId: string; 
    slug: string; 
    nameEn: string; 
    nameTh: string;
    thumbnailImageUrl: string;
  }
};

export type SearchResult = {
  events: string[];
  lang: string;
  news: string[];
  promotions: string[];
  rewardHubs: string[];
  stores: {total: number, data: ShopType[]};
  suggestions: any[];
}
