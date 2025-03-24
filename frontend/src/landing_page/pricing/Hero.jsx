import React from "react";

export default function Hero() {
  return (
    <div className="container p-5 ">
      <div className="row text-center  border-bottom ">
        <h1>Charges</h1>
        <p className=" text-muted pb-5">List of all charges and taxes</p>
      </div>
      <div className="row p-5  text-center">
      <div className="col-4 p-5">
          <img src="media/images/pricingEquity.svg" alt="" />
          <h2  className="fs-4 mb-3">Free equity delivery</h2>
          <p className="text-muted">
          All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.
          </p>
        </div>
      <div className="col-4 p-5">
          <img src="media/images/intradayTrades.svg" alt="" />
          <h2 className="fs-4 mb-3">Intraday and F&O trades</h2>
          <p className="text-muted">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4 p-5">
          <img src="media/images/pricingEquity.svg" alt="" />
          <h2 className="fs-4 mb-3">Free direct MF</h2>
          <p className="text-muted">
          All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
          </p> 
        </div>
      </div>
               <div className="row p-5">
                <div className="col text-center">
                  <h1>Open a Zerodha account</h1>
                  <p className="mt-3">Modern platforms apps, $0 investments, and flat $20 intraday and F&O trades</p>
                  <button className='p-2 mt-3 btn btn-primary fs-5' style={{width:"21%", margin: "0 auto"}}>Open Account</button>
   
                </div>
               </div>
    </div>
  );
}
