import React,{useState,useEffect} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";

function Deleteteam(){
    const[team,setTeam]=useState([]);

    const handleDelete = async (e) => {

      try{
        await axios.post('http://localhost:3000/delete',{team});
      alert('Team updated successfully!');
      } catch(error) {
      console.error(error);
      alert('Error deleting team');
      }
    }

return(
    <form onSubmit={handleDelete}>
        <h2>Delete Team</h2>
        <label>Team Name: </label>
        <input type="text" value={team} onChange={(e)=> setTeam(e.target.value)} placeholder="Enter Team Name"/>
        <button onClick={handleDelete}>Delete</button>
    </form>
);
}
export default Deleteteam;