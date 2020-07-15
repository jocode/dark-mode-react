import React from 'react'
import CardSmall from './cardSmall'

const cardSmallList = [
  {
    key: 1,
    icon: 'images/icon-facebook.svg',
    pageViews: '87',
    growth: 3
  },
  {
    key: 2,
    icon: 'images/icon-instagram.svg',
    pageViews: '52',
    growth: 2257
  },
  {
    key: 3,
    icon: 'images/icon-twitter.svg',
    pageViews: '5462',
    growth: 1375
  },
  {
    key: 4,
    icon: 'images/icon-youtube.svg',
    pageViews: '117',
    growth: 303
  },
]

export default function Overview() {
  return (
    <section className="overview">
      <div className="wrapper">
        <h2>Overview - Today</h2>
        <div className="grid">

          {
            cardSmallList.map(({ icon, pageViews, growth, key }) => (
              <CardSmall
                icon={icon}
                pageViews={pageViews}
                growth={growth}
                key={key}
              />
            ))
          }
          <CardSmall />

          {/* <div className="card-small">
            <p className="card-small-views">Page Views</p>
            <p className="card-small-icon">
              <img src="images/icon-facebook.svg" alt="" />
            </p>
            <p className="card-small-number">87</p>
            <p className="card-small-percentaje">
              <span> <img src="images/icon-up.svg" alt="" />2% </span>
            </p>
          </div>

          <div className="card-small">
            <p className="card-small-views">Likes</p>
            <p className="card-small-icon">
              <img src="images/icon-facebook.svg" alt="" />
            </p>
            <p className="card-small-number">52</p>
            <p className="card-small-percentaje is-danger">
              <span> <img src="images/icon-down.svg" alt="" />2% </span>
            </p>
          </div>

          <div className="card-small">
            <p className="card-small-views">Likes</p>
            <p className="card-small-icon">
              <img src="images/icon-instagram.svg" alt="" />
            </p>
            <p className="card-small-number">5462</p>
            <p className="card-small-percentaje">
              <span> <img src="images/icon-up.svg" alt="" />2257% </span>
            </p>
          </div>

          <div className="card-small">
            <p className="card-small-views">Profile Views</p>
            <p className="card-small-icon">
              <img src="images/icon-instagram.svg" alt="" />
            </p>
            <p className="card-small-number">52k</p>
            <p className="card-small-percentaje">
              <span> <img src="images/icon-up.svg" alt="" />1375% </span>
            </p>
          </div>

          <div className="card-small">
            <p className="card-small-views">Retweeets</p>
            <p className="card-small-icon">
              <img src="images/icon-twitter.svg" alt="" />
            </p>
            <p className="card-small-number">117</p>
            <p className="card-small-percentaje">
              <span> <img src="images/icon-up.svg" alt="" />303% </span>
            </p>
          </div>

          <div className="card-small">
            <p className="card-small-views">Likes</p>
            <p className="card-small-icon">
              <img src="images/icon-twitter.svg" alt="" />
            </p>
            <p className="card-small-number">507</p>
            <p className="card-small-percentaje">
              <span> <img src="images/icon-up.svg" alt="" />553% </span>
            </p>
          </div>

          <div className="card-small">
            <p className="card-small-views">Likes</p>
            <p className="card-small-icon">
              <img src="images/icon-youtube.svg" alt="" />
            </p>
            <p className="card-small-number">87</p>
            <p className="card-small-percentaje is-danger">
              <span> <img src="images/icon-down.svg" alt="" />19% </span>
            </p>
          </div>

          <div className="card-small">
            <p className="card-small-views">Likes</p>
            <p className="card-small-icon">
              <img src="images/icon-youtube.svg" alt="" />
            </p>
            <p className="card-small-number">1407</p>
            <p className="card-small-percentaje is-danger">
              <span> <img src="images/icon-down.svg" alt="" />12% </span>
            </p>
          </div> */}
        </div>
      </div>
    </section>
  )
}