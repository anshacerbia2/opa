import { FC, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";
import { useAccountQuery } from "../redux/apis/auth/authApi";
import { signOut } from "../redux/slices/auth.slice";

interface IAuthenticatedRoutesProps {
  element: React.ReactNode;
}

const AuthenticatedRoutes: FC<IAuthenticatedRoutesProps> = ({ element }) => {
  const { data: account, isLoading, error } = useAccountQuery(undefined);
  const dispatch = useAppDispatch();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    dispatch(signOut());
    return <Navigate to="/login" replace={true} />;
  }

  return account ? <>{element}</> : null;
};

export default AuthenticatedRoutes;
