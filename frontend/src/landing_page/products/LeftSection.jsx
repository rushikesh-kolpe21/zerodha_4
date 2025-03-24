import React from "react";

export default function LeftSection({
  imageURl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">  
      {/* left side */}
      <div className="row">
        <div className="col-6">
          <img src={imageURl} />
        </div>
        {/* right side */}
        <div className="col-6 p-5 mt-3">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div className="ms-2" >
          <a href={tryDemo} style={{textDecoration:"none"}} >Try Demo  <i class="fa fa-long-arrow-right" aria-hidden="true"></i> </a>
          <a href={learnMore} className="ms-5"  style={{textDecoration:"none"}} >Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i>  </a>
          </div>
          <div className="mt-3 ">
          <a href={googlePlay}>
            <img src="media/images/googlePlayBadge.svg"  /></a>
          <a href={appStore}> 
            <img className="ms-3" src="media/images/appstoreBadge.svg"  /></a>
       
          </div>
           </div>
      </div>
    </div>
  );
}
