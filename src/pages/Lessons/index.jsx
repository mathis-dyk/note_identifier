import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './index.scss'

const Lessons = () => {
  const [lessons, setLessons] = useState([])

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACK_URL}lessons`)
    .then((response) => response.json())
    .then((response) => setLessons(response))
  }, [])

  return (
    <section className="lessons">
      <h1>Test lesson</h1>
      {
        lessons.map((lesson) => {
          return (
            <div className="lesson">
              <div>
                <h2>{lesson.title}</h2>
                <Link to={`/lessons/${lesson.slug}`}>Read this lesson</Link>
              </div>
              <p className="description">{lesson.description}</p>
            </div>
          );
        })
      }
    </section>
  )
}

export default Lessons
