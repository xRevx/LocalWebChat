const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const userRoute = require("./Routes/userRoute")
const chatRoute = require("./Routes/chatRoute")


const app = express()
require("dotenv").config()

app.use(express.json())
app.use(cors())
app.use("/api/users", userRoute)
app.use("/api/chat", chatRoute)

//CRUD

app.get("/", (req, res) =>{
    res.send("Welcome to our chat app APIs..")
});



const port = process.env.port || 5000;
const uri = process.env.ATLAS_URI;

app.listen(port, (req, res) =>{
    console.log(`Server running on port...:  ${port}`)
})

mongoose.connect(uri,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => console.log("monogclat connetction established")).
    catch((error) => console.log("MongoDB connection faild: ", error.message))