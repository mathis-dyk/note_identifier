import React from 'react'
import Intro from 'components/Intro'
import SimpleParagraph from "components/SimpleParagraph";
import InfoList from "components/InfoList";
import Subtitle from "components/Subtitle";

const Home = () => {
  return (
    <section className="home">
      <Intro />
      <Subtitle text="I'm a subtitle" />
      <SimpleParagraph />
      <InfoList />
    </section>
  )
}

export default Home
