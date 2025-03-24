import React from "react";

function Hero() {
  return (
    <div className="container border-bottom mb-5">
      <div className="text-center m-5 pt-5">
        <h1>Zerodha Products</h1>
        <h3 className="text-muted mt-3 fs-4">Sleek, modern, and intuitive trading platforms</h3>
        <p className="mt-3">
          Check out our{" "}
          <a style={{ textDecoration: "none" }} href="">
            {" "}
            Investment offerings &nbsp;
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>{" "}
          </a>{" "}
        </p>
      </div>
    </div>
  );
}

export default Hero;
