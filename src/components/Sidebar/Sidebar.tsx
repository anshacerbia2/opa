import React, { FC, useEffect, useRef, useState } from "react";
import styles from "../../styles/components/sidebar.module.scss";
import { NavLink, Link } from "react-router-dom";
import { VscChevronRight } from "react-icons/vsc";
import SidebarSvgIcon from "../svgIcon/SidebarSvgIcon";
import { sidebarMenuLists } from "../../consts/sidebar.constant";
import type { ISidebarProps } from "../../models/siedbar.model";
import useSVGPathAnimation from "../svgPathAnimation";
import Logo from "./Logo";
import SidebarSubmenuItemAnimation from "../animation/SidebarSubmenuItemAnimation";

const Sidebar: FC<ISidebarProps> = ({ isExpanded, toggleExpand }) => {
  const svgRefs = useRef<SVGPathElement[][]>([]);

  const animatePath = useSVGPathAnimation(svgRefs);
  const [showSubmenu, setShowSubmenu] = useState(
    Array(sidebarMenuLists.length).fill(false)
  );

  const handleSvgPathRefs = (index: number, element: SVGPathElement | null) => {
    if (element instanceof SVGPathElement) {
      if (!svgRefs.current[index]) {
        svgRefs.current[index] = [];
      }
      svgRefs.current[index].push(element);
    }
  };

  const menuItemTitleTransitionDelay = (
    index: number
  ): { transitionDelay: string } => {
    return { transitionDelay: isExpanded ? `calc(${index} * 0.066s)` : "0s" };
  };

  const handleHoverMenuItem = (menuIndex: number) => {
    animatePath(menuIndex);
  };

  const handleOpenSubmenuItem = (index: number) => {
    setShowSubmenu((prevState) => {
      const state = prevState.map((v, i) => {
        if (i === index) return !v;
        return false;
      });
      return state;
    });
  };

  return (
    <>
      <div
        className={styles.sidebar + (isExpanded ? " " + styles.expanded : "")}
      >
        <div className={styles["logo-menu"]}>
          <Logo />
        </div>
        <div className={styles["menu-wrapper"]}>
          <ul>
            {sidebarMenuLists.map((menuItem, index) => {
              return (
                <li
                  key={`menu-item-index-${index}`}
                  className={styles["menu-item"]}
                  onMouseEnter={() => {
                    handleHoverMenuItem(index);
                  }}
                  onClick={() => handleOpenSubmenuItem(index)}
                >
                  <NavLink to={menuItem.linkTo} title={menuItem.linkTitle}>
                    <SidebarSvgIcon
                      key={`menu-item-svg-index-${index}`}
                      paths={menuItem.svg.paths}
                      ref={(element) => handleSvgPathRefs(index, element)}
                    />
                    <span
                      className={styles["menu-item-title"]}
                      style={menuItemTitleTransitionDelay(index)}
                    >
                      {menuItem.linkTitle}
                    </span>
                  </NavLink>
                  {menuItem.subMenu.length ? (
                    <SidebarSubmenuItemAnimation
                      submenuItems={menuItem.subMenu}
                      isShown={showSubmenu[index]}
                    />
                  ) : (
                    <></>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
        <div
          className={styles["menu-item"]}
          onMouseEnter={() => handleHoverMenuItem(sidebarMenuLists.length)}
        >
          <Link to="javascript:void(0)">
            <SidebarSvgIcon
              paths={[
                {
                  data: "M12 8.5V11.125M12 8.5C12.9665 8.5 13.75 7.7165 13.75 6.75C13.75 5.7835 12.9665 5 12 5C11.0335 5 10.25 5.7835 10.25 6.75C10.25 7.7165 11.0335 8.5 12 8.5ZM12 11.125C11.0335 11.125 10.25 11.9085 10.25 12.875C10.25 13.8415 11.0335 14.625 12 14.625C12.9665 14.625 13.75 13.8415 13.75 12.875C13.75 11.9085 12.9665 11.125 12 11.125ZM8.49995 11.3438L10.25 12.4375M15.5 11.3438L13.75 12.4375M8.9375 15.9375L10.6875 14.1875M15.0625 15.9375L13.3125 14.1875M8.5 10.25C8.5 11.2165 7.7165 12 6.75 12C5.7835 12 5 11.2165 5 10.25C5 9.2835 5.7835 8.5 6.75 8.5C7.7165 8.5 8.5 9.2835 8.5 10.25ZM19 10.25C19 11.2165 18.2165 12 17.25 12C16.2835 12 15.5 11.2165 15.5 10.25C15.5 9.2835 16.2835 8.5 17.25 8.5C18.2165 8.5 19 9.2835 19 10.25ZM18.125 17.25C18.125 18.2165 17.3415 19 16.375 19C15.4085 19 14.625 18.2165 14.625 17.25C14.625 16.2835 15.4085 15.5 16.375 15.5C17.3415 15.5 18.125 16.2835 18.125 17.25ZM9.375 17.25C9.375 18.2165 8.5915 19 7.625 19C6.6585 19 5.875 18.2165 5.875 17.25C5.875 16.2835 6.6585 15.5 7.625 15.5C8.5915 15.5 9.375 16.2835 9.375 17.25Z",
                  stroke: "#fff",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                },
              ]}
              ref={(element) =>
                handleSvgPathRefs(sidebarMenuLists.length, element)
              }
            />
            <span
              className={styles["menu-item-title"]}
              style={menuItemTitleTransitionDelay(sidebarMenuLists.length)}
            >
              Amadeus Login
            </span>
          </Link>
        </div>
        <div className={styles["toggle-menu"]} onClick={toggleExpand}>
          <span
            className={
              styles["icon-wrapper"] + (isExpanded ? " " + styles["open"] : "")
            }
          >
            <VscChevronRight />
          </span>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
