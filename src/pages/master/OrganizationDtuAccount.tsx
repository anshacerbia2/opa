import styles from "../../styles/components/organization.module.scss";
import React, { useReducer, useEffect } from "react";
import Stepper from "../../components/stepper";
import { useSearchParams } from "../../hooks/useSearchParams";
import Table from "../../components/table";
import { useFilteredAgentDtuAccountsQuery } from "../../redux/apis/agents/agent-dtu-accounts.api";
import organizationDtuAccountsReducer, {
  createInitialState,
} from "../../reducers/master/organization-dtu-accounts/organization-dtu-accounts.reducer";

const searchParamsPrefix = ["page", "name", "gosCode", "nogosName", "status"];

const OrganizationDtuAccount = () => {
  const searchParams = useSearchParams(searchParamsPrefix);
  const { data, isLoading, error } =
    useFilteredAgentDtuAccountsQuery(searchParams);
  const [stateOrganizationDtuAccount, dispatchOrganizationDtuAccount] =
    useReducer(organizationDtuAccountsReducer, null, createInitialState);

  return (
    <>
      <Stepper
        steps={stateOrganizationDtuAccount.steps}
        currentStep={stateOrganizationDtuAccount.step}
      />
      <h2>
        Master Data<span className="c-subtitle">Organization DTU Accounts</span>
      </h2>
      <div id={styles.OrganizationDtuAccount}>
        <Table
          searchParamsPrefix={searchParamsPrefix}
          dataPrefix={[
            { title: "ID", prefix: "id" },
            { title: "Tour Code", prefix: "tourCode" },
            { title: "GOS Code", prefix: "gosCode" },
            { title: "GOS Name", prefix: "gosName" },
            { title: "GOS Pic", prefix: "gosPic" },
            { title: "GOS Address", prefix: "gosAddress" },
            { title: "GOS Phone", prefix: "gosPhone" },
            { title: "GOS Fax", prefix: "gosFax" },
            { title: "GOS Email", prefix: "gosEmail" },
            { title: "GOS Currency", prefix: "gosCurrency" },
            { title: "GOS Bold", prefix: "gosBold" },
            { title: "GOS Exp. Date", prefix: "gosExpDate" },
            { title: "GOS Mobile Phone", prefix: "gosMobilePhone" },
            { title: "GOS NPWP", prefix: "gosNpwp" },
            { title: "Status", prefix: "statusActive" },
          ]}
          error={error}
          isLoading={isLoading}
          datas={data}
        />
      </div>
    </>
  );
};

export default OrganizationDtuAccount;
