import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
      <div className="home-container">
      <div className="overlay">
        <h1 className="title">Football Management System</h1>
        <div className="button-container">
          <Link to="/add" className="button1">Add Data</Link>
          <Link to="/update" className="button1">Update Team</Link>
          <Link to="/delete" className="button1">Delete Team</Link>
          <Link to="/TeamStats" className="button1">TeamStats</Link>
          <Link to="/topTeams" className="button1">Top Teams</Link>
          <Link to="/AvgGoals" className="button1">Average Goals</Link>
        </div>
      </div>
      </div>
    );
};

export default Home;