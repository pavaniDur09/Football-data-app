import React, { useState } from 'react';
import axios from 'axios';

function TeamStats()  {
    const [teamName, setTeamName] = useState('');
    const [stats, setStats] = useState(null);

    const handleSearch = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/TeamStats/${teamName}`);
            setStats(response.data);
        } catch (error) {
            console.error(error);
            alert('Failed to fetch stats');
        }
    };

    return (
        <form>
            <h2>Total games played by a Team</h2>
            <input type="text" value={teamName} onChange={(e) => setTeamName(e.target.value)} placeholder="Enter Team Name" />
            <button onClick={handleSearch}>Get Result</button>
            {stats && (
                <div>
                    <p>Total Games Played: {stats.gamesPlayed}</p>
                    <p>Total Draws: {stats.draw}</p>
                    <p>Total Wins: {stats.win}</p>
                </div>
            )}
        </form>
    );
};

export default TeamStats;
