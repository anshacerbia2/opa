import styles from "../../styles/pages/agents.module.scss";
import { useEffect, useReducer } from "react";

import {
  searchParamsPrefix,
  tableDataPrefix,
} from "../../consts/system-parameters.constant";

import systemParametersReducer, {
  createInitialState,
} from "../../reducers/master/system-parameters/system-parameters.reducer";

import { useSearchParams } from "../../hooks/useSearchParams";
import { useFilteredSystemParametersQuery } from "../../redux/apis/system-parameters.api";

import Stepper from "../../components/stepper";
import Table from "../../components/table";

const SystemParameters = () => {
  const searchParams = useSearchParams(searchParamsPrefix);
  const { isLoading, isSuccess, isError, data, error } =
    useFilteredSystemParametersQuery(searchParams);
  const [stateSP] = useReducer(
    systemParametersReducer,
    null,
    createInitialState
  );

  return (
    <>
      <Stepper steps={stateSP.steps} currentStep={stateSP.step} />
      <h2>
        Master Data<span className="c-subtitle">System Parameters</span>
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
        />
      </div>
    </>
  );
};

export default SystemParameters;
