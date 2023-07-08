import styles from "../../styles/pages/agents.module.scss";
import { useReducer } from "react";

import type { IAmadeusMultiCredentialsResponse } from "../../models/amadeus-multi-credentials.model";

import {
  searchParamsPrefix,
  tableDataPrefix,
} from "../../consts/amadeus-multi-credentials.constant";

import amadeusMultiCredentialReducer, {
  createInitialState,
} from "../../reducers/master/amadeus-multi-credential/amadeus-multi-credential.reducer";

import { useSearchParams } from "../../hooks/useSearchParams";
import { useFilteredAmadeusMultiCredentialsQuery } from "../../redux/apis/amadeus-multi-credentials.api";

import Stepper from "../../components/stepper";
import Table from "../../components/table";

const AmadeusMultiCredentials = () => {
  const searchParams = useSearchParams(searchParamsPrefix);
  const { isLoading, isSuccess, isError, data, error } =
    useFilteredAmadeusMultiCredentialsQuery(searchParams);
  const [stateAMC] = useReducer(
    amadeusMultiCredentialReducer,
    null,
    createInitialState
  );

  return (
    <>
      <Stepper steps={stateAMC.steps} currentStep={stateAMC.step} />
      <h2>
        Master Data<span className="c-subtitle">Agent Credential (1A)</span>
      </h2>
      <div id={styles.AmadeusMultiCredential}>
        <Table
          searchParamsPrefix={searchParamsPrefix}
          tableDataPrefix={tableDataPrefix}
          isLoading={isLoading}
          isSuccess={isSuccess}
          isError={isError}
          datas={
            data
              ? {
                  data: data.data.map(
                    (obj: IAmadeusMultiCredentialsResponse) => {
                      const { id, officeId, description } = obj;
                      return {
                        id,
                        officeId,
                        description,
                        agentName: obj.agent?.name,
                      };
                    }
                  ),
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

export default AmadeusMultiCredentials;
