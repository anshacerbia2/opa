import { createBrowserRouter } from "react-router-dom";
import AuthenticatedRoutes from "./AuthenticatedRoutes";
import UnauthenticatedRoutes from "./UnauthenticatedRoutes";
import MainLayout from "../components/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SearchPNR from "../pages/SearchPNR";

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
    ],
  },
  { path: "/login", element: <UnauthenticatedRoutes element={<Login />} /> },
]);

export default router;
