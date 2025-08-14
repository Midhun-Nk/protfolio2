// src/App.jsx
import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import "./App.css";

export default function App() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-950 min-h-screen text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-black/50 backdrop-blur-md border-b border-gray-800 sticky top-0">
        <h1 className="text-xl font-bold text-yellow-400">Midhun Nk</h1>
        <div className="flex gap-6">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `hover:text-yellow-400 transition ${
                isActive ? "text-yellow-400 font-semibold" : "text-gray-300"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `hover:text-yellow-400 transition ${
                isActive ? "text-yellow-400 font-semibold" : "text-gray-300"
              }`
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `hover:text-yellow-400 transition ${
                isActive ? "text-yellow-400 font-semibold" : "text-gray-300"
              }`
            }
          >
            Contact
          </NavLink>
        </div>
      </nav>

      {/* Page Content */}
      <main className="p-6 md:p-12">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="text-center py-6 border-t border-gray-800 text-gray-500">
        © {new Date().getFullYear()} Midhun Nk — Built with ❤️ & TailwindCSS
      </footer>
    </div>
  );
}
