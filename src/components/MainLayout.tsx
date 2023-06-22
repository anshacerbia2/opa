import { useState, useLayoutEffect } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import FilterContent from "./Filter";

const MainLayout = () => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [isFilterExpanded, setIsFilterExpanded] = useState(false);

  const [dashboardContainerClass, setDashboardContainerClass] = useState(
    "c-dashboard-container"
  );

  useLayoutEffect(() => {
    let cName = "c-dashboard-container";
    if (isSidebarExpanded) cName += " shrink-left";
    if (isFilterExpanded) cName += " shrink-right";
    setDashboardContainerClass(cName);
  }, [isSidebarExpanded, isFilterExpanded]);

  const toggleSidebar = () => {
    setIsSidebarExpanded((prevExpanded) => !prevExpanded);
  };

  const toggleFilter = () => {
    setIsFilterExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <div className="c-global-container">
      <Sidebar isExpanded={isSidebarExpanded} toggleExpand={toggleSidebar} />
      <div className={dashboardContainerClass}>
        <main className={"c-main-content"}>
          <Outlet />
        </main>
      </div>
      <FilterContent
        isExpanded={isFilterExpanded}
        toggleExpand={toggleFilter}
      />
    </div>
  );
};

export default MainLayout;
