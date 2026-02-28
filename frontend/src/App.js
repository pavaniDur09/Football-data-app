import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Addteam from './Addteam';
import UpdateTeam from './UpdateTeam';
import Deleteteam from './deleteteam';
import TeamStats from './TeamStats';
import Topteams from './Topteams';
import AvgGoals from './averagegoals';
import Home from './Home';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Addteam />} />
        <Route path="/update" element={<UpdateTeam />} />
        <Route path="/delete" element={<Deleteteam />} />
        <Route path="/TeamStats" element={<TeamStats/>} />
        <Route path="/TopTeams" element={<Topteams />} />
        <Route path="/AvgGoals" element={<AvgGoals/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
