import React from "react";
import { Outlet } from "react-router-dom";

type Props = {};

const MasterLayout = (props: Props) => {
  return <Outlet />;
};

export default MasterLayout;
