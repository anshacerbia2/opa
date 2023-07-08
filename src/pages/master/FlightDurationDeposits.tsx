import styles from "../../styles/pages/agents.module.scss";
import { useReducer } from "react";

import {
  searchParamsPrefix,
  tableDataPrefix,
} from "../../consts/flight-duration-deposits.constant";

import flightDurationDepositsReducer, {
  createInitialState,
} from "../../reducers/master/flight-duration-deposits/flight-duration-deposits.reducer";

import { useSearchParams } from "../../hooks/useSearchParams";
import { useFilteredFlightDurationDepositsQuery } from "../../redux/apis/flight-duration-deposits.api";

import Stepper from "../../components/stepper";
import Table from "../../components/table";

const FlightDurationDeposits = () => {
  const searchParams = useSearchParams(searchParamsPrefix);
  const { isLoading, isSuccess, isError, data, error } =
    useFilteredFlightDurationDepositsQuery(searchParams);
  const [stateFDD] = useReducer(
    flightDurationDepositsReducer,
    null,
    createInitialState
  );

  return (
    <>
      <Stepper steps={stateFDD.steps} currentStep={stateFDD.step} />
      <h2>
        Master Data<span className="c-subtitle">Flight Duration Deposits</span>
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

export default FlightDurationDeposits;
