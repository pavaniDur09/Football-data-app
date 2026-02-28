import React, { useState } from "react";
import axios from "axios";

function Topteams() {
    const [wins, setWins] = useState(0);
    const [teams, setTeams] = useState([]);

    const handleSubmit = async (e) => {
        try {
            const response = await axios.post(`http://localhost:3000/topTeams/${wins}`);
            setTeams(response); // Assuming API returns a list of teams
        } catch (error) {
            console.error("Error fetching teams", error);
            alert("Failed to fetch teams");
        }
    };

    return (
        <div>
        
            <form>
            <h2>Top Teams</h2>

                <label>Minimum Wins: </label>
                <input 
                    type="number" 
                    value={wins} 
                    onChange={(e) => setWins(e.target.value)} 
                    placeholder="Enter minimum wins" 
                />
                <button onClick={handleSubmit}>Get Top Teams</button>
            </form>
            <ul>
                {teams.map((team, index) => (
                    <li key={index}>{team.Team}</li>
                ))}
            </ul>
        </div>
    );
}

export default Topteams;
