import React, { useState, useMemo, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { getCurrentPage } from "../../hooks/getCurrentPage";
import { getPaginationItemLinks } from "../../hooks/getPaginationItemsLinks";

export interface IPaginationProps {
  totalPage: number;
  searchParamsPrefix: string[];
}

const rangeGap = 2;

const Pagination = ({
  searchParamsPrefix = [],
  totalPage = 0,
}: IPaginationProps) => {
  const paginationRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const currentPage = Number(searchParams.get("page"));
  const leftRange = currentPage + 1 - rangeGap;
  const rightRange = currentPage + 1 + rangeGap;
  const itemLinks = getPaginationItemLinks(
    searchParamsPrefix,
    searchParams,
    totalPage
  );

  const [marker, setMarker] = useState({
    left: 0,
    width: 0,
  });

  useEffect(() => {
    const container = paginationRef.current as HTMLElement;

    if (container) {
      const target = Array.from(container.children).find((el: any) =>
        el.classList.contains("active")
      );

      if (target) {
        setMarker((prevState) => {
          return {
            ...prevState,
            left: (target as HTMLElement).offsetLeft,
            width: (target as HTMLElement).clientWidth,
          };
        });
      }
    }
  }, [currentPage]);

  const isClassActive = (value: number) => {
    if (value === currentPage + 1) return " active";
    return "";
  };
  // return <></>;
  return (
    <>
      {itemLinks.length && totalPage > 1 ? (
        <div className="c-pagination">
          <div ref={paginationRef} className="c-pagination-wrapper">
            <div className="c-active-page-marker" style={marker}></div>
            {itemLinks.map((value, index) => {
              const page = index + 1;

              if (page === leftRange - 1) {
                return (
                  <React.Fragment key={`pagination-item-${page}`}>
                    <Link
                      to={itemLinks[0]}
                      className={`c-pagination-item${isClassActive(page)}`}
                    >
                      1
                    </Link>
                    {page > 1 && <div className="c-pagination-dots">...</div>}
                  </React.Fragment>
                );
              }

              if (page >= leftRange && page <= rightRange) {
                return (
                  <Link
                    key={`pagination-item-${page}`}
                    to={value}
                    className={`c-pagination-item${isClassActive(page)}`}
                  >
                    {page}
                  </Link>
                );
              }

              if (page === rightRange + 1) {
                return (
                  <React.Fragment key={`pagination-item-${page}`}>
                    {page < totalPage && (
                      <div className="c-pagination-dots">...</div>
                    )}
                    <Link
                      to={itemLinks[itemLinks.length - 1]}
                      className={`c-pagination-item${isClassActive(page)}`}
                    >
                      {totalPage}
                    </Link>
                  </React.Fragment>
                );
              }
            })}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Pagination;
