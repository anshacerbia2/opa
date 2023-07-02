import styles from "../styles/components/search-pnr.module.scss";
import { useEffect, useReducer } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";

import searchPnrReducer, {
  Action,
  createInitialState,
} from "../reducers/searchPNR/searchPNR.reducer";
import {
  initGDS,
  initOfficeIds,
  setGDS,
  setOfficeId,
  setPNR,
} from "../reducers/searchPNR/searchPNR.action";
import Stepper from "../components/stepper/index.tsx";
import AmadeusMultiCredentialsApis from "../redux/apis/gds/amadeus-multi-credentials.api.ts";
import GdsApis from "../redux/apis/gds/gds.api.ts";

const SearchPNR = () => {
  const account = useAppSelector((state: RootState) => state.auth);
  const [statePNR, dispatchPNR] = useReducer(
    searchPnrReducer,
    null,
    createInitialState
  );

  useEffect(() => {
    if (account) {
      const fetchOfficeIds = async () => {
        try {
          const response = await AmadeusMultiCredentialsApis.getOfficeIds();
          const officeIds = response.map((obj: any) => {
            return obj.officeId;
          });
          return officeIds;
        } catch (error) {
          return error;
        }
      };

      const fetchData = async () => {
        dispatchPNR(initGDS(account));
        const response = await fetchOfficeIds();
        dispatchPNR(initOfficeIds(response));
      };

      fetchData();
    }
  }, []);

  useEffect(() => {
    // console.log("statePNR:", statePNR);
  }, [statePNR]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const name = event.target.name;
    const value = event.target.value;

    if (name === "gds") {
      dispatchPNR(setGDS(value));
    }

    if (name === "pnr") {
      dispatchPNR(setPNR(value));
    }

    if (name === "officeId") {
      dispatchPNR(setOfficeId(value));
    }
  };

  const handleSearchPNR: React.FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();
    let isValid =
      statePNR.searchPNR.pnr.trim() &&
      statePNR.searchPNR.officeId.trim() &&
      statePNR.gdsList.some((gds) => gds.value === statePNR.gds.type) &&
      !statePNR.isLoading;

    if (isValid) {
      const response = await GdsApis.retrievePNR(
        statePNR.gds.type,
        statePNR.searchPNR.pnr,
        statePNR.searchPNR.officeId
      );
      console.log(response);
      // if (data.status == "OK" || data.status == "WARNING") {
      //   this.step = "result";

      //   for (let i = 0; i < this.itineraries.length; i++) {
      //     if (this.itineraries[i].pricingRequired == true) {
      //       this.pricingRequired = true;
      //     }
      //     if (this.itineraries[i].itinerary.reissue == true) {
      //       this.reissue = true;
      //     }
      //     // REVT
      //     // if (this.itineraries[i].itinerary.depositRevt == true) {
      //     //     this.depositRevt = true;
      //     // }
      //   }

      //   if (this.itineraries.length == 1) {
      //     this.paymentRequest.mandiriChallengeCode2 = this.totalPrice;
      //     this.paymentRequest.mandiriChallengeCode3 = (
      //       Math.floor(Math.random() * 90000) + 10000
      //     ).toString();
      //   }

      //   this.updatePaymentMethod("initial");

      //   this.paymentService.showBalance().subscribe((res) => {
      //     this.showBalanceResponse = res;
      //     const pattern = '<p name="lastbalance"(.*?)>(.*?)</p>';
      //     const { statusMessage } = this.showBalanceResponse;

      //     if (statusMessage !== null) {
      //       this.dataHTML = statusMessage.match(pattern)[2];
      //       this.dataHTML = parseFloat(this.dataHTML.replace(/,/g, ""));
      //     }
      //   });
      // } else if (data.status == "ERROR") {
      //   this.responseError = true;
      // }
    }
  };

  return (
    <>
      <Stepper steps={statePNR.steps} currentStep={statePNR.step} />
      <h2>Search PNR</h2>
      <div id={styles.searchPNR}>
        <div className={styles["search-pnr-wrapper"]}>
          <form onSubmit={handleSearchPNR}>
            <div className="c-form-group">
              <div className="c-custom-radio-group">
                <span className="c-custom-radio-name">GDS:</span>
                {statePNR.gdsList.map((gds, index) => {
                  return (
                    <div key={`gds-option-${index}`} className="c-custom-radio">
                      <input
                        type="radio"
                        className="hidden-input"
                        id={`gds-radio-${index}`}
                        name="gds"
                        value={gds.value}
                        checked={gds.value === statePNR.gds.type}
                        onChange={handleChange}
                      />
                      <label
                        htmlFor={`gds-radio-${index}`}
                        className="semibold"
                      >
                        <span className="mr5px">
                          <img src="img/ic_checklist.png" />
                        </span>{" "}
                        {gds.name}
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="c-form-group">
              <div className="c-row">
                <div className="c-col-2 c-form-group-floating">
                  <input
                    type="text"
                    id="pnr"
                    className="c-form-control"
                    name="pnr"
                    value={statePNR.searchPNR.pnr}
                    placeholder="Input PNR"
                    required
                    autoComplete="off"
                    onChange={handleChange}
                  />
                  <div className="c-control-label-wrapper">
                    <label className="c-control-label">Search PNR</label>
                  </div>
                </div>
                <div className="c-col-2 c-form-group-floating">
                  <select
                    id="officeId"
                    className="c-form-control"
                    name="officeId"
                    value={statePNR.searchPNR.officeId}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Choose Office Id</option>
                    {statePNR.officeIds.map(
                      (officeId: string, index: number) => {
                        return (
                          <option
                            key={`officeId-option-${index}`}
                            value={officeId}
                          >
                            {officeId}
                          </option>
                        );
                      }
                    )}
                  </select>
                  <div className="c-control-label-wrapper">
                    <label className="c-control-label">Office Id</label>
                  </div>
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="btn btn-default"
              style={{ marginLeft: "auto", display: "flex" }}
            >
              Search PNR
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SearchPNR;
