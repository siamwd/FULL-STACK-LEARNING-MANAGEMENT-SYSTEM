import React from 'react'
import '../../index.css'
import { logoutUser } from "../../utils/auth";
import { useNavigate } from "react-router-dom";


function Navbar() {
    const n = useNavigate();

    function handleLogout() {
     logoutUser();
     n('/login');
  }
    return (
        <nav className="w-full bg-gray-800 text-white p-6 flex items-center justify-between">
                <h1> <a href="/">MY LMS</a></h1>
                <ul className="flex space-x-4 text-lg">
                    <li><a href="/">Home</a></li>
                    <li><a href="/teachers">Teacher</a></li>
                    <li><a href="/students">Student</a></li>
                    <li><a href="/courses">Course</a></li>
                </ul>
                <button onClick={handleLogout}>Logout</button>

        </nav>
    )}
export default Navbar;