import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Greeting from './Greeting'

function App() {
  const hewan = 'Kucing';
  const umur = 19;
  const nama = 'Gamma';
  

  return (
    <>
      <div className="">
        <p>Belajar react.js</p>
        <hr />
        <Greeting object={hewan} ucapan='Selamat Datang' nama={nama}/> 
      </div>
    </>
  )
}

export default App
