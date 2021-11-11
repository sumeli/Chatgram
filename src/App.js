import React from "react"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { AuthProvider } from "./AuthContext"
import Login from "./Login"

import Chats from "./Chats"


function App() {
  return (
    <div style={{ fontFamily: 'Avenir' }}>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/chats" element={<Chats />} />
            <Route exact path="/" element={<Login />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  )
}

export default App