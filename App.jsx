import React from 'react'
import Navbar from './Components/Navbar'
import { Routes, Route,useLocation } from 'react-router-dom'
import Home from './Pages/Home'

const App = () => {
  const isOwnerPath=useLocation().pathname.includes("owner");
  return (
    <div>
     {!isOwnerPath && <  Navbar/>}
     <div className='min-h[70vh]'>
      <Routes>
        {/* When path = "/", show Home component */}
        <Route path="/" element={<Home />} />
      </Routes>
     </div>
    </div>

  )
}
export default App;