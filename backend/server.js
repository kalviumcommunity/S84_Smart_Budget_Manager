const express = require("express");
const app = express();

const PORT = 8080;

app.get("/", (req, res) => {
    res.send("My name is Avinash. I am from squad-84")
})

app.listen(8080, () => {
    console.log(`Server is running on port ${PORT}`)
})