import styles from "../../styles/pages/agents.module.scss";
import { useReducer } from "react";

import type { IAgentPccCredentialsResponse } from "../../models/agent-pcc-credentials.model";

import {
  searchParamsPrefix,
  tableDataPrefix,
} from "../../consts/agent-pcc-credentials.constant";

import agentPccCredentialsReducer, {
  createInitialState,
} from "../../reducers/master/agent-pcc-credential/agent-pcc-credential.reducer";

import { useSearchParams } from "../../hooks/useSearchParams";
import { useFilteredAgentPccCredentialsQuery } from "../../redux/apis/agent-pcc-credentials";

import Stepper from "../../components/stepper";
import Table from "../../components/table";

const AgentPccCredentials = () => {
  const searchParams = useSearchParams(searchParamsPrefix);
  const { isLoading, isSuccess, isError, data, error } =
    useFilteredAgentPccCredentialsQuery(searchParams);
  const [stateAPC] = useReducer(
    agentPccCredentialsReducer,
    null,
    createInitialState
  );

  return (
    <>
      <Stepper steps={stateAPC.steps} currentStep={stateAPC.step} />
      <h2>
        Master Data
        <span className="c-subtitle">Agent Credential (1G / 1S)</span>
      </h2>
      <div id={styles.AgentPccCredential}>
        <Table
          searchParamsPrefix={searchParamsPrefix}
          tableDataPrefix={tableDataPrefix}
          isLoading={isLoading}
          isSuccess={isSuccess}
          isError={isError}
          datas={
            data
              ? {
                  data: data.data.map((obj: IAgentPccCredentialsResponse) => {
                    const {
                      id,
                      pcc,
                      gds,
                      ticketPrinterId,
                      hardcopyPrinterId,
                      invoiceItineraryPrinterId,
                      username,
                      password,
                      branchId,
                    } = obj;
                    return {
                      id,
                      pcc,
                      gds,
                      ticketPrinterId,
                      hardcopyPrinterId,
                      invoiceItineraryPrinterId,
                      username,
                      password,
                      branchId,
                      agentName: obj.agent?.name,
                    };
                  }),
                  dataLength: data.dataLength,
                }
              : null
          }
          error={error}
        />
      </div>
    </>
  );
};

export default AgentPccCredentials;
