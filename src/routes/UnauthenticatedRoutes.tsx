import { FC } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";

interface IUnauthenticatedRoutesProps {
  element: React.ReactNode;
}

const UnauthenticatedRoutes: FC<IUnauthenticatedRoutesProps> = ({
  element,
}) => {
  const auth = useAppSelector((state: RootState) => state.auth);
  const id_token =
    sessionStorage.getItem("id_token") || localStorage.getItem("id_token");

  // if (!id_token?.trim() || auth.error || !auth.account) {
  //   localStorage.removeItem("id_token");
  //   sessionStorage.removeItem("id_token");
  // }
  return element;
  // return !id_token?.trim() || auth.error || !auth.account ? (
  //   element
  // ) : (
  //   <Navigate to="/" replace={true} />
  // );
};

export default UnauthenticatedRoutes;
