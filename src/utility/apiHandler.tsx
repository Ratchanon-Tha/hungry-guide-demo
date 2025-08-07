/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ApiError, Pagination, ResultDataWrapper } from "../types";

export function fromJson<T>(
  json: any,
  fromJsonT: (input: any) => T
): ResultDataWrapper<T> {
  const dataKey = "data";
  const errorKey = "error";
  const paginationKey = "pagination";

  if (json?.[errorKey]) {
    return {
      type: "error",
      error: json[errorKey] as ApiError,
    };
  }

  if (!json?.[dataKey]) {
    return {
      type: "error",
      error: json as ApiError,
    };
  }

  let pagination: Pagination | undefined;
  if (json[paginationKey]) {
    pagination = json[paginationKey] as Pagination;
  } else if ("total" in json) {
    pagination = {
      total: json.total,
      page: json.current_page ?? 1,
      perPage: json.page_size ?? 10,
      totalPages: json.total_page ?? 1,
    };
  }

  return {
    type: "data",
    data: fromJsonT(json[dataKey]),
    pagination,
  };
}

export function getOrNull<T>(wrapper: ResultDataWrapper<T>): T | null {
  return wrapper.type === "data" ? wrapper.data : null;
}

export function getPaginationOrNull<T>(wrapper: ResultDataWrapper<T>): Pagination | null {
  return wrapper.type === "data" ? wrapper.pagination ?? null : null;
}

export function errorOrNull<T>(wrapper: ResultDataWrapper<T>): ApiError | null {
  return wrapper.type === "error" ? wrapper.error : null;
}

export function map<T, R>(
  wrapper: ResultDataWrapper<T>,
  fn: (value: T) => R
): ResultDataWrapper<R> {
  return wrapper.type === "data"
    ? { type: "data", data: fn(wrapper.data), pagination: wrapper.pagination }
    : wrapper;
}

export async function flatMap<T, R>(
  wrapper: ResultDataWrapper<T>,
  fn: (value: T) => Promise<ResultDataWrapper<R>>
): Promise<ResultDataWrapper<R>> {
  return wrapper.type === "data" ? fn(wrapper.data) : wrapper;
}

