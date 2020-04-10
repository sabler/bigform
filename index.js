const express = require('express');
const bigapp = express();
const port = 808;


// Static files
bigapp.use(express.static('public'))


// Hello World -- Delete
bigapp.get ('/', (req, res) => res.send('Hi!'));


// Listening...
bigapp.listen(port, () => console.log('Listening on port 808! Talk to me at http://localhost:808'));
