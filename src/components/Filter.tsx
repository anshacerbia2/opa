import styles from "../styles/components/filter.module.scss";
import { FC, useEffect, useState } from "react";
import type { IFilter } from "../models/filter.model";

const Filter: FC<IFilter> = ({ isExpanded, toggleExpand }) => {
  const [className, setClassNme] = useState({
    container: styles.filter,
    toggleMenu: styles["toggle-menu"],
  });

  useEffect(() => {
    let updatedClass = {
      container: styles.filter,
      toggleMenu: styles["toggle-menu"],
    };
    if (isExpanded) {
      updatedClass.container += ` ${styles.expanded}`;
    } else {
      updatedClass.toggleMenu += ` ${styles.opened}`;
    }
    setClassNme(updatedClass);
  }, [isExpanded]);

  return (
    <div className={className.container}>
      <div className={className.toggleMenu} onClick={toggleExpand}>
        <div className={styles["burger-wrapper"]}>
          <div>
            <div></div>
          </div>
          <div>
            <div></div>
          </div>
          <div>
            <div></div>
          </div>
        </div>
      </div>
      <div className={styles["user-info-wrapper"]}>
        <div className={styles["user-info"]}>
          <div className={styles["user-photo"]}>
            <img src="img/user-photo.jpg" />
          </div>
          <div className={styles["user-dropdown-wrapper"]}>
            <svg
              className={styles["svg-user"]}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.00012 13.5L12 4V10.5H16.9999L12 20L12.0002 13.5H7.00012Z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className={styles["user-dropdown-menu"]}>
            <ul>
              <li>
                <a href="profile.html">
                  <svg
                    className="inline"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 8C16 10.2091 14.2091 12 12 12C9.79086 12 8 10.2091 8 8C8 5.79086 9.79086 4 12 4C14.2091 4 16 5.79086 16 8Z"
                      stroke="#464455"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14.6824 14H9.31765C8.83513 14 8.59387 14 8.37806 14.0461C7.63116 14.2056 6.9853 14.7661 6.62346 15.569C6.51891 15.8009 6.44262 16.0765 6.29003 16.6278C6.10668 17.2901 6.01501 17.6213 6.00261 17.8884C5.95888 18.8308 6.46818 19.6817 7.22441 19.9297C7.43875 20 7.72864 20 8.30844 20H15.6916C16.2714 20 16.5613 20 16.7756 19.9297C17.5318 19.6817 18.0411 18.8308 17.9974 17.8884C17.985 17.6213 17.8933 17.2901 17.71 16.6278C17.5574 16.0765 17.4811 15.8009 17.3765 15.569C17.0147 14.7661 16.3688 14.2056 15.6219 14.0461C15.4061 14 15.1649 14 14.6824 14Z"
                      stroke="#464455"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="inline">Profile</div>
                </a>
              </li>
              <li>
                <a href="#">
                  <svg
                    className="inline"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 16H15M9 18H12M13.5 7.5C13.5 8.32843 12.8284 9 12 9C11.1716 9 10.5 8.32843 10.5 7.5C10.5 6.67157 11.1716 6 12 6C12.8284 6 13.5 6.67157 13.5 7.5ZM10.6588 11H13.3412C13.5824 11 13.7031 11 13.811 11.0154C14.1844 11.0685 14.5074 11.2554 14.6883 11.523C14.7405 11.6003 14.7787 11.6922 14.855 11.8759C14.9467 12.0967 14.9925 12.2071 14.9987 12.2961C15.0206 12.6103 14.7659 12.8939 14.3878 12.9766C14.2806 13 14.1357 13 13.8458 13H10.1542C9.86432 13 9.71937 13 9.61221 12.9766C9.23409 12.8939 8.97944 12.6103 9.00131 12.2961C9.0075 12.2071 9.05334 12.0967 9.14502 11.8759C9.22131 11.6922 9.25945 11.6003 9.31173 11.523C9.49265 11.2554 9.81558 11.0685 10.189 11.0154C10.2969 11 10.4176 11 10.6588 11ZM8 20H16C16.9428 20 17.4142 20 17.7071 19.7071C18 19.4142 18 18.9428 18 18V6C18 5.05719 18 4.58579 17.7071 4.29289C17.4142 4 16.9428 4 16 4H8C7.05719 4 6.58579 4 6.29289 4.29289C6 4.58579 6 5.05719 6 6V18C6 18.9428 6 19.4142 6.29289 19.7071C6.58579 20 7.05719 20 8 20Z"
                      stroke="#464455"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="inline">DTU Account</div>
                </a>
              </li>
              <li>
                <a href="change-psw.html">
                  <svg
                    className="inline"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.6873 14.2222C19.8909 13.5167 20 12.7711 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C14.3413 20 16.4476 18.9943 17.9106 17.3912M19.6873 14.2222L19 13M19.6873 14.2222L20.75 13.25M10 12V10C10 8.89543 10.8954 8 12 8C13.1046 8 14 8.89543 14 10V12M10 12H14M10 12C9.44772 12 9 12.4477 9 13V15C9 15.5523 9.44772 16 10 16H14C14.5523 16 15 15.5523 15 15V13C15 12.4477 14.5523 12 14 12"
                      stroke="#464455"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="inline">Change Password</div>
                </a>
              </li>
              <li>
                <a href="#">
                  <svg
                    className="inline"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 4H5C4.44772 4 4 4.44772 4 5V8M16 4H19C19.5523 4 20 4.44772 20 5V8M4 16V19C4 19.5523 4.44772 20 5 20H8M20 16V19C20 19.5523 19.5523 20 19 20H16M6 12C6 12 7.71429 8 12 8C16.2857 8 18 12 18 12C18 12 16.2857 16 12 16C7.71429 16 6 12 6 12ZM14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z"
                      stroke="#464455"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="inline">User Guide</div>
                </a>
              </li>
              <li>
                <a href="login.html">
                  <svg
                    className="inline"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 12H18M18 12L15.5 9.77778M18 12L15.5 14.2222M18 7.11111V5C18 4.44772 17.5523 4 17 4H7C6.44772 4 6 4.44772 6 5V19C6 19.5523 6.44772 20 7 20H17C17.5523 20 18 19.5523 18 19V16.8889"
                      stroke="#464455"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="inline">Log Out</div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles["user-name semibold"]}>Admin</div>
        <div className={styles["user-email"]}>admin@gmail.com</div>
      </div>

      <div className={styles["filter-box"]}>
        <div className="inline-space mb10px">
          <div className="filter-title bold">Filter</div>
          <a href="#" className="reset-filter" title="Reset">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.3935 5.37371C18.0253 6.70569 19.8979 10.7522 18.5761 14.4118C17.6363 17.0135 15.335 18.7193 12.778 19.0094M12.778 19.0094L13.8253 17.2553M12.778 19.0094L14.4889 20M9.60651 18.6263C5.97465 17.2943 4.10205 13.2478 5.42394 9.58823C6.36371 6.98651 8.66504 5.28075 11.222 4.99059M11.222 4.99059L10.1747 6.74471M11.222 4.99059L9.51114 4"
                stroke="#464455"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
        <div className="form-group">
          <label>PNR</label>
          <input type="text" name="" className="form-control" />
        </div>
        <div className="form-group group-checkbox">
          <label>GDS</label>
          <div className="custom-checkbox inline">
            <input type="checkbox" className="hidden-input" id="checkbox1" />
            <label htmlFor="checkbox1" className="semibold">
              <span className="mr5px">
                <img src="img/ic_checklist.png" />
              </span>{" "}
              Galileo
            </label>
          </div>
          <div className="custom-checkbox inline">
            <input type="checkbox" className="hidden-input" id="checkbox2" />
            <label htmlFor="checkbox2" className="semibold">
              <span className="mr5px">
                <img src="img/ic_checklist.png" />
              </span>{" "}
              Sabre
            </label>
          </div>
          <div className="custom-checkbox inline">
            <input type="checkbox" className="hidden-input" id="checkbox3" />
            <label htmlFor="checkbox3" className="semibold">
              <span className="mr5px">
                <img src="img/ic_checklist.png" />
              </span>{" "}
              Amadeus/AIDL
            </label>
          </div>
        </div>
        <div className="form-group">
          <label>Date From</label>
          <div className="calendar-wrapper">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="calendar-icon"
            >
              <g id="insert_invitation_24px">
                <path
                  id="icon/editor/insert_invitation_24px"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18 4H19C20.1 4 21 4.9 21 6V20C21 21.1 20.1 22 19 22H5C3.89 22 3 21.1 3 20L3.01 6C3.01 4.9 3.89 4 5 4H6V2H8V4H16V2H18V4ZM5 10V20H19V10H5ZM19 8H5V6H19V8ZM12 13H17V18H12V13Z"
                />
              </g>
            </svg>
            <div className="form-group">
              <input
                type="text"
                autoComplete="off"
                name="from"
                className="form-control calendar js-datepicker datepicker-from"
              />
            </div>
          </div>
        </div>
        <div className="form-group">
          <label>Date To</label>
          <div className="calendar-wrapper">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="calendar-icon"
            >
              <g id="insert_invitation_24px">
                <path
                  id="icon/editor/insert_invitation_24px"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18 4H19C20.1 4 21 4.9 21 6V20C21 21.1 20.1 22 19 22H5C3.89 22 3 21.1 3 20L3.01 6C3.01 4.9 3.89 4 5 4H6V2H8V4H16V2H18V4ZM5 10V20H19V10H5ZM19 8H5V6H19V8ZM12 13H17V18H12V13Z"
                />
              </g>
            </svg>
            <div className="form-group">
              <input
                type="text"
                autoComplete="off"
                name="from"
                className="form-control calendar js-datepicker datepicker-to"
              />
            </div>
          </div>
        </div>
        <a href="#" className="btn btn-default">
          Search
        </a>
      </div>
    </div>
  );
};

export default Filter;
