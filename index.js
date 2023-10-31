const express = require("express");
const mongoose = require("mongoose");
const path = require('path');
const app = express();
const ejs = require("ejs")

app.use('/styles', express.static(path.join(__dirname, 'styles')));
app.use('/public', express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));
mongoose.connect('mongodb://localhost:27017/VolunteerManagement')
    .then(() => {
        console.log("Database connected");
    })
    .catch(() => {
        console.log("Error connecting to the database");
    });

const eventData = require("./model/event");

app.set("view engine", "ejs");

app.get("/",(req,res)=>{
    res.render("Login")
})

app.get("/Home", async (req, res) => {
    try {
        const volunteerManagement = await eventData.find(); // Fetch data from the "eventData" collection
        res.render("Home", { volunteerManagement });
    } catch (error) {
        console.error(error);
        res.status(500).send("Error retrieving data.");
    }
});

app.get("/event", (req, res) => {
    res.render("event");
});

app.post("/event", async (req, res) => {
    const data = new eventData(req.body);
    await data.save();
    // Redirect to the Home page after saving the data
    res.redirect("/Home");
});


app.get("/About",(req,res)=>{
    res.render("About")
})
app.get("/Contact",(req,res)=>{
    res.render("Contact")
})

app.listen(5500, () => {
    console.log("Server is running on port 5500");
});
