import React, { useState } from 'react';
import axios from 'axios';


function Addteam(){
const [Number_of_team, setNumber_of_Team]=useState('');
const[gameplayed,setgameplayed]=useState('');
const[win,setwin]=useState();
const[draw,setdraw]=useState();
const[loss,setloss]=useState();
const[goals_for,setgoal_for]=useState();
const[goals_against,setgoal_against]=useState();
const[points,setpoints]=useState();
const[year,setyear]=useState();

const handleSubmit = (e) => {
    e.preventDefault();
    
    const data = {
        Team: Number_of_team,
        GamesPlayed: gameplayed,
        Win: win,
        Draw: draw,
        Loss: loss,
        GoalsFor: goals_for,
        GoalsAgainst: goals_against,
        Points: points,
        Year: year,
      };

    axios.post('http://localhost:3000/add', data)
      .then((response) => {
        alert('Data updated successfully!');
        console.log(response.data);

        setNumber_of_Team('');
        setgameplayed('');
        setwin('');
        setdraw('');
        setloss('');
        setgoal_for('');
        setgoal_against('');
        setpoints('');
        setyear('');
      })
      .catch((error) => {
        console.error('Error adding data',error);
        alert('Error adding data');
      });
  };
   return (
    <form onSubmit={handleSubmit}>
        <h2>Add Team</h2>
        <div>
        <label>Team Name:</label>
        <input type="text" value={Number_of_team} onChange={(e)=>setNumber_of_Team(e.target.value)}/>
        </div>
        <div>
        <label>Games Played</label>
        <input type="number" value={gameplayed} onChange={(e)=>setgameplayed(e.target.value)}/>
        </div>
        <div>
        <label>Wins:</label>
        <input type="number" value={win} onChange={(e)=>setwin(e.target.value)}/>
        </div>
        <div>
        <label>Draws:</label>
        <input type="number" value={draw} onChange={(e)=>setdraw(e.target.value)}/>
        </div>
        <div>
        <label>loss:</label>
        <input type="number" value={loss} onChange={(e)=>setloss(e.target.value)}/>
        </div>
        <div>
        <label>Goals for:</label>
        <input type="number" value={goals_for} onChange={(e)=>setgoal_for(e.target.value)}/>
        </div>
        <div>
        <label>Goals Against:</label>
        <input type="number" value={goals_against} onChange={(e)=>setgoal_against(e.target.value)}/>
        </div>
        <div>
            <label>Points </label>
        <input type='number' value={points} onChange={(e) => setpoints(e.target.value)}/>       
        </div>
        <div>
            <label>Year </label>
        <input type='number' value={year} onChange={(e) => setyear(e.target.value)}/>
        </div>
        <button type="submit">Add Team</button>
    </form>
   );
}

export default Addteam;