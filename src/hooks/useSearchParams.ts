import { useLocation } from "react-router-dom";

const items_per_page = 10;

export const useSearchParams = (prefix: string[]) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  let queryString = `?size=${items_per_page}`;

  prefix.forEach((val) => {
    if (searchParams.get(val)) {
      queryString += `&${val}=${searchParams.get(val)}`;
    }
  });

  return queryString;
};
