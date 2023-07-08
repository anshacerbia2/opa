import styles from "../../styles/pages/agents.module.scss";
import { useReducer } from "react";

import {
  searchParamsPrefix,
  tableDataPrefix,
} from "../../consts/bank-identification-numbers.constant";

import bankIdentificationNumbersReducer, {
  createInitialState,
} from "../../reducers/master/bank-identification-numbers/bank-identification-numbers.reducer";

import { useSearchParams } from "../../hooks/useSearchParams";
import { useFilteredBankIdentificationNumbersQuery } from "../../redux/apis/bank-idntification-numbers.api";

import Stepper from "../../components/stepper";
import Table from "../../components/table";

const BankIdentificationNumbers = () => {
  const searchParams = useSearchParams(searchParamsPrefix);
  const { isLoading, isSuccess, isError, data, error } =
    useFilteredBankIdentificationNumbersQuery(searchParams);
  const [stateBIN] = useReducer(
    bankIdentificationNumbersReducer,
    null,
    createInitialState
  );

  return (
    <>
      <Stepper steps={stateBIN.steps} currentStep={stateBIN.step} />
      <h2>
        Master Data<span className="c-subtitle">BIN Setting</span>
      </h2>
      <div id={styles.bankIdentificationNumbers}>
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

export default BankIdentificationNumbers;
