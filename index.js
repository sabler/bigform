const express = require('express');
const bigapp = express();
const port = 8080;

bigapp.get ('/', (req, res) => res.send('Hi!'));


bigapp.listen(port, () => console.log('Listening on port 8080! Talk to me at http://localhost:8080'));
