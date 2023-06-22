import { FC, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";
import { getAuthorization } from "../redux/features/authorizationSlice";

interface IAuthenticatedRoutesProps {
  element: React.ReactNode;
}

const AuthenticatedRoutes: FC<IAuthenticatedRoutesProps> = ({ element }) => {
  const authentication = useAppSelector(
    (state: RootState) => state.authentication
  );
  const authorization = useAppSelector(
    (state: RootState) => state.authorization
  );
  const dispatch = useAppDispatch();
  const id_token =
    sessionStorage.getItem("id_token") || localStorage.getItem("id_token");

  useEffect(() => {
    // Fetch account
    const fetchAccount = async () => {
      try {
        if (id_token) {
          await dispatch(getAuthorization(id_token));
        }
      } catch (error) {
        console.log("ERROR on AuthenticatedRoutes:", error);
      }
    };
    // Refetch when page reloaded
    if (id_token && !authorization.account) {
      fetchAccount();
    }
  }, [id_token, dispatch, authentication, authorization]);
  return true ? element : <Navigate to="/login" />;
};

export default AuthenticatedRoutes;
