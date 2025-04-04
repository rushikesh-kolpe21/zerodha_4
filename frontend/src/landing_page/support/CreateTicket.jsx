import React from "react";

export default function CreateTicket() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2 mb-5">
          To create a ticket, select a relevant topic
        </h1>
        <div className="col-4 ">
          <h4 className="">
            <i class="fa fa-plus-circle me-2" arial-hidden="true"></i>
            Account Opening
          </h4>
          <div className="ps-4">
            <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
              Resident individual
            </a>{" "}
            <br />
            <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
              Minor
            </a>{" "}
            <br />
            <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
              Non Resident Indian (NRI)
            </a>{" "}
            <br />
            <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
              Company, Partnership, HUF and LLP
            </a>{" "}
            <br />
            <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
              Glossary
            </a>{" "}
            <br />
          </div>
        </div>
        <div className="col-4 ">
          <h4 className="">
          <i class="fa-solid fa-user me-2"></i>
          Your Zerodha Account
          </h4>
          <div className="ps-4">
            <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Your Profile            </a>{" "}
            <br />
            <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Account modification
            </a>{" "}
            <br />
            <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Client Master Report (CMR) and Depository Participant (DP)
            </a>{" "}
            <br />
            <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Nomination
            </a>{" "}
            <br />
            <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Transfer and conversion of securities
            </a>{" "}
            <br />
          </div>
        </div>
        <div className="col-4 ">
          <h4 className="">
          <i class="fa-solid fa-chart-simple me-2"></i> Kite
          </h4>
          <div className="ps-4">
            <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            IPO
            </a>{" "}
            <br />
            <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Trading FAQs</a>{" "}
            <br />
            <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Margin Trading Facility (MTF) and Margins
            </a>{" "}
            <br />
            <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Charts and orders
            </a>{" "}
            <br />
            <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Alerts and Nudges
            </a>{" "}
            <br />
          </div>
        </div>
      </div>
      {/* second */}
      <div className="row p-5 mb-5">
        
        <div className="col-4 ">
          <h4 className="">
          <i class="fa-solid fa-box me-2"></i>  Funds
          </h4>
          <div className="ps-4">
            <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Add money
            </a>{" "}
            <br />
            <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Withdraw money
            </a>{" "}
            <br />
            <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Add bank accounts
            </a>{" "}
            <br />
            <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            eMandates
            </a>{" "}
            <br />
            {/* <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
              Glossary
            </a>{" "}
            <br /> */}
          </div>
        </div>
        
        <div className="col-4 ">
          <h4 className="">
          <i class="fa-solid fa-circle-notch"></i> Console
          </h4>
          <div className="ps-4">
            <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Corporate actions
            </a>{" "}
            <br />
            <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Funds statement
            </a>{" "}
            <br />
            <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Reports
            </a>{" "}
            <br />
            <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Profile
            </a>{" "}
            <br />
            <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Segments
            </a>{" "}
            <br />
          </div>
        </div>
        <div className="col-4 ">
          <h4 className="">
          <i class="fa-solid fa-coins me-2"></i>  Coin
          </h4>
          <div className="ps-4">
            <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Understanding mutual funds and Coin
            </a>{" "}
            <br />
            <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Coin app
            </a>{" "}
            <br />
            <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Coin web
            </a>{" "}
            <br />
            <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Transactions and reports
            </a>{" "}
            <br />
            <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            National Pension Scheme (NPS)
            </a>{" "}
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
