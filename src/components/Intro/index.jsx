import React from 'react'
import './index.scss'
import { Link } from 'react-router-dom'
import piano from "assets/img/undraw_more_music_w70e.svg";

const Intro = () => {
  return (
    <section className="intro">
      <div className="introContent">
        <div className="texts">
          <h1>Galabop</h1>
          <p>
            Train yourself to theorical music sheet analysis. Learn to identification notes, find key signature or even create chords. Each of these exercices got a score
            system. Find answer fasters as possible and get the best score !
          </p>
          <Link to="/login">Discover games</Link>
        </div>
        <img className="pianoIllustration" src={piano} alt="" />
      </div>
    </section>
  );
}

export default Intro
