import styles from "../../styles/pages/agents.module.scss";
import { useReducer } from "react";

import {
  searchParamsPrefix,
  tableDataPrefix,
} from "../../consts/agent-dtu-accounts.constant";

import agentDtuAccountsReducer, {
  createInitialState,
} from "../../reducers/master/agent-dtu-accounts/agent-dtu-accounts.reducer";

import { useSearchParams } from "../../hooks/useSearchParams";
import { useFilteredAgentDtuAccountsQuery } from "../../redux/apis/agent-dtu-accounts.api";

import Stepper from "../../components/stepper";
import Table from "../../components/table";

const AgentDtuAccounts = () => {
  const searchParams = useSearchParams(searchParamsPrefix);
  const { isLoading, isSuccess, isError, data, error } =
    useFilteredAgentDtuAccountsQuery(searchParams);
  const [stateADA] = useReducer(
    agentDtuAccountsReducer,
    null,
    createInitialState
  );

  return (
    <>
      <Stepper steps={stateADA.steps} currentStep={stateADA.step} />
      <h2>
        Master Data<span className="c-subtitle">Agent DTU Accounts</span>
      </h2>
      <div id={styles.OrganizationDtuAccount}>
        <Table
          searchParamsPrefix={searchParamsPrefix}
          tableDataPrefix={tableDataPrefix}
          isLoading={isLoading}
          isSuccess={isSuccess}
          isError={isError}
          datas={data}
          error={error}
        />
      </div>
    </>
  );
};

export default AgentDtuAccounts;
