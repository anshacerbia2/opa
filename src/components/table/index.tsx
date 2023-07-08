import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import React, { useEffect } from "react";
import { IoPersonAdd } from "react-icons/io5";
import { SiMicrosoftexcel } from "react-icons/si";
import Pagination from "../pagination";

export interface ITableProps {
  searchParamsPrefix: string[];
  tableDataPrefix: {
    title: string;
    prefix: string;
  }[];
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  datas: any;
  error: FetchBaseQueryError | SerializedError | undefined;
  handleCreateData: () => void;
  handleEditData: (id: number) => void;
}

const Table = ({
  searchParamsPrefix = [],
  tableDataPrefix = [],
  isLoading,
  isSuccess,
  isError,
  datas,
  error,
  handleCreateData,
  handleEditData,
}: ITableProps) => {
  useEffect(() => {
    console.log(datas);
  }, []);

  const handleCreate = () => {
    handleCreateData();
  };

  const handleEdit = (id: number) => () => {
    handleEditData(id);
  };

  return (
    <div className="c-table-wrapper">
      <div className="c-table-utility">
        <button
          type="button"
          className="c-btn c-btn-primary"
          onClick={handleCreate}
        >
          <IoPersonAdd className="c-contain-icon" /> Create New
        </button>
        <button type="button" className="c-btn c-btn-primary">
          <SiMicrosoftexcel className="c-contain-icon" /> Export
        </button>
      </div>
      <div className="table-responsive mb2">
        <table className="table table-bordered">
          <thead>
            <tr>
              {tableDataPrefix.map((data) => {
                return <th key={`table-head-${data.title}`}>{data.title}</th>;
              })}
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan={tableDataPrefix.length + 1}>Loading...</td>
              </tr>
            ) : isError && error ? (
              <tr>
                <td colSpan={tableDataPrefix.length + 1}>
                  Oh no, there was an error
                </td>
              </tr>
            ) : isSuccess && datas ? (
              datas.data.length ? (
                datas.data.map((dataRow: any, rowIndex: number) => {
                  return (
                    <tr key={`data-row-${rowIndex}`}>
                      {tableDataPrefix.map((dataCol, colIndex) => {
                        return (
                          <td key={`data-col-${colIndex}`}>
                            {dataRow[dataCol.prefix]}
                          </td>
                        );
                      })}
                      <td>
                        <div className="c-table-action-wrapper">
                          <button
                            type="button"
                            className="c-btn c-btn-primary"
                            title="Edit"
                            onClick={handleEdit(dataRow.id)}
                          >
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M10.3544 11.4345L10.0029 11.079C9.9247 11.1563 9.87418 11.2572 9.85913 11.3661L10.3544 11.4345ZM16.9429 4.92002L17.2945 5.27557L17.2945 5.27557L16.9429 4.92002ZM18.96 6.91149L18.6 6.5645L18.96 6.91149ZM12.481 13.6335L12.5541 14.1281C12.6634 14.112 12.7643 14.0601 12.841 13.9805L12.481 13.6335ZM10 14L9.5047 13.9316C9.48316 14.0875 9.53629 14.2444 9.64811 14.3552C9.75992 14.466 9.91736 14.5176 10.0731 14.4946L10 14ZM18.8647 4.85417L19.1911 4.47539V4.47539L18.8647 4.85417ZM8 16.5C8.27614 16.5 8.5 16.2761 8.5 16C8.5 15.7238 8.27614 15.5 8 15.5V16.5ZM20 20.5C20.2761 20.5 20.5 20.2761 20.5 20C20.5 19.7238 20.2761 19.5 20 19.5V20.5ZM10.706 11.7901L17.2945 5.27557L16.5914 4.56448L10.0029 11.079L10.706 11.7901ZM18.6 6.5645L12.121 13.2865L12.841 13.9805L19.32 7.25847L18.6 6.5645ZM12.4079 13.1389L9.92693 13.5054L10.0731 14.4946L12.5541 14.1281L12.4079 13.1389ZM10.4953 14.0684L10.8497 11.503L9.85913 11.3661L9.5047 13.9316L10.4953 14.0684ZM18.5383 5.23294C18.9373 5.57678 18.9655 6.18525 18.6 6.5645L19.32 7.25847C20.084 6.46581 20.0251 5.19404 19.1911 4.47539L18.5383 5.23294ZM17.2945 5.27557C17.6346 4.93929 18.176 4.92073 18.5383 5.23294L19.1911 4.47539C18.4338 3.82284 17.3022 3.86162 16.5914 4.56448L17.2945 5.27557ZM8 15.5H6V16.5H8V15.5ZM6 20.5H20V19.5H6V20.5ZM3.5 18C3.5 19.3807 4.61929 20.5 6 20.5V19.5C5.17157 19.5 4.5 18.8284 4.5 18H3.5ZM6 15.5C4.61929 15.5 3.5 16.6193 3.5 18H4.5C4.5 17.1716 5.17157 16.5 6 16.5V15.5Z"
                                fill="#464455"
                              />
                            </svg>
                          </button>
                          <button className="c-btn c-btn-danger" title="Delete">
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5 6.77273H9.2M19 6.77273H14.8M9.2 6.77273V5.5C9.2 4.94772 9.64772 4.5 10.2 4.5H13.8C14.3523 4.5 14.8 4.94772 14.8 5.5V6.77273M9.2 6.77273H14.8M6.4 8.59091V15.8636C6.4 17.5778 6.4 18.4349 6.94673 18.9675C7.49347 19.5 8.37342 19.5 10.1333 19.5H13.8667C15.6266 19.5 16.5065 19.5 17.0533 18.9675C17.6 18.4349 17.6 17.5778 17.6 15.8636V8.59091M9.2 10.4091V15.8636M12 10.4091V15.8636M14.8 10.4091V15.8636"
                                stroke="#464455"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan={tableDataPrefix.length + 1}>
                    <div className="nodata">No data available</div>
                  </td>
                </tr>
              )
            ) : null}
          </tbody>
        </table>
      </div>
      {datas && (
        <Pagination
          searchParamsPrefix={searchParamsPrefix.filter(
            (value) => value !== "page"
          )}
          totalPage={Math.ceil(datas.dataLength / 10)}
        />
      )}
    </div>
  );
};

export default Table;
