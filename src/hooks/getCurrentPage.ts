import { useLocation } from "react-router-dom";

export const getCurrentPage = (): number => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  return Number(searchParams.get("page"));
};
