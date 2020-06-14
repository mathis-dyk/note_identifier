import React from 'react'
import './index.scss'
import piano from 'assets/img/piano.svg'

const Intro = () => {
  return (
    <section className="intro">
      <div className="introContent">
        <div className="texts">
          <h1>My intro text</h1>
          <p>
            Enim adipisicing id fugiat incididunt velit adipisicing laboris sunt
            Lorem occaecat anim exercitation enim. Magna est fugiat irure Lorem
            occaecat eiusmod.
          </p>
          <button>Watch this</button>
        </div>
        <img className="pianoIllustration" src={piano} alt="" />
      </div>
    </section>
  );
}

export default Intro
