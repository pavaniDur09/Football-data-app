import React, { useState } from "react";
import axios from "axios";

function AvgGoals() {
    const [year, setYear] = useState('');
    const [data, setData] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent form reload
        try {
            const response = await axios.get(`http://localhost:3000/avg-goals/${year}`);
            setData(response.data); // Assuming API returns a list of teams with average goals
        } catch (error) {
            console.error("Error fetching data:", error);
            alert("Failed to fetch data");
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <h2>Average Goals</h2>

                <label>Year: </label>
                <input
                    type="text"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    placeholder="Enter Year"
                />
                <button type="submit">Get Average Goals</button>
            </form>
            <ul>
                {data.map((team, index) => (
                    <li key={index}>
                        Team ID: {team._id}, Average Goals For: {team.avgGoalsFor}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AvgGoals;