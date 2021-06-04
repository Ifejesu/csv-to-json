// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.

//import packages
const csv = require("get-csv");
const fs = require("fs");
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// base route
app.get("/", (req, res) => {
  res.status(200).json({
    success: 1,
    message: "Ifejesu - CSV to JSON converter"
  });
});

// csv route
app.post("/csv", (req, res) => {
  //accept request parameters
  const csv_url = req.body.csv.url;
  const select_fields = req.body.csv.select_fields;

  // function to generate unique identifier
  function create_UUID() {
    var dt = new Date().getTime();
    var uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(
      c
    ) {
      var r = (dt + Math.random() * 16) % 16 | 0;
      dt = Math.floor(dt / 16);
      return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
    });
    return uuid;
  }

  //assign unique id to a variable
  let id_key = create_UUID();

  // read csv file and send json response
  try {
    csv(csv_url).then(rows => {
      res.status(200).json({
        success: 1,
        conversion_key: id_key,
        json: rows
      });
    });
  } catch (error) {
    res.status(400).json({
      success: 0,
      message: "The file is not a valid CSV file"
    });
  }
});

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
