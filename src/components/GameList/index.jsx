import React from 'react'
import GameCard from '../GameCard'
import './index.scss'

const GameList = () => {
  return (
    <div className="game-list">
      <h1>Our games</h1>
      <div className="game-list_cards">
        <GameCard />
        <GameCard />
        <GameCard />
      </div>
    </div>
  );
}

export default GameList
