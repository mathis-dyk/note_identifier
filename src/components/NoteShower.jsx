import React, { useState, useEffect } from "react"
import { notesCorrespondance, englishNotes } from "../data/notes";
import WebMidi from "webmidi";
import * as Tone from "tone";

const NoteShower = () => {
  const [currentNote, setCurrentNote] = useState(null);
  const [input, setInput] = useState(null)
  const [gameIsStarted, setGameIsStarted] = useState(false)
  const [synth] = useState(new Tone.PolySynth().toDestination());
  const [points, setPoints] = useState(0)
  const [timer, setTimer] = useState(0)

  const ChangeNote = () => {
    setCurrentNote(
      notesCorrespondance[
        englishNotes[Math.floor(Math.random() * englishNotes.length)]
      ]
    );
  }

  const returnNote = (e) => {
    if (notesCorrespondance[e.note.name] === currentNote) {
      setPoints(points + 1);
      ChangeNote(e)
    }
    synth.triggerAttackRelease((e.note.name + e.note.octave).toString(), "8n");
  }

  const startGame = async () => {
    setGameIsStarted(true);
    ChangeNote();
    await Tone.start();
  };

  // Component Did Mount : Init WebMidi
  useEffect(() => {
    WebMidi.enable((err) => {
      if (err) {
        // TODO : Add a beautiful error handler
        console.error("WebMidi could not be enabled.", err);
      } else {
        // TODO : Add a dynamic keyboard detector
        const keyboard = WebMidi.getInputByName("Roland Digital Piano");
        setInput(keyboard);
        gameIsStarted && keyboard.addListener("noteon", "all", returnNote);
      }
    });
  }, [gameIsStarted]);

  useEffect(() => {
    let interval = null;
    if (gameIsStarted && points !== process.env.REACT_APP_POINTS_TO_GET) {
      interval = setInterval(() => {
        setTimer((timer) => timer + 1);
      }, 100);
    } else if (gameIsStarted && points === process.env.REACT_APP_POINTS_TO_GET) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [points, gameIsStarted]);

  useEffect(() => {
    input &&
      input.removeListener() &&
      input.addListener("noteon", "all", returnNote);
  }, [currentNote, points]);

  if (points < process.env.REACT_APP_POINTS_TO_GET) {
    return (
      <main>
        <h1>Vous avez {points} points</h1>
        <h2>
          Time : {Math.floor(timer/10)}:{timer%10}
        </h2>
        <button onClick={async () => startGame(input)}>Start</button>
        <p>{currentNote}</p>
      </main>
    );
  } else {
    return <h1>Victoire</h1>
  }
}

export default NoteShower
