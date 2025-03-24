import React from 'react'

function Education() {
  return (
    <div className="container mt-5">
             <div className="row">
              {/* left */}
                <div  className="col-6 p-4 ">
                    <img  style={{width:"80%"}} src="media/images/education.svg" alt="educations image" />
                </div>
                {/* right */}
                <div className="col-6 p-5 mt-5">
                    <h2 className='fs-2'>Free and open market education</h2>
                    <p>2+ million Zerodha clients contribute to over 15% of all retail order
                        volumes in India daily by trading and investing in : 
                    </p>
                    <a href="#"  style={{textDecoration:"none"}}>versity <i class= "fa fa-long-arrow-right" aria-hidden="true"></i>  </a>
                    
                    <p className='mt-5'>2+ million Zerodha clients contribute to over 15% of all retail order
                        volumes in India daily by trading and investing in : 
                    </p>
                    <a href="#"  style={{textDecoration:"none"}}> TradingQ&A <i class= "fa fa-long-arrow-right" aria-hidden="true"></i>  </a>
                 
                 </div>
             </div>
        </div>
  )
}

export default Education
