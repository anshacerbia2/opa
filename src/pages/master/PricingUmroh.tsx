import styles from "../../styles/pages/agents.module.scss";
import { useReducer } from "react";

import type { IPricingUmrohResponse } from "../../models/pricing-umroh.model";

import {
  searchParamsPrefix,
  tableDataPrefix,
} from "../../consts/pricing-umroh.constant";

import pricingUmrohReducer, {
  createInitialState,
} from "../../reducers/master/pricing-umroh/pricing-umroh.reducer";

import { useSearchParams } from "../../hooks/useSearchParams";
import { useFilteredPricingUmrohQuery } from "../../redux/apis/pricing-umroh.api";

import Stepper from "../../components/stepper";
import Table from "../../components/table";

const PricingUmroh = () => {
  const searchParams = useSearchParams(searchParamsPrefix);
  const { isLoading, isSuccess, isError, data, error } =
    useFilteredPricingUmrohQuery(searchParams);
  const [statePU] = useReducer(pricingUmrohReducer, null, createInitialState);

  return (
    <>
      <Stepper steps={statePU.steps} currentStep={statePU.step} />
      <h2>
        Master Data<span className="c-subtitle">Pricing Umroh HB</span>
      </h2>
      <div id={styles.pricingUmroh}>
        <Table
          searchParamsPrefix={searchParamsPrefix}
          tableDataPrefix={tableDataPrefix}
          isLoading={isLoading}
          isSuccess={isSuccess}
          isError={isError}
          datas={
            data
              ? {
                  data: data.data.map((obj: IPricingUmrohResponse) => {
                    const { id, origin, destination, currency, amount } = obj;
                    return {
                      id,
                      origin,
                      destination,
                      currency,
                      amount,
                      status: obj.active ? "ACTIVE" : "NOT ACTIVE",
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

export default PricingUmroh;
