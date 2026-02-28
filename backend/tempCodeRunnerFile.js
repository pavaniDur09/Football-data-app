app.post('/add', (req,res)=>{
    const {Team, GamesPlayed, Win, Draw,Loss,GoalsFor,GoalsAgainst,Points,Year}=req.body;
    const doc1 = new FootballData({ 
        Team:"jacky",
        GamesPlayed:45, 
        Win:5,
        Draw:8, 
        Loss:0, 
        GoalsFor:7, 
        GoalsAgainst:0, 
        Points:8, 
        Year:2022 });
    // adding one document in the collection
    doc1
     .save()
     .then((doc1) => {
        res.send("New Article Has been Added Into Your DataBase.",doc1);
     })
     .catch((err) => {
     console.error(err);
     res.send({error:'failed to add data'});
     });
} );