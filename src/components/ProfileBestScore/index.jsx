import React, { useEffect, useState } from 'react'

const ProfileBestScore = ({ game, user }) => {
  const [bestScore, setBestScore] = useState(0)

  useEffect(() => {
    if (user) {
      fetch(`${process.env.REACT_APP_BACK_URL}scores/${game._id}/${user._id}`)
      .then((response) => response.json())
      .then((response) => setBestScore((response && response.value) || 0))
    }
  },  [game, user])

  return (
    <div key={game.id} className="game">
      <h4>{ game.title }</h4>
      <p>{ bestScore }</p>
    </div>
  )
}

export default ProfileBestScore
