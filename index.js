const express = require("express");

const app = express();
app.get("/", (req, res) => {
    res.json({test: "ytest"})
})
app.listen(3005, () => {

    console.log(
    "server started on 3005")
})