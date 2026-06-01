import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiSettings, FiLogOut } from 'react-icons/fi';

const Navigation: React.FC = () => (
  <nav className="bg-white shadow-md">
    <div className="container mx-auto px-4 py-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-blue-600">🎬 LangLearning</Link>
      <div className="flex gap-4 items-center">
        <Link to="/" className="flex items-center gap-2 hover:text-blue-600"><FiHome /> Dashboard</Link>
        <Link to="/settings" className="flex items-center gap-2 hover:text-blue-600"><FiSettings /> Settings</Link>
        <button className="flex items-center gap-2 hover:text-red-600"><FiLogOut /> Logout</button>
      </div>
    </div>
  </nav>
);

export default Navigation;