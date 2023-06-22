import styles from "../../styles/components/sidebar.module.scss";
import React, {
  forwardRef,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { ISidebarMenuItem } from "../../models/siedbar.model";
import { Link } from "react-router-dom";

interface ISidebarSubmenuItemAnimationProps {
  isShown: boolean;
  submenuItems: ISidebarMenuItem["subMenu"];
}
const SidebarSubmenuItemAnimation = ({
  isShown,
  submenuItems,
}: ISidebarSubmenuItemAnimationProps) => {
  const [show, setShow] = useState(false);
  const [isRender, setIsrender] = useState(true);
  const ulRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isShown) {
      setIsrender(true);
      setTimeout(() => {
        animateIn();
      }, 0);
    } else {
      animateOut();
    }
  }, [isShown]);

  const animateIn = () => {
    setShow(true);
  };

  const animateOut = () => {
    setShow(false);
  };

  const onTransitionEnd = (): void => {
    if (!show) {
      setIsrender(false);
    }
  };

  if (!isRender) {
    return null;
  }

  return (
    <div
      className={
        styles["submenu-wrapper"] +
        (submenuItems.length > 5 ? " " + styles["doubled"] : "")
      }
      style={{
        height: show ? ulRef.current?.offsetHeight : 0,
        opacity: show ? 1 : 0,
      }}
      onTransitionEnd={onTransitionEnd}
    >
      <div className={styles["submenu-row"]} ref={ulRef}>
        {submenuItems.length > 5 ? (
          <>
            <div className={styles["submenu-col"]}>
              {submenuItems.map((submenuItem, subIndex) => {
                return subIndex % 2 === 0 ? (
                  <div key={`submenu-item-index-${subIndex}`}>
                    <Link to={submenuItem.linkTo}>{submenuItem.linkTitle}</Link>
                  </div>
                ) : null;
              })}
            </div>
            <div className={styles["submenu-col"]}>
              {submenuItems.map((submenuItem, subIndex) => {
                return subIndex % 2 !== 0 ? (
                  <div key={`submenu-item-index-${subIndex}`}>
                    <Link to={submenuItem.linkTo}>{submenuItem.linkTitle}</Link>
                  </div>
                ) : null;
              })}
            </div>
          </>
        ) : (
          <div className={styles["submenu-col"]}>
            {submenuItems.map((submenuItem, subIndex) => (
              <div key={`submenu-item-index-${subIndex}`}>
                <Link to={submenuItem.linkTo}>{submenuItem.linkTitle}</Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SidebarSubmenuItemAnimation;
