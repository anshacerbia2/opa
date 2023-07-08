import { createBrowserRouter } from "react-router-dom";
import AuthenticatedRoutes from "./AuthenticatedRoutes";
import UnauthenticatedRoutes from "./UnauthenticatedRoutes";
import MainLayout from "../components/MainLayout";
import MasterLayout from "../components/MasterLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SearchPNR from "../pages/SearchPNR";
import Master from "../pages/master";
import Agents from "../pages/master/Agents";
import AgentDtuAccounts from "../pages/master/AgentDtuAccounts";
import AmadeusMultiCredentials from "../pages/master/AmadeusMultiCredentials";
import AgentPccCredentials from "../pages/master/AgentPccCredentials";
import AgentCommissionAgreements from "../pages/master/AgentCommissionAgreements";
import ApiCredentials from "../pages/master/ApiCredentials";
import SystemParameters from "../pages/master/SystemParameters";
import BankIdentificationNumbers from "../pages/master/BankIdentificationNumbers";
import FlightDurationDeposits from "../pages/master/FlightDurationDeposits";
import PricingUmroh from "../pages/master/PricingUmroh";

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
            path: "agents",
            element: <Agents />,
          },
          {
            path: "agent-dtu-accounts",
            element: <AgentDtuAccounts />,
          },
          {
            path: "amadeus-multi-credentials",
            element: <AmadeusMultiCredentials />,
          },
          {
            path: "agent-pcc-credentials",
            element: <AgentPccCredentials />,
          },
          {
            path: "agent-commission-agreements",
            element: <AgentCommissionAgreements />,
          },
          {
            path: "api-credentials",
            element: <ApiCredentials />,
          },
          {
            path: "system-parameters",
            element: <SystemParameters />,
          },
          {
            path: "bank-identification-numbers",
            element: <BankIdentificationNumbers />,
          },
          {
            path: "flight-duration-deposits",
            element: <FlightDurationDeposits />,
          },
          {
            path: "pricing-umroh-hb",
            element: <PricingUmroh />,
          },
        ],
      },
    ],
  },
  { path: "/login", element: <UnauthenticatedRoutes element={<Login />} /> },
]);

export default router;
