import React, { useState, useEffect } from 'react'
import './index.scss'
import ProfileBestScore from 'components/ProfileBestScore'

const Profile = () => {
  const [profile, setProfile] = useState({})
  const [games, setGames] = useState([])

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACK_URL}auth/me`, {
      method: 'get',
      headers: {
        'auth-token': JSON.parse(localStorage.getItem('tokens'))
      }
    })
    .then((response) => response.json())
    .then((response) => setProfile(response))

     fetch(`${process.env.REACT_APP_BACK_URL}games`)
    .then((response) => response.json())
    .then((response) => setGames(response))
  }, [])

  return (
    <section className="profile">
      <h1>Profile</h1>
      <h3>{ profile.name }</h3>
      <p>{ profile.email }</p>

      <h2 className="bestScores">Mes meilleurs scores</h2>
      <div className="games">
        {
          games.map(game => <ProfileBestScore key={game._id} game={game} user={profile} />)
        }
      </div>
    </section>
  )
}

export default Profile
