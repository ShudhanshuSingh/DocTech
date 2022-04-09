const bodyParser = require("body-parser");
const express = require("express");
// https://ibb.co/b5f0zFj
var cors = require('cors');
const mongoose = require('mongoose');
require("dotenv").config();

const PORT = 5000;


//import Routes

const app = express();

//Middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const postRoutes = require('./routes/posts');
const aadharUserRoutes = require('./routes/aadharUser');
const prescriptionRoutes = require('./routes/prescription');
const doctorRoutes = require('./routes/doctorData');
const doctorOnboardRoutes = require('./routes/doctorOnboard');

app.use('/posts',postRoutes);
app.use('/verify',aadharUserRoutes);
app.use('/prescription',prescriptionRoutes);
app.use('/doctor',doctorRoutes);
app.use('/docOnboard',doctorOnboardRoutes);




app.get("/", (req, res) => {
  // res.send(otp.totp());
  res.send("OTP")
});
app.post("/", (req, res) => {
  
});


// Connection to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true },
  () => {console.log("Connected to DB")}
);

app.listen(PORT, () => console.log("Server Started"));
