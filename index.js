// Adding modules
const express = require('express');
const path = require('path');

// Make an express app
const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded());

// Primary Router
app.use('/api/dialogflow',require('./server/routes/dialogflow'));

// Define port number to run app
const port = process.env.PORT || 5000;

// Host the app
app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
})

