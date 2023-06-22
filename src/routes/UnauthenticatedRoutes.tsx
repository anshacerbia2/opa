import { FC } from "react";
import { Navigate } from "react-router-dom";

interface IUnauthenticatedRoutesProps {
  element: React.ReactNode;
}

const UnauthenticatedRoutes: FC<IUnauthenticatedRoutesProps> = ({
  element,
}) => {
  const id_token =
    sessionStorage.getItem("id_token") || localStorage.getItem("id_token");
  return !id_token ? element : <Navigate to="/" />;
};

export default UnauthenticatedRoutes;
