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
import Stepper from "../components/stepper.tsx";
import AmadeusMultiCredentialsApis from "../redux/apis/gds/amadeus-multi-credentials.api.ts";
import GdsApis from "../redux/apis/gds/gds.api.ts";

const SearchPNR = () => {
  const account = useAppSelector(
    (state: RootState) => state.authorization.account
  );
  const dispatch = useAppDispatch();
  const [statePNR, dispatchPNR] = useReducer(
    searchPnrReducer,
    null,
    createInitialState
  );
  console.log();

  useEffect(() => {
    console.log("account:", account);

    const fetchOfficeIds = async () => {
      try {
        const response = await AmadeusMultiCredentialsApis.getOfficeIds();
        console.log(response);
        const officeIds = response.map((obj: any) => {
          return obj.officeId;
        });
        return officeIds;
      } catch (error) {
        console.log("Error on actions initOfficeIds:", error);
        return error;
      }
    };

    const fetchData = async () => {
      if (account) {
        dispatchPNR(initGDS(account));
        const response = await fetchOfficeIds();
        console.log(response);
        dispatchPNR(initOfficeIds(response));
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log("statePNR:", statePNR);
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

  const handleSearchPNR = async () => {
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
    }
  };

  return (
    <>
      <Stepper steps={statePNR.steps} currentStep={statePNR.step} />
      <div id={styles.searchPNR}>
        <div className={styles["search-pnr-wrapper"]}>
          <h2>Search PNR</h2>
          <form action="">
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
                        checked={gds === statePNR.gds.type}
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
