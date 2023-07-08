import styles from "../../styles/pages/agents.module.scss";
import { useReducer } from "react";

import {
  searchParamsPrefix,
  tableDataPrefix,
} from "../../consts/api-credentials.constant";

import type { IApiCredentialsResponse } from "../../models/api-credentials.model";

import apiCredentialsReducer, {
  createInitialState,
} from "../../reducers/master/api-credentials/api-credentials.reducer";

import { useSearchParams } from "../../hooks/useSearchParams";
import { useFilteredApiCredentialsQuery } from "../../redux/apis/api-credentials.api";

import Stepper from "../../components/stepper";
import Table from "../../components/table";

const ApiCredentials = () => {
  const searchParams = useSearchParams(searchParamsPrefix);
  const { isLoading, isSuccess, isError, data, error } =
    useFilteredApiCredentialsQuery(searchParams);
  const [stateAC] = useReducer(apiCredentialsReducer, null, createInitialState);

  return (
    <>
      <Stepper steps={stateAC.steps} currentStep={stateAC.step} />
      <h2>
        Master Data<span className="c-subtitle">Api Credentials</span>
      </h2>
      <div id={styles.apiCredentials}>
        <Table
          searchParamsPrefix={searchParamsPrefix}
          tableDataPrefix={tableDataPrefix}
          isLoading={isLoading}
          isSuccess={isSuccess}
          isError={isError}
          datas={
            data
              ? {
                  data: data.data.map((obj: IApiCredentialsResponse) => {
                    const {
                      id,
                      username,
                      password,
                      key,
                      createDateTime,
                      createdBy,
                    } = obj;
                    return {
                      id,
                      username,
                      password,
                      key,
                      createDateTime,
                      createdBy,
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

export default ApiCredentials;
