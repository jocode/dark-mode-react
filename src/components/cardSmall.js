import React from 'react'
import '../styles/cardSmall.css'

const CardSmall = ({ growth, pageViews, icon }) => (
  <div className="card-small">
    <p className="card-small-views">Page Views</p>
    <p className="card-small-icon">
      <img src={icon} alt="" />
    </p>
    <p className="card-small-number">{pageViews}</p>
    <p className="card-small-percentaje">
      <span> <img src="images/icon-up.svg" alt="" />{growth}% </span>
    </p>
  </div>
)

export default CardSmall