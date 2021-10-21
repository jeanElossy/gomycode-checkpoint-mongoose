const express = require("express");
const app = express();
require("./models/db_confg");


app.listen(8080, (req, res) => {
    console.log(`server starting`);
})
