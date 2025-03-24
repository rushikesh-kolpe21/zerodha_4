import React from 'react'

function Stats() {
  return (
    <div className='container p-3'>
      <div className="row p-5">
        <div className="col-6 p-5">
          <h1 className='fs-2 mb-5'>Trust with confidence</h1>
          
            <h2 className='fs-4 '>Customer-first always</h2>
            <p className='text-muted'>That's why 1.3+ core customers trust Zerodha with $3.5+
            lakh cores worth of equity investments.</p>
            
            <h2 className='fs-4 ' >No span or gimmicks</h2>
            <p className='text-muted'>NO gimmicks, spam, "gamification", or annoying push 
              notifications. High quality apps that you use at you pace, 
              the way you like.</p>
            
            <h2 className='fs-4' >The Zerodha universe</h2>
            <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 
              30+fintect startups offer you tailored services specific to your needs .</p>
            
            <h2 className='fs-4' >Do better with money</h2>
            <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transaction, but actively help you do better with you money.</p>
            
          
        </div>
        <div className="col-6 p-5">
          <img style={{width:"95%"}} src="media/images/ecosystem.png" alt="" />
            <div>
              <a href="#" className='mx-5 ' style={{textDecoration:"none"}}> Explore our products <i class= "fa fa-long-arrow-right" aria-hidden="true"></i> </a>
              <a href="#"  style={{textDecoration:"none"}}> Try Kite demo</a>
            </div>
        </div>
      </div>
      
    </div>
  )
}

export default Stats
