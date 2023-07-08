import { FC, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";
import { useAccountQuery } from "../redux/apis/auth/authApi";
import { clearError, signOut } from "../redux/slices/auth.slice";

interface IAuthenticatedRoutesProps {
  element: React.ReactNode;
}

const AuthenticatedRoutes: FC<IAuthenticatedRoutesProps> = ({ element }) => {
  const idToken = useAppSelector((state: RootState) => state.auth.idToken);
  const { data: account, isLoading, error } = useAccountQuery(undefined);
  const [isValidUser, setIsValidUser] = useState(true);
  const dispatch = useAppDispatch();

  useEffect(() => {
    // console.log(idToken, account, error, isValidUser, ">>>");

    if (error) {
      setIsValidUser(false);
    }
  }, [account, error]);

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  if (error && !isValidUser) {
    dispatch(signOut());
    dispatch(clearError());
    return <Navigate to="/login" replace={true} />;
  } else {
    return <>{element}</>;
  }
};

export default AuthenticatedRoutes;
