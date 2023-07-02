interface IPaginationQueries {
  page: number;
  size: number;
}
const paginationQueries: IPaginationQueries = {
  page: 1,
  size: 5,
};
export const setQueryPagination = (queryValue: string) => {
  const { page, size } = paginationQueries;
  let queryString = `?page=${page}&size=${size}`;
  if (queryValue) {
    queryString += `&${queryValue}`;
  }
  console.log(queryValue, queryString, ">>>>>>>>>>>>>>>>>>>>x");
  return queryString;
};
