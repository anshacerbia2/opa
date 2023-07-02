import { FC, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";
import { useAccountQuery } from "../redux/apis/auth/authApi";

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
