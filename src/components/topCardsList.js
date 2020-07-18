import React from 'react';
import Card from './card';
import '../styles/card-list.css';

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


      </div>
    </div>
  </section>
)

export default TopCardList