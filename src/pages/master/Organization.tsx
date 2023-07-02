import styles from "../../styles/components/organization.module.scss";
import React, { useReducer, useEffect } from "react";
import {
  IAgentResponse,
  useFilteredAgentsQuery,
} from "../../redux/apis/agents/agents.api";
import organizationReducer, {
  createInitialState,
} from "../../reducers/master/organization/organization.reducer";
import Stepper from "../../components/stepper";
import { useSearchParams } from "../../hooks/useSearchParams";
import { getCurrentPage } from "../../hooks/getCurrentPage";
import { Link } from "react-router-dom";
import { getPaginationItemLinks } from "../../hooks/getPaginationItemsLinks";
import Pagination from "../../components/pagination";
import Table from "../../components/table";

const searchParamsPrefix = ["page", "type", "name", "city"];

const Organization = () => {
  const searchParams = useSearchParams(searchParamsPrefix);

  const {
    data: agents,
    isSuccess: isSuccessAgents,
    isError: isErrorAgents,
    isLoading: isLoadingAgents,
    error: errorAgents,
  } = useFilteredAgentsQuery(searchParams);
  const [stateOrganization, dispatchOrganization] = useReducer(
    organizationReducer,
    null,
    createInitialState
  );

  useEffect(() => {
    // console.log("Current page:", currentPage);
  }, [isSuccessAgents]);
  return (
    <>
      {" "}
      <Stepper
        steps={stateOrganization.steps}
        currentStep={stateOrganization.step}
      />
      <h2>
        Master Data<span className="c-subtitle">Organization</span>
      </h2>
      <div id={styles.organization}>
        <Table
          searchParamsPrefix={searchParamsPrefix}
          dataPrefix={[
            { title: "ID", prefix: "id" },
            { title: "Type", prefix: "type" },
            { title: "Name", prefix: "name" },
            { title: "Country", prefix: "country" },
            { title: "City", prefix: "city" },
            { title: "Address", prefix: "address" },
            { title: "Email", prefix: "emailDomain" },
            { title: "Phone", prefix: "phone" },
            { title: "NPWP", prefix: "npwp" },
          ]}
          error={errorAgents}
          isLoading={isLoadingAgents}
          datas={agents}
        />
      </div>
    </>
  );
};

export default Organization;
