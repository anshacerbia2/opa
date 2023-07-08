import styles from "../../styles/pages/agents.module.scss";
import { useEffect, useReducer, useState } from "react";
import { skipToken } from "@reduxjs/toolkit/dist/query";
import type { SkipToken } from "@reduxjs/toolkit/dist/query";

import {
  searchParamsPrefix,
  tableDataPrefix,
} from "../../consts/agents.constant";

import agentsReducer, {
  createInitialState,
} from "../../reducers/master/agents/agents.reducer";

import { useSearchParams } from "../../hooks/useSearchParams";
import {
  useGetFilteredAgentsQuery,
  useGetAgentQuery,
} from "../../redux/apis/agents.api";

import Stepper from "../../components/stepper";
import Table from "../../components/table";
import { useAppDispatch } from "../../redux/hooks";
import { showModal } from "../../redux/slices/global.slice";

const Agents = () => {
  const searchParams = useSearchParams(searchParamsPrefix);
  const [stateAgents] = useReducer(agentsReducer, null, createInitialState);
  const [selectedAgentId, setSelectedAgentId] = useState<number | SkipToken>(
    skipToken
  );
  const dispatch = useAppDispatch();

  const { isLoading, isSuccess, isError, data, error } =
    useGetFilteredAgentsQuery(searchParams);
  const getAgent = useGetAgentQuery(selectedAgentId);

  const handleCreateAgent = () => {
    dispatch(
      showModal({
        title: "Create an Agent",
        form: {
          type: "Create",
          prefix: tableDataPrefix,
          state: null,
          api: "createAgent",
        },
      })
    );
  };

  const handleEditAgent = (id: number) => {
    setSelectedAgentId(id);
    dispatch(
      showModal({
        title: "Edit an Agent",
        form: {
          type: "Update",
          prefix: tableDataPrefix,
          state: "agent",
          api: "updateAgent",
        },
      })
    );
  };

  return (
    <>
      <Stepper steps={stateAgents.steps} currentStep={stateAgents.step} />
      <h2>
        Master Data<span className="c-subtitle">Agents</span>
      </h2>
      <div id={styles.agents}>
        <Table
          searchParamsPrefix={searchParamsPrefix}
          tableDataPrefix={tableDataPrefix}
          isLoading={isLoading}
          isSuccess={isSuccess}
          isError={isError}
          datas={data}
          error={error}
          handleCreateData={handleCreateAgent}
          handleEditData={handleEditAgent}
        />
      </div>
    </>
  );
};

export default Agents;
