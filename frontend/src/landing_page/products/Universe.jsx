import React from 'react'

export default function Universe() {
  return (
   <div className="container mt-5">
    <div className="row text-center">
      <h1>The Zerodha Universe</h1>
      <p className='p-3'>Extend your trading and investment experience even further with our partner platforms</p>
      <div className="col-4 p-3">
        <img src="media/images/smallcaseLogo.png" alt="" />
        <p className='text-small text-muted'>Thematic investment platform</p>
      </div>
      <div className="col-4 p-3">
      <img src="media/images/smallcaseLogo.png" alt="" />
      <p className='text-small text-muted'>Asset management</p>
      </div>
      <div className="col-4 p-3">
      <img src="media/images/smallcaseLogo.png" alt="" />
      <p className='text-small text-muted'>Algo & strategy platform</p>
      </div>
      <div className="col-4 p-3 mt-5">
        <img src="media/images/smallcaseLogo.png" alt="" />
        <p className='text-small text-muted'>Bond trading plateform</p>
      </div>
      <div className="col-4 p-3 mt-5">
      <img src="media/images/smallcaseLogo.png" alt="" />
      <p className='text-small text-muted'>Options trading plateform</p>
      </div>
      <div className="col-4 p-3 mt-5">
      <img src="media/images/smallcaseLogo.png" alt="" />
      <p className='text-small text-muted'>Insurance</p>
      </div>
      <button className='p-2 mt-3 btn btn-primary fs-5' style={{width:"21%", margin: "0 auto"}}>Open Account</button>
   
    </div>
   </div>
  )
}
