import React from 'react'

function Hero() {
  return (
    <div className='container p-5'>
      <div className="row text-center">
            <img className='mb-5' src='media/images/homeHero.png' alt='homeHero' />
            <h1 className='mt-5'>Invest in everythings</h1>
            <p>Online plate to invest in stocks, derivatives, mutual funds and more</p>
            <button className='p-2 btn btn-primary fs-5' style={{width:"21%", margin: "0 auto"}}>Signup Now</button>
      </div>
     
    </div>
  )
}

export default Hero
