import React from 'react'
import './index.scss'
import piano from 'assets/img/piano.png'
import headphones from 'assets/img/headphones.png'
import musicAndMultimedia from 'assets/img/music-and-multimedia.png'

const InfoList = () => {
  return (
    <section className="info-list">
      <ul>
        <li>
          <img src={piano} alt="" />
          <h3>I'm a item</h3>
          <p>Laborum velit ut labore anim irure ullamco aliquip voluptate amet enim enim quis.</p>
        </li>

        <li>
          <img src={headphones} alt="" />
          <h3>I'm a item</h3>
          <p>Laborum velit ut labore anim irure ullamco aliquip voluptate amet enim enim quis.</p>
        </li>

        <li>
          <img src={musicAndMultimedia} alt="" />
          <h3>I'm a item</h3>
          <p>Laborum velit ut labore anim irure ullamco aliquip voluptate amet enim enim quis.</p>
        </li>
      </ul>
    </section>
  )
}

export default InfoList
