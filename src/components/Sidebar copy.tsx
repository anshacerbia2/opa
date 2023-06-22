import { FC, useEffect, useRef } from "react";
import styles from "../styles/components/sidebar.module.scss";
import { NavLink, Link } from "react-router-dom";
import { VscChevronRight } from "react-icons/vsc";
import SvgIcon from "./SvgIcon";
import { sidebarMenuLists } from "../consts/sidebar.constants";
import type { ISidebarProps } from "../models/siedbar.model";

const Sidebar: FC<ISidebarProps> = ({ isExpanded, toggleExpand }) => {
  const svgRefs = useRef<SVGPathElement[][]>([]);
  // const svgRefs = useRef<Array<React.RefObject<SVGSVGElement>>>([]);
  // const svgRefs = useRef([]);
  useEffect(() => {
    // const ele = document.querySelectorAll("svg.inline");
    //   if (pathsRef.current) {
    //     pathsRef.current.forEach((path) => {
    //       const length = path.getTotalLength();
    //       path.style.transition = "none";
    //       path.style.strokeDasharray = `${length} ${length}`;
    //       path.style.strokeDashoffset = `${length}`;
    //       path.getBoundingClientRect();
    //       path.style.transition = "stroke-dashoffset 3s";
    //       path.style.strokeDashoffset = "0";
    //     });
    //   }
    console.log(svgRefs);
  }, [svgRefs.current]);

  return (
    <>
      <div className={styles.sidebar + (isExpanded ? " " + styles.active : "")}>
        <div className={styles["logo-menu"]}>
          <svg
            aria-hidden="true"
            role="img"
            viewBox="0 0 54 114"
            className="letter letter-a letter-1"
            style={{ opacity: 1, stroke: "#fff" }}
          >
            <path
              // ref={(path) => path && pathsRef.current.push(path)}
              className="svg-animate"
              d="m 27 57 m 0 -20 a 20 20 0 1 1 0 40 a 20 20 0 1 1 0 -40"
              strokeWidth="10"
              strokeLinecap="butt"
              fill="none"
              style={{
                strokeDashoffset: 245.363,
                strokeDasharray: "125.681, 128.195, 120.654",
              }}
            ></path>
          </svg>
          <svg
            aria-hidden="true"
            role="img"
            viewBox="0 0 54 114"
            className="letter letter-a letter-1"
            style={{ opacity: 1, stroke: "#fff" }}
          >
            <path
              d="m 27 57 m 0 -20 a 20 20 0 1 1 0 40 a 20 20 0 1 1 0 -40"
              strokeWidth="10"
              strokeLinecap="butt"
              stroke="#fff"
              fill="none"
              style={{
                strokeDashoffset: 251.363,
                strokeDasharray: "125.681, 93.2611, 95.2611, 30.4204, 125.681",
              }}
            ></path>
            <path
              d="m 7 0 l 0 114"
              strokeWidth="10"
              strokeLinecap="butt"
              stroke="#fff"
              fill="none"
              style={{ strokeDashoffset: 230, strokeDasharray: "114, 171, 46" }}
            ></path>
          </svg>
          <svg
            aria-hidden="true"
            role="img"
            viewBox="0 0 54 114"
            className="letter letter-a letter-1"
            style={{ opacity: 1, stroke: "#fff" }}
          >
            <path
              d="m 27 57 m 0 -20 a 20 20 0 1 1 0 40 a 20 20 0 1 1 0 -40"
              strokeWidth="10"
              strokeLinecap="butt"
              fill="none"
              style={{
                strokeDashoffset: 251.363,
                strokeDasharray: "125.681, 62.8407, 95.2611, 30.4204, 125.681",
              }}
            ></path>
            <path
              d="m 47 0 l 0 114"
              strokeWidth="10"
              strokeLinecap="butt"
              stroke="#fff"
              fill="none"
              style={{ strokeDashoffset: 228, strokeDasharray: "114, 171, 25" }}
            ></path>
          </svg>
        </div>
        <div className={styles["menu-wrapper"]}>
          <ul>
            {sidebarMenuLists.map((menuItem, index) => {
              return (
                <li
                  key={`menu-item-index-${index}`}
                  className={
                    styles["menu-item"] +
                    (menuItem.subMenu.length ? " " + styles["has-sub"] : "")
                  }
                >
                  <NavLink to={menuItem.linkTo} title={menuItem.linkTitle}>
                    <SvgIcon
                      key={`svg-index-${index}`}
                      className="inline"
                      paths={menuItem.svg.paths}
                      ref={(element) => {
                        if (element instanceof SVGPathElement) {
                          if (!svgRefs.current[index]) {
                            svgRefs.current[index] = [];
                          }
                          svgRefs.current[index].push(element);
                        }
                      }}
                    />
                    <div className={styles["menu-name"]}>
                      {menuItem.linkTitle}
                    </div>
                  </NavLink>
                  {menuItem.subMenu.length ? (
                    <div
                      className={
                        styles["submenu-wrapper"] +
                        (menuItem.subMenu.length
                          ? " " + styles["multi-column"]
                          : "")
                      }
                    >
                      <ul>
                        {menuItem.subMenu.map((subMenuItem, subIndex) => (
                          <li key={`submenu-item-index-${subIndex}`}>
                            <Link to={subMenuItem.linkTo}>
                              {subMenuItem.linkTitle}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <></>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
        {/* <div className="setting-menu">
          <a href="#">
            <svg className="inline" viewBox="0 0 24 24" fill="none">
              <path
                className="path-animate"
                d="M12 8.5V11.125M12 8.5C12.9665 8.5 13.75 7.7165 13.75 6.75C13.75 5.7835 12.9665 5 12 5C11.0335 5 10.25 5.7835 10.25 6.75C10.25 7.7165 11.0335 8.5 12 8.5ZM12 11.125C11.0335 11.125 10.25 11.9085 10.25 12.875C10.25 13.8415 11.0335 14.625 12 14.625C12.9665 14.625 13.75 13.8415 13.75 12.875C13.75 11.9085 12.9665 11.125 12 11.125ZM8.49995 11.3438L10.25 12.4375M15.5 11.3438L13.75 12.4375M8.9375 15.9375L10.6875 14.1875M15.0625 15.9375L13.3125 14.1875M8.5 10.25C8.5 11.2165 7.7165 12 6.75 12C5.7835 12 5 11.2165 5 10.25C5 9.2835 5.7835 8.5 6.75 8.5C7.7165 8.5 8.5 9.2835 8.5 10.25ZM19 10.25C19 11.2165 18.2165 12 17.25 12C16.2835 12 15.5 11.2165 15.5 10.25C15.5 9.2835 16.2835 8.5 17.25 8.5C18.2165 8.5 19 9.2835 19 10.25ZM18.125 17.25C18.125 18.2165 17.3415 19 16.375 19C15.4085 19 14.625 18.2165 14.625 17.25C14.625 16.2835 15.4085 15.5 16.375 15.5C17.3415 15.5 18.125 16.2835 18.125 17.25ZM9.375 17.25C9.375 18.2165 8.5915 19 7.625 19C6.6585 19 5.875 18.2165 5.875 17.25C5.875 16.2835 6.6585 15.5 7.625 15.5C8.5915 15.5 9.375 16.2835 9.375 17.25Z"
                stroke="#464455"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="inline menu-name">Amadeus Login</div>
          </a>
        </div> */}
        <div
          className={styles["toggle-menu"] + " flex-center js-toggle-menu"}
          onClick={toggleExpand}
        >
          <span className={"icon-wrapper" + (isExpanded ? " open" : "")}>
            <VscChevronRight />
          </span>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
