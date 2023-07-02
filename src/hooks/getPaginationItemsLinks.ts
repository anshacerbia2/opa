import { useLocation } from "react-router-dom";

const items_per_page = 10;

export const getPaginationItemLinks = (
  filterQueriesPrefix: string[],
  searchParams: URLSearchParams,
  totalPage: number
): string[] => {
  let searchQueryString = "";
  let paginationItemLinks: string[] = [];

  filterQueriesPrefix.forEach((val) => {
    if (searchParams.get(val)) {
      searchQueryString += `&${val}=${searchParams.get(val)}`;
    }
  });

  for (let i = 0; i < totalPage; i++) {
    paginationItemLinks.push(
      `?size=${items_per_page}&page=${i}${searchQueryString}`
    );
  }

  return paginationItemLinks;
};
