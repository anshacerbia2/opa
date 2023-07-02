import React, { Children } from "react";
import { Outlet } from "react-router-dom";

type Props = {};

const Master = () => {
  return (
    <>
      <section className="intro-sec intro-home">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1>Master</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="main-ctn">
        <div className="master-wrapper">
          <div className="master">
            <div className="content">
              <span className="m-image agent"></span>
              <span className="m-content">
                <label className="title">Organization</label>
                <label className="info">
                  List of organizations in Online Payment for Agent
                </label>
              </span>
            </div>
          </div>

          <div className="master">
            <div className="content">
              <span className="m-image agent-pcc-credential"></span>
              <span className="m-content">
                <label className="title">Agent Credential (1G / 1S)</label>
                <label className="info">
                  Credential details of each Pseudo City Code used to exchange
                  information with Global Distribution System
                </label>
              </span>
            </div>
          </div>

          <div className="master">
            <div className="content">
              <span className="m-image agent-pcc-credential"></span>
              <span className="m-content">
                <label className="title">Agent Credential (1A)</label>
                <label className="info">
                  Credential details of each Pseudo City Code used to exchange
                  information with Global Distribution System
                </label>
              </span>
            </div>
          </div>

          <div className="master">
            <div className="content">
              <span className="m-image commission-agreement"></span>
              <span className="m-content">
                <label className="title">Organization Agreement</label>
                <label className="info">
                  List of organization agreements on domestic and international
                  commissions
                </label>
              </span>
            </div>
          </div>

          <div className="master">
            <div className="content">
              <span className="m-image agent-dtu-account"></span>
              <span className="m-content">
                <label className="title">Organization DTU Account</label>
                <label className="info">
                  Organization DTU credential account details for payment
                </label>
              </span>
            </div>
          </div>

          <div className="master">
            <div className="content">
              <span className="m-image flight-duration-deposit"></span>
              <span className="m-content">
                <label className="title">Flight Duration Deposit</label>
                <label className="info">
                  Deposit amount setting for group booking on flight duration
                </label>
              </span>
            </div>
          </div>

          <div className="master">
            <div className="content">
              <span className="m-image bin"></span>
              <span className="m-content">
                <label className="title">BIN Setting</label>
                <label className="info">Bank Identification Number</label>
              </span>
            </div>
          </div>

          <div className="master">
            <div className="content">
              <span className="m-image api-credential"></span>
              <span className="m-content">
                <label className="title">API Credential</label>
                <label className="info">
                  API Credential details for organization
                </label>
              </span>
            </div>
          </div>

          <div className="master">
            <div className="content">
              <span className="m-image system-parameter"></span>
              <span className="m-content">
                <label className="title">System Paramater</label>
                <label className="info">Application settings</label>
              </span>
            </div>
          </div>
          <div className="master">
            <div className="content">
              <span className="m-image pricing-umroh"></span>
              <span className="m-content">
                <label className="title">Pricing Umroh HB</label>
                <label className="info">For Type Business Umroh HB</label>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Master;
