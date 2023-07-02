import { createBrowserRouter } from "react-router-dom";
import AuthenticatedRoutes from "./AuthenticatedRoutes";
import UnauthenticatedRoutes from "./UnauthenticatedRoutes";
import MainLayout from "../components/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SearchPNR from "../pages/SearchPNR";
import Master from "../pages/master";
import MasterLayout from "../components/MasterLayout";
import Organization from "../pages/master/Organization";
import OrganizationAgreement from "../pages/master/OrganizationAgreement";
import OrganizationDtuAccount from "../pages/master/OrganizationDtuAccount";
const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthenticatedRoutes element={<MainLayout />} />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "search-pnr",
        element: <SearchPNR />,
      },
      {
        path: "master",
        element: <MasterLayout />,
        children: [
          {
            path: "",
            element: <Master />,
          },
          {
            path: "organization",
            element: <Organization />,
          },
          {
            path: "organization-agreement",
            element: <OrganizationAgreement />,
          },
          {
            path: "organization-dtu-account",
            element: <OrganizationDtuAccount />,
          },
        ],
      },
    ],
  },
  { path: "/login", element: <UnauthenticatedRoutes element={<Login />} /> },
]);

export default router;
