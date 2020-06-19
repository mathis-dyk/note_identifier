import React, { useState } from 'react'
import './index.scss'
// import DoClefDeSol from 'assets/img/note-do-clef-de-sol.png'
// import { notesCorrespondance, englishNotes, frenchNotes } from "data/notes";
import { getRandomNoteFr } from 'tools'

const NoteIdentification = () => {
  const [isStarted, setIsStarted] = useState(false)
  const [isFinished, setIsFinished] = useState(false)
  const [score, setScore] = useState(0)
  const [timer, setTimer] = useState(0)
  const [currentNote, setCurrentNote] = useState(null)
  const [intervalTimer, setIntervalTimer] = useState(null)
  const [erreurs, setErreurs] = useState(0)
  const [gameId] = useState("5ee9229928c6ec11ae23f77f");

  const startGame = () => {
    setIsStarted(true)
    setCurrentNote(getRandomNoteFr())
    setIntervalTimer(setInterval(() => {
      setTimer((timer) => timer + 1)
    }, 100))
  }

  const setBestScore = (finalScore) => {
    console.log("set best score")
    fetch(`${process.env.REACT_APP_BACK_URL}scores`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        gameId: gameId,
        userId: JSON.parse(localStorage.getItem("userid")),
        value: finalScore,
      }),
    })
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((error) => console.error(error));
  }

  const winGame = () => {
    clearInterval(intervalTimer)
    setIsFinished(true)
    const finalScore = Math.round(((score / timer) * 100000) - (erreurs * 1000))
    setScore(finalScore)

    fetch(`${process.env.REACT_APP_BACK_URL}scores/${gameId}/${JSON.parse(localStorage.getItem('userid'))}`)
    .then((response) => response.json())
    .then((response) => {
      if (response === null || response.value < finalScore) {
        setBestScore(finalScore)
      }
    });
  }

  const sendAnswer = (note) => {
    if (note === currentNote) {
      setScore((score) => score + 1)

      if (score >= 19) {
        winGame()
      } else {
        setCurrentNote(getRandomNoteFr())
      }
    } else {
      setErreurs((erreurs) => erreurs + 1)
    }
  }

  const changeNote = () => {
    setCurrentNote(getRandomNoteFr())
  }

  return (
    <section className="note-identification">
      <h1>Note identification</h1>

      {/* GAME ISN'T STARTED */}
      {
        !isStarted && (
          <>
            <p>Lors de ce jeu, tu devras identifier 20 notes, qui apparaîtrons chacune leur tour sur une partition.<br />
            Le plus rapidement possible, tu devras appuyer sur le bouton contenant le nom de la note.<br />
            <b>La clef de Sol ainsi que la clef de Fa sont présentes</b>.<br />
            Plus tu iras vite et moins tu te trompera, plus tu auras un meilleur score.</p>
            <button onClick={startGame} className="startButton">Commencer</button>
          </>
        )
      }

      {/* GAME START */}
      {
        isStarted && currentNote !== 20 && !isFinished && (
          <>
            <div className="introAndTime">
              <p>Quelle note est affichée ?</p>
              <h3 className="time">Temps : { timer / 10}s</h3>
            </div>

            { erreurs > 0 && (<h3 className="errors">{ erreurs } erreur{ erreurs > 1 ? "s" : "" }</h3>)}
            <h3 className="score">Score : { score } points</h3>

            { currentNote }
            <div className="answer-buttons">
              <button onClick={() => sendAnswer("do")} className="do">Do</button>
              <button  onClick={() => sendAnswer("do#")} className="do">Do#</button>
              <button onClick={() => sendAnswer("re")} className="re">Ré</button>
              <button onClick={() => sendAnswer("re#")} className="re">Ré#</button>
              <button onClick={() => sendAnswer("mi")} className="mi">Mi</button>
              <button onClick={() => sendAnswer("fa")} className="fa">Fa</button>
              <button onClick={() => sendAnswer("fa#")} className="fa">Fa#</button>
              <button onClick={() => sendAnswer("sol")} className="sol">Sol</button>
              <button onClick={() => sendAnswer("sol#")} className="sol">Sol#</button>
              <button onClick={() => sendAnswer("la")} className="la">La</button>
              <button onClick={() => sendAnswer("la#")} className="la">La#</button>
              <button onClick={() => sendAnswer("si")} className="si">Si</button>
              <button onClick={changeNote}>Test</button>
            </div>
          </>
        )
      }

      {/* GAME END */}
      {
        isStarted && isFinished && (
          <>
            <h1>{ score } points !</h1>
            <p>Bravo à toi !</p>
          </>
        )
      }
    </section>
  )
}

export default NoteIdentification
