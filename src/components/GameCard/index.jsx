import React from 'react'
import './index.scss'
import { Link } from 'react-router-dom'

const GameCard = () => {
  return (
    <div className="game-card">
      <img src="https://via.placeholder.com/300x150" alt="" />
      <h2>Game card</h2>
      <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis luctus justo id ex posuere, et tempor lorem vehicula. Cras eu venenatis diam. Donec in quam.</p>
      <a href="/games/find-the-note-french">Play this game</a>
    </div>
  )
}

export default GameCard
