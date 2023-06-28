import { FC, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";
import { useAccountQuery } from "../redux/apis/auth/authApi";

interface IAuthenticatedRoutesProps {
  element: React.ReactNode;
}

const AuthenticatedRoutes: FC<IAuthenticatedRoutesProps> = ({ element }) => {
  const { data: account, error, isLoading } = useAccountQuery(undefined);

  useEffect(() => {
    // Check if account data exists
    if (account) {
      // Perform any additional actions with account data if needed
      console.log("Account Data:", account);
    }
  }, [account]);

  if (isLoading) {
    // Optional: Show a loading indicator or skeleton screen
    return <div>Loading...</div>;
  }

  if (error) {
    // Redirect to login page if an error occurred
    return <Navigate to="/login" replace={true} />;
  }

  // Render the protected element if the account data is available
  return account ? <>{element}</> : null;
};

export default AuthenticatedRoutes;
