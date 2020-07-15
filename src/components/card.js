import React from 'react'
import '../styles/card.css'

const Card = ({ username, followers, todayFollowers, icon, name }) => {

  return (
    <article className={`card ${name}`} >
      <p className="card-title">
        <img src={icon} alt="Imagen Facebook" />
        {username}
      </p>
      <p className="card-followers">
        <span className="card-followers-number">{followers}</span>
        <span className="card-followers-title">Followers</span>
      </p>
      <p className="card-today">
        <img src="images/icon-up.svg" alt="" />
        {todayFollowers} Today
    </p>
    </ article>
  )
}

export default Card