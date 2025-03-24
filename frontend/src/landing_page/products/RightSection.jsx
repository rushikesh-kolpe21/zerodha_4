import React from 'react'

export default function RightSection({
  productName,
  productDescription,
  imageURL,
  learnMore
}) {
  return (
   <div className="container">
    <div className="row m-5">
      <div className="col-6 pt-5 mt-5">
            <h1 className='mt-5 pt-5'>{productName}</h1>
              <p className='mt-3 '>{productDescription}</p>
              <a href={learnMore} style={{textDecoration:"none"}} >Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i>  </a>
      </div>
      <div className="col-6">
        <img src={imageURL}   />
      </div>
    </div>
   </div>
  )
}
