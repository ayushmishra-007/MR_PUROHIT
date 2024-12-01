import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Login from './Pages/Login'
import Pandit from './Pages/Pandit'
import Signup from './Pages/Signup'
import Footer from './Components/Footer'
// import About from './Pages/About/About'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'


const App = () => {

  const [playState,setPlayState] = useState(false)


  return (
    <div>
          <Navbar/>

          <Routes>
            <Route path="/" element={<Home/>}/>
            {/* <Route path="/about" element={<About setPlayState={setPlayState} />}/> */}
            <Route path="/about" element={<About setPlayState={setPlayState}/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/pandit/:location" element={<Pandit/>}/>
            <Route path="/signup" element={<Signup/>}/>
          </Routes>

         

          <Footer/>
          <VideoPlayer playState={playState} setPlayState={setPlayState}></VideoPlayer>
    </div>
  )
}

export default App
