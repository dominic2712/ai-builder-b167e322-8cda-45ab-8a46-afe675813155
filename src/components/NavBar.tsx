import React from 'react';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-xl font-bold">AI & Future</h1>
        <div className="flex space-x-4">
          <Link to="/" className="hover:text-blue-500">Home</Link>
          <Link to="/about" className="hover:text-blue-500">About</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;