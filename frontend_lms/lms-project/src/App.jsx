import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Navbar from './components/common/navbar'
import Teachers from './components/pages/Teachers'
import Students from './components/pages/Students'
import Courses from './components/pages/Courses'
import Enrollments from './components/pages/Enrollments'
import Lessons from './components/pages/Lessons'
import Assignments from './components/pages/Assignments'
import Submissions from './components/pages/Submissions'
import Grades from './components/pages/Grades'
import Profile from './components/pages/Profile'
function App() {
  const backend_url = import.meta.env.VITE_API_backend_URL;

  return (
    <BrowserRouter>
    <Navbar />

      <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/students" element={<Students />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/enrollments" element={<Enrollments />} />
          <Route path="/lessons" element={<Lessons />} />
          <Route path="/assignments" element={<Assignments />} />
          <Route path="/submissions" element={<Submissions />} />
          <Route path="/grades" element={<Grades />} />
          <Route path="/profile" element={<Profile />} />
      </Routes>

    </BrowserRouter >   
  )
    
}

export default App
