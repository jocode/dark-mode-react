import React from 'react'
import '../styles/cardSmall.css'

const CardSmall = () => (
  <div className="card-small">
    <p className="card-small-views">Page Views</p>
    <p className="card-small-icon">
      <img src="images/icon-facebook.svg" alt="" />
    </p>
    <p className="card-small-number">87</p>
    <p className="card-small-percentaje">
      <span> <img src="images/icon-up.svg" alt="" />2% </span>
    </p>
  </div>
)

export default CardSmall