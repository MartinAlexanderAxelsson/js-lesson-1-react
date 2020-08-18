import React from "react"
import logo from "./logo.svg"
import image from "./IMG_2175.JPG"
import "./App.css"
import MyButton from "./components/MyButton"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <img src={image} className="App-img" alt="self-portrait" />

        <p>
          JS Lesson 1
          <MyButton title="tryck här" />
          <MyButton title="eller här" />
          <MyButton title="kanske här" />
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn To React
        </a>
      </header>
    </div>
  )
}

export default App
