import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";

const SearchPNR = () => {
  const account = useAppSelector((state: RootState) => state.authorization);
  const dispatch = useAppDispatch();
  console.log("account:", account);

  return (
    <>
      <div className="left-content">
        <div className="clearfix mb1">
          <ul className="stepper">
            <li>
              <a href="index.html">Dashboard</a>
            </li>
            <li className="active">
              <a href="#">
                <span>1</span>Search PNR
              </a>
            </li>
            <li>
              <a href="#">
                <span>2</span>Summary
              </a>
            </li>
            <li>
              <a href="#">
                <span>3</span>Payment
              </a>
            </li>
          </ul>
        </div>
        <div className="inner-padding-container">
          <div className="bordered-box">
            <div className="mb2 bold fz16">Search PNR</div>
            <div className="inline-space mb10px">
              <div className="form-group w50 mr1">
                <label>PNR</label>
                <input type="text" name="" className="form-control" />
              </div>
              <div className="form-group w50">
                <label>Office ID</label>
                <select
                  name=""
                  id=""
                  className="form-control block js-custom-select"
                  required
                >
                  <option value="0">&nbsp;</option>
                </select>
              </div>
            </div>
            <div className="form-group w40 group-checkbox mb2">
              <label>GDS</label>
              <div className="inline-space align-start">
                <div className="custom-radio">
                  <input
                    type="radio"
                    className="hidden-input"
                    name="radio-gds"
                    id="radio1"
                    checked
                  />
                  <label htmlFor="radio1" className="semibold">
                    <span className="mr5px">
                      <img src="img/ic_checklist.png" />
                    </span>{" "}
                    Sabre
                  </label>
                </div>
                <div className="custom-radio">
                  <input
                    type="radio"
                    className="hidden-input"
                    name="radio-gds"
                    id="radio2"
                  />
                  <label htmlFor="radio2" className="semibold">
                    <span className="mr5px">
                      <img src="img/ic_checklist.png" />
                    </span>{" "}
                    Galileo
                  </label>
                </div>
                <div className="custom-radio">
                  <input
                    type="radio"
                    className="hidden-input"
                    name="radio-gds"
                    id="radio3"
                  />
                  <label htmlFor="radio3" className="semibold">
                    <span className="mr5px">
                      <img src="img/ic_checklist.png" />
                    </span>{" "}
                    Amadeus/AIDL
                  </label>
                </div>
              </div>
            </div>
            <div className="clearfix">
              <div className="pull-right">
                <a href="pnr-summary.html" className="btn btn-default">
                  Search PNR
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchPNR;
