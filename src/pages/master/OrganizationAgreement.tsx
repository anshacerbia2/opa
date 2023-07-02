import styles from "../../styles/components/organization.module.scss";
import React, { useReducer, useEffect } from "react";
import Stepper from "../../components/stepper";
import { useSearchParams } from "../../hooks/useSearchParams";
import Table from "../../components/table";
import { useFilteredAgentCommissionAgreementsQuery } from "../../redux/apis/agents/agent-commission-agreements.api";
import organizationAgreementReducer, {
  createInitialState,
} from "../../reducers/master/organization-agreement/organization-agreement.reducer";

const searchParamsPrefix = [
  "page",
  "unitOwner",
  "iata",
  "no", // data.agreementNo
  "dateFrom", // data.start
  "dateTo", // data.end
  "agentName", // data.agentPccCredential.agent.name or data.amadeusMultiCredential.agent.name
  "oid", // data.amadeusMultiCredential.officeId
];

const OrganizationAgreement = () => {
  const searchParams = useSearchParams(searchParamsPrefix);
  const {
    data: agentCommission,
    isSuccess: isSuccessAgentCommission,
    isError: isErrorAgentCommission,
    isLoading: isLoadingAgentCommission,
    error: errorAgentCommission,
  } = useFilteredAgentCommissionAgreementsQuery(searchParams);
  const [stateOrganizationAgreement, dispatchOrganizationAgreement] =
    useReducer(organizationAgreementReducer, null, createInitialState);

  return (
    <>
      <Stepper
        steps={stateOrganizationAgreement.steps}
        currentStep={stateOrganizationAgreement.step}
      />
      <h2>
        Master Data<span className="c-subtitle">Organization Agreement</span>
      </h2>
      <div id={styles.organizationAgreement}>
        <Table
          searchParamsPrefix={searchParamsPrefix}
          dataPrefix={[
            { title: "ID", prefix: "id" },
            { title: "Unit Owner", prefix: "unitOwner" },
            { title: "IATA No.", prefix: "iataNo" },
            { title: "Agreement No.", prefix: "agreementNo" },
            { title: "MSL Domestic", prefix: "mslDom" },
            { title: "MSL International", prefix: "mslIntl" },
            { title: "Agreement Start Date", prefix: "start" },
            { title: "Agreement End Date", prefix: "end" },
            { title: "Domestic Commission", prefix: "domCommission" },
            { title: "International Commission", prefix: "intlCommission" },
            { title: "GDS", prefix: "gds" },
            { title: "Glileo/Sabre PCC", prefix: "agentPcc" },
            { title: "Amaedus Office ID", prefix: "amadeusOid" },
          ]}
          error={errorAgentCommission}
          isLoading={isLoadingAgentCommission}
          datas={
            agentCommission
              ? {
                  data: agentCommission.data.map((obj: any) => {
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
                      agentPcc:
                        obj.amadeusMultiCredential?.agent.name ||
                        obj.agentPccCredential?.agent.name,
                      amadeusOid: obj.amadeusMultiCredential?.officeId,
                    };
                  }),
                  dataLength: agentCommission.dataLength,
                }
              : null
          }
        />
      </div>
    </>
  );
};

export default OrganizationAgreement;
