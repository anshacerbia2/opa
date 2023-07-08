import styles from "../../styles/pages/agents.module.scss";
import { useReducer } from "react";

import type { IAgentCommissionAgreementsResponse } from "../../models/agent-commission-agreements.model";

import {
  searchParamsPrefix,
  tableDataPrefix,
} from "../../consts/agent-commission-agreements.constant";

import agentCommissionAgreementsReducer, {
  createInitialState,
} from "../../reducers/master/agent-commission-agreements/agent-commission-agreements.reducer";

import { useSearchParams } from "../../hooks/useSearchParams";
import { useFilteredAgentCommissionAgreementsQuery } from "../../redux/apis/agent-commission-agreements.api";

import Stepper from "../../components/stepper";
import Table from "../../components/table";

const AgentCommissionAgreements = () => {
  const searchParams = useSearchParams(searchParamsPrefix);
  const { isLoading, isSuccess, isError, data, error } =
    useFilteredAgentCommissionAgreementsQuery(searchParams);
  const [stateACG] = useReducer(
    agentCommissionAgreementsReducer,
    null,
    createInitialState
  );

  return (
    <>
      <Stepper steps={stateACG.steps} currentStep={stateACG.step} />
      <h2>
        Master Data<span className="c-subtitle">Organization Agreement</span>
      </h2>
      <div id={styles.organizationAgreement}>
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
                    (obj: IAgentCommissionAgreementsResponse) => {
                      const {
                        id,
                        unitOwner,
                        iataNo,
                        agreementNo,
                        mslDom,
                        mslIntl,
                        start,
                        end,
                        domCommission,
                        intlCommission,
                        gds,
                      } = obj;
                      return {
                        id,
                        unitOwner,
                        iataNo,
                        agreementNo,
                        mslDom,
                        mslIntl,
                        start,
                        end,
                        domCommission,
                        intlCommission,
                        gds,
                        agentPcc: obj.agentPccCredential?.pcc,
                        amadeusOid: obj.amadeusMultiCredential?.officeId,
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

export default AgentCommissionAgreements;
