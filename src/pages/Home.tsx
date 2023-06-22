import React from "react";
import { useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";

type Props = {};

const Home = (props: Props) => {
  const { account } = useAppSelector((state: RootState) => state.authorization);
  console.log(account);

  return (
    <>
      <div className="left-content">
        <div className="content-title bold">Dashboard</div>
        <div className="column-4">
          <div className="graph-rate-wrapper">
            <div className="bordered-box">
              <div className="graph-number">
                <span className="success">3396</span>/
                <span className="total">4000</span>
              </div>
              <div className="graph-title semibold">Search Transactions</div>
              <div className="graph-rate">
                <div className="rate1"></div>
                <div className="rate2"></div>
              </div>
              <div className="graph-info">
                <div className="info1"></div>
                <div className="info2"></div>
              </div>
            </div>
          </div>
          <div className="graph-rate-wrapper">
            <div className="bordered-box">
              <div className="graph-number">
                <span className="success">37</span>/
                <span className="total">1577</span>
              </div>
              <div className="graph-title semibold">Payment Transactions</div>
              <div className="graph-rate">
                <div className="rate1"></div>
                <div className="rate2"></div>
              </div>
              <div className="graph-info">
                <div className="info1"></div>
                <div className="info2"></div>
              </div>
            </div>
          </div>
          <div className="graph-rate-wrapper">
            <div className="bordered-box">
              <div className="graph-number">
                <span className="success">517</span>/
                <span className="total">680</span>
              </div>
              <div className="graph-title semibold">Issue Transactions</div>
              <div className="graph-rate">
                <div className="rate1"></div>
                <div className="rate2"></div>
              </div>
              <div className="graph-info">
                <div className="info1"></div>
                <div className="info2"></div>
              </div>
            </div>
          </div>
          <div className="graph-rate-wrapper">
            <div className="bordered-box">
              <div className="graph-number">
                <span className="success">514</span>/
                <span className="total">1597</span>
              </div>
              <div className="graph-title semibold">Overall Rate</div>
              <div className="graph-rate">
                <div className="rate1"></div>
                <div className="rate2"></div>
              </div>
              <div className="graph-info">
                <div className="info1"></div>
                <div className="info2"></div>
              </div>
            </div>
          </div>
        </div>
        {/* table wrapper */}
        <div className="table-wrapper table-opa mb2">
          <div className="table-utility inline-space">
            <div className="table-title bold">Transaction</div>
            <div className="button-utility-wrapper">
              <a href="#" className="btn btn-default">
                Export
              </a>
            </div>
          </div>

          <div className="table-responsive mb1">
            <div className="absolute-table">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Organization</th>
                    <th>Performed By</th>
                    <th>PCC/Office ID</th>
                    <th>GDS</th>
                    <th>Transaction ID</th>
                    <th>PNR</th>
                    <th>Search Status</th>
                    <th>Search Time</th>
                    <th>Payment Status</th>
                    <th>Payment Time</th>
                    <th>Issue Status</th>
                    <th>Issue Time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Payment Others</td>
                    <td>others</td>
                    <td>Abc</td>
                    <td>Abc</td>
                    <td>Abc</td>
                    <td>Abc</td>
                    <td>Abc</td>
                    <td>Abc</td>
                    <td>Abc</td>
                    <td>Abc</td>
                    <td>Abc</td>
                    <td>Abc</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Payment Others</td>
                    <td>others</td>
                    <td>Abc</td>
                    <td>Abc</td>
                    <td>Abc</td>
                    <td>Abc</td>
                    <td>Abc</td>
                    <td>Abc</td>
                    <td>Abc</td>
                    <td>Abc</td>
                    <td>Abc</td>
                    <td>Abc</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Payment Others</td>
                    <td>others</td>
                    <td>Abc</td>
                    <td>Abc</td>
                    <td>Abc</td>
                    <td>Abc</td>
                    <td>Abc</td>
                    <td>Abc</td>
                    <td>Abc</td>
                    <td>Abc</td>
                    <td>Abc</td>
                    <td>Abc</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Payment Others</td>
                    <td>others</td>
                    <td>Abc</td>
                    <td>Abc</td>
                    <td>Abc</td>
                    <td>Abc</td>
                    <td>Abc</td>
                    <td>Abc</td>
                    <td>Abc</td>
                    <td>Abc</td>
                    <td>Abc</td>
                    <td>Abc</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Payment Others</td>
                    <td>others</td>
                    <td>Abc</td>
                    <td>Abc</td>
                    <td>Abc</td>
                    <td>Abc</td>
                    <td>Abc</td>
                    <td>Abc</td>
                    <td>Abc</td>
                    <td>Abc</td>
                    <td>Abc</td>
                    <td>Abc</td>
                  </tr>
                </tbody>
                <tbody style={{ display: "none" }}>
                  <tr>
                    <td colSpan={13}>
                      <div className="nodata">no data available</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="clearfix">
            <div className="pull-right pagination-wrapper">
              <div className="pagination-custom">
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                  className="prev"
                >
                  <path d="M321.94,98,158.82,237.78a24,24,0,0,0,0,36.44L321.94,414c15.57,13.34,39.62,2.28,39.62-18.22V116.18C361.56,95.68,337.51,84.62,321.94,98Z" />
                </svg>
                <button className="btn-pagination active">1</button>
                <button className="btn-pagination">2</button>
                <button className="btn-pagination">3</button>
                <button className="btn-pagination">4</button>
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                  className="next"
                >
                  <path d="M321.94,98,158.82,237.78a24,24,0,0,0,0,36.44L321.94,414c15.57,13.34,39.62,2.28,39.62-18.22V116.18C361.56,95.68,337.51,84.62,321.94,98Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        {/* end of table wrapper */}
        <div className="column-2">
          <div className="graph-spline-wrapper">
            <div className="bordered-box">
              <div className="graph-title bold">Monthly Sales</div>
              <div id="splineChart"></div>
            </div>
          </div>
          <div className="dash-table">
            <div className="bordered-box">
              <div className="table-wrapper table-opa">
                <div className="table-utility inline-space">
                  <div className="table-title bold">Success Rate</div>
                </div>
                <div className="table-responsive">
                  <div className="absolute-table">
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th>Agent</th>
                          <th>Payment</th>
                          <th>Issue</th>
                          <th>Rate</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="tleft">Aan Kurnia</td>
                          <td>
                            <span className="big">6</span>/
                            <span className="small">18</span>
                          </td>
                          <td>
                            <span className="big">2</span>/
                            <span className="small">2</span>
                          </td>
                          <td>
                            <span className="big">33.4%</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="tleft">Adya Tour</td>
                          <td>
                            <span className="big">3</span>/
                            <span className="small">6</span>
                          </td>
                          <td>
                            <span className="big">4</span>/
                            <span className="small">5</span>
                          </td>
                          <td>
                            <span className="big">50%</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="tleft">Aerotravel JKT</td>
                          <td>
                            <span className="big">0</span>/
                            <span className="small">0</span>
                          </td>
                          <td>
                            <span className="big">0</span>/
                            <span className="small">0</span>
                          </td>
                          <td>
                            <span className="big">0%</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="tleft">Aero Wisata</td>
                          <td>
                            <span className="big">0</span>/
                            <span className="small">0</span>
                          </td>
                          <td>
                            <span className="big">0</span>/
                            <span className="small">0</span>
                          </td>
                          <td>
                            <span className="big">0%</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="tleft">Agung Hadi</td>
                          <td>
                            <span className="big">0</span>/
                            <span className="small">0</span>
                          </td>
                          <td>
                            <span className="big">0</span>/
                            <span className="small">0</span>
                          </td>
                          <td>
                            <span className="big">0%</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="tleft">Antavaya</td>
                          <td>
                            <span className="big">0</span>/
                            <span className="small">0</span>
                          </td>
                          <td>
                            <span className="big">0</span>/
                            <span className="small">0</span>
                          </td>
                          <td>
                            <span className="big">0%</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
