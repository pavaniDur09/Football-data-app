import React, { useState } from "react";
import axios from "axios";

function UpdateTeam() {
  const [teamName, setTeamName] = useState("");
  const [teamData, setTeamData] = useState({
    gamesPlayed: 0,
    wins: 0,
    draws: 0,
    losses: 0,
    goalsFor: 0,
    goalsAgainst: 0,
    points: 0,
    year: "",
  });

  // Handles changes to team data fields
  function handleChange(e) {
    const { name, value } = e.target;
    setTeamData({ ...teamData, [name]: value });
  }

  // Handles the form submission
   async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:3000/update`, {
        teamName,
        ...teamData,
      });
      alert("Team updated successfully!");
      console.log(response.data);
    } catch (error) {
      console.error("Error updating team:", error);
      alert("Failed to update team.");
    }
  }

  return (
      <form onSubmit={handleSubmit}>
      <h2>Update Team</h2>

        <label>Team Name:</label>
        <input
          type="text"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
          required
        />
        <label>Games Played:</label>
        <input
          type="number"
          name="gamesPlayed"
          value={teamData.gamesPlayed}
          onChange={handleChange}
          required
        />
        <label>Wins:</label>
        <input
          type="number"
          name="wins"
          value={teamData.wins}
          onChange={handleChange}
          required
        />
        <label>Draws:</label>
        <input
          type="number"
          name="draws"
          value={teamData.draws}
          onChange={handleChange}
          required
        />
        <label>Losses:</label>
        <input
          type="number"
          name="losses"
          value={teamData.losses}
          onChange={handleChange}
          required
        />
        <label>Goals For:</label>
        <input
          type="number"
          name="goalsFor"
          value={teamData.goalsFor}
          onChange={handleChange}
          required
        />
        <label>Goals Against:</label>
        <input
          type="number"
          name="goalsAgainst"
          value={teamData.goalsAgainst}
          onChange={handleChange}
          required
        />
        <label>Points:</label>
        <input
          type="number"
          name="points"
          value={teamData.points}
          onChange={handleChange}
          required
        />
        <label>Year:</label>
        <input
          type="text"
          name="year"
          value={teamData.year}
          onChange={handleChange}
          required
        />
        <button type="submit">Update Team</button>
      </form>
  );
}

export default UpdateTeam;