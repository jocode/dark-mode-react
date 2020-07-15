import React from 'react';
import Card from './card';

const cardListData = [
  {
    id: 1,
    username: '@johan.mosquera',
    followers: '1843',
    todayFollowers: 12,
    icon: 'images/icon-facebook.svg',
    name: 'facebook'
  },
  {
    id: 2,
    username: '@johanmosquer',
    followers: '20',
    todayFollowers: 11,
    icon: 'images/icon-twitter.svg',
    name: 'twitter'
  },
  {
    id: 3,
    username: '@jocode',
    followers: '87',
    todayFollowers: 22,
    icon: 'images/icon-instagram.svg',
    name: 'instagram'
  },
  {
    id: 4,
    username: '@johanmosquera',
    followers: '0.1k',
    todayFollowers: 123,
    icon: 'images/icon-youtube.svg',
    name: 'youtube'
  },
]

const TopCardList = () => (
  <section className="top-cards">
    <div className="wrapper">
      <div className="grid">

        {
          cardListData.map((cardData, index) =>
            <Card key={`card-${cardData.id}`} {...cardData} />)
        }

        {/* <article className="card twitter">
          <p className="card-title">
            <img src="images/icon-twitter.svg" alt="Imagen Facebook" />
              @johanmosquer
            </p>
          <p className="card-followers">
            <span className="card-followers-number">20</span>
            <span className="card-followers-title">Followers</span>
          </p>
          <p className="card-today">
            <img src="images/icon-up.svg" alt="" />
              12 Today
            </p>
        </article>

        <article className="card instagram">
          <p className="card-title">
            <img src="images/icon-instagram.svg" alt="Imagen Facebook" />
              @johanmosquer
            </p>
          <p className="card-followers">
            <span className="card-followers-number">87</span>
            <span className="card-followers-title">Followers</span>
          </p>
          <p className="card-today">
            <img src="images/icon-up.svg" alt="" />
              12 Today
            </p>
        </article>

        <article className="card youtube">
          <p className="card-title">
            <img src="images/icon-youtube.svg" alt="Imagen Facebook" />
              @johanmosquer
            </p>
          <p className="card-followers">
            <span className="card-followers-number">23</span>
            <span className="card-followers-title">Followers</span>
          </p>
          <p className="card-today">
            <img src="images/icon-up.svg" alt="" />
              12 Today
            </p>
        </article> */}
      </div>
    </div>
  </section>
)

export default TopCardList