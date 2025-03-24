import React from 'react'

function Pricing() {
  return (
    <div className='container'>
       <div className="row">
        <div className="col-4">
          <h1 className='mb-3 fs-2'>Unbeatable pricing</h1>
          <p>We pioneered the concept of discout broking and price
            transcparency in India.Flat fees and no hidden charges.
          </p>
          <a href="#"  style={{textDecoration:"none"}}>see Pricing </a>
        </div>
        <div className="col-2"></div>
        <div className="col-6">
          <div className="row text-center">
            <div className="col p-2 border">
              <h1 className='mb-3'>$0</h1>
              <p>Free equity delivery and direct mutual funds</p>
            </div>
            <div className="col border">
              <h1 className='mb-3'>$20</h1>
              <p>Indtraday and F&O</p>
            </div>
          </div>
        </div>
       </div>
    </div>
  )
}

export default Pricing
