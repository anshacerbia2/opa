import { FC, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";
import { useAccountQuery } from "../redux/apis/auth/authApi";
import { clearError } from "../redux/slices/auth.slice";

interface IUnauthenticatedRoutesProps {
  element: React.ReactNode;
}

const UnauthenticatedRoutes: FC<IUnauthenticatedRoutesProps> = ({
  element,
}) => {
  const { idToken } = useAppSelector((state: RootState) => state.auth);

  if (!idToken?.trim()) {
    return <>{element}</>;
  } else {
    return <Navigate to="/" replace={true} />;
  }
};

export default UnauthenticatedRoutes;
