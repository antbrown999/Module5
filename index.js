const express = require("express"); //import the
const friendRoutes = require('./routes/friendRoutes')

const app = express(); // create new app
const port = 3000; // change this to run the app 

// parse requests of content-type - application/
app.use(express.json());

app.use('/', express.static('public'))
app.use('/friends', friendRoutes);

