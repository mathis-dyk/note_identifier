import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './index.scss'
import showdown from 'showdown'
import { useAuth } from "context/auth";
let converter = new showdown.Converter()

const Lesson = () => {
  const { authTokens } = useAuth();
  let { slug } = useParams()
  const [content, setContent] = useState("")
  const [title, setTitle] = useState("")
  const [textareaContent, setTextareaContent] = useState("")

  useState(() => {
    fetch(`${process.env.REACT_APP_BACK_URL}lessons/${slug}`)
    .then((response) => response.json())
    .then((response) => {
      console.log(response)
      setContent(response.content)
      setTitle(response.title)
    })

    console.log(authTokens)
  }, [])

  const submitChange = () => {
    fetch(`${process.env.REACT_APP_BACK_URL}lessons/${slug}`, {
      method: `put`,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: 
          textareaContent
        ,
      }),
    });
  }

  return (
    <section className="lesson">
      <div id="content-lesson">
        <h1>{title}</h1>
        <div
          className="content"
          dangerouslySetInnerHTML={{
            __html: converter.makeHtml(content),
          }}
        />
      </div>
      {authTokens && (
        <textarea
          value={textareaContent || content}
          onChange={(e) => {
            setTextareaContent(e.target.value);
            setContent(e.target.value)
          }}
        ></textarea>
      )}
      <button onClick={submitChange} type="submit">
        Valider
      </button>
    </section>
  );
}

export default Lesson
