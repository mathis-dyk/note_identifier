import React, { useState, useEffect } from 'react'
import './index.scss'

const GameCard = ({ title, description, slug, isAuth, id }) => {
  const [getYourBestScore, setGetYourBestScore] = useState(false)
  const [yourBestScore, setYourBestScore] = useState(0)
  const [getBestScore, setGetBestScore] = useState(false)
  const [bestScore, setBestScore] = useState(0)
  const [userId] = useState(localStorage.getItem("userid") || "")

  useEffect(() => {
    if (isAuth) {
      fetch(
        `${process.env.REACT_APP_BACK_URL}scores/${id}/${JSON.parse(userId)}`
      )
        .then((response) => response.json())
        .then((response) => {
          if (response !== null) {
            setYourBestScore(response);
            setGetYourBestScore(true);
          }
        });
    }

    fetch(`${process.env.REACT_APP_BACK_URL}games/${id}/bestscore/`)
      .then((response) => response.json())
      .then((response) => {
        if (response.length !== 0) {
          setBestScore(response[0]);
          setGetBestScore(true);
        }
      });
  }, [id])

  return (
    <div className="game-card">
      <img src="https://via.placeholder.com/300x150" alt="" />
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={`/games/${slug}`}>Play this game</a>
      {!getBestScore && <h3>Sois le premier à enregistrer un score !</h3>}
      {getBestScore && <h3>Record : {bestScore.value}</h3>}
      {isAuth &&
        (yourBestScore === bestScore) &&
        yourBestScore &&
        (yourBestScore !== 0) && <p>Tu détiens le meilleur score !</p>}
      {isAuth && !yourBestScore && yourBestScore !== getBestScore && (
        <p>Tu n'as pas encore joué à ce jeu</p>
      )}
      {isAuth && yourBestScore !== 0 && (yourBestScore !== getBestScore) && (
        <p>Ton meilleur score : {yourBestScore.value}</p>
      )}
    </div>
  );
}

export default GameCard
