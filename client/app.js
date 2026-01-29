const express = require('express');
const app = express();

// Serve static files from the public directory
app.use(express.static('public'));

// Define a route for the root URL
app.get('/', (req,res) => {
    res.send('Greetings, Earth!');
    console.log('Root route accessed');
});

//Start the server
app.listen(3000, () => {
    console.log('App listening at http://localhost:3000');
});