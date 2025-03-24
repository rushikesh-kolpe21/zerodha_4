import React from "react";

export default function Brokerage() {
  return (
    <div className="container ">
      <div className="row  border-top p-5 ">
        <div className="col-8">
          <h5 className="text-center"> Brokerage Calculator</h5>
          <ul className=" fs-6 p-5 text-muted" style={{ lineHeight: "2.1" }}>
            <li>
              Call & Trade and RMS auto-square off:Additional charge of $50
            </li>
            <li>Digital contract notes will be sent via e-mail</li>
            <li>
              {" "}
              Physical copies of contract notes, if required, shall be charged
              $20 per contract note. Courier chargest apply.
            </li>
            <li>
              {" "}
              For NRI account (non-PIS) , 0.5% or $100 per executed order for
              equity (whichever is lower)
            </li>
            <li>
              {" "}
              For NRI account (PSI) , 0.5% or $200 per executed order for equity
              (whichever is lower).
            </li>
            <li>
              {" "}
              if the account is in debit balance, any order placed will be
              charged $40 per executed instead of $20 per executed order.{" "}
            </li>
          </ul>
        </div>
        <div className="col-4">
          <h5>List of Charges</h5>
        </div>
      </div>
    </div>
  );
}
