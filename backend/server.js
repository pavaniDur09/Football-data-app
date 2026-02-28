const express = require('express');
const bodyParser = require('body-parser');
const FootballData = require('./footballSchema');
const dbconnection=require('./dbconnection');

const app = express();
app.use(express.json());
app.use(bodyParser.json());

dbconnection;
app.get('/', (req,res)=>{
    res.send('welcome to Football rest api');
})
//1.5
app.post('/add', async(req,res)=>{
    try {
        const footballRecord = new FootballData(req.body);
        await footballRecord.save();
        res.status(201).send('Record added successfully');
      } catch (err) {
        res.status(500).send(err.message);
      }
} );
//1.6
app.post('/update', async(req, res) => {
    try {
        const { team, ...updateData } = req.body;
        const updated = await FootballData.updateOne({ team }, updateData);
        if (updated.matchedCount === 0) {
          return res.status(404).send('Team not found');
        }
        res.send('Record updated successfully');
      } catch (err) {
        res.status(500).send(err.message);
      }
});
//1.7
app.post('/delete',async(req,res)=>{
    try {
        const { team } = req.body;
        const deleted = await FootballData.deleteOne({ team });
        if (deleted.deletedCount === 0) {
          return res.status(404).send('Team not found');
        }
        res.send('Record deleted successfully');
      } catch (err) {
        res.status(500).send(err.message);
      }
});
//1.8
app.get('/Totalgames/:Year', (req, res) => {
    const { Year } = req.params;

    FootballData.aggregate([
        { $match: { Year: parseInt(Year) } },
        {
            $group: {
                _id: null,
                totalGamesPlayed: { $sum: "$Games Played" },
                totalWin: { $sum: "$Win" },
                totalDraw: { $sum: "$Draw" },
            },
        },
    ])
        .then((Totalgames) => res.send({ Year, Totalgames }))
        .catch((error) => res.send({ message: error.message }));
});
//1.9
app.get('/wins/:value', (req, res) => {
    const { value } = req.params;

    FootballData.find({ Win: { $gt: parseInt(value) } })
        .limit(10)
        .then((records) => res.send(records))
        .catch((error) => res.send({ message: error.message }));
});
//2.0
app.get('/avg-goals/:Year', (req, res) => {
    const { Year } = req.params;

    FootballData.aggregate([
        { $match: { Year: parseInt(Year) } },
        {
            $group: {
                _id: "$team",
                avgGoalsFor: { $avg: "$Goals For" },
            },
        },
    ])
        .then((records) => res.send(records))
        .catch((error) => res.send({ message: error.message }));
});

app.listen(4000,function(){
    console.log('server is running on port 4000')
})