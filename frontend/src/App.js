import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Dashboard() {
  return <h2>Dashboard</h2>;
}

function Opportunities() {
  return <h2>Opportunities</h2>;
}

function Profile() {
  return <h2>Profile</h2>;
}

function App() {
  return (
    <Router>
      <div>
        <nav style={{ background: "#222", padding: "1rem" }}>
          <Link to="/" style={{ color: "#fff", marginRight: 20, textDecoration: "none", fontWeight: "bold" }}>
            ProDeal Sports
          </Link>
          <Link to="/" style={{ color: "#fff", marginRight: 10 }}>Dashboard</Link>
          <Link to="/opportunities" style={{ color: "#fff", marginRight: 10 }}>Opportunities</Link>
          <Link to="/profile" style={{ color: "#fff" }}>Profile</Link>
        </nav>
        <div style={{ padding: "2rem" }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/opportunities" element={<Opportunities />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;