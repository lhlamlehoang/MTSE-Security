const path = require('path');
const express = require('express');

const PORT = 3000;

const app = express();

app.use('/secret', (req, res) => {
    return res.send('Your personal secret is 42!');
})

app.use('/', (req, res) =>{
    return res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

app.listen(PORT, () =>{
    console.log(`Listening on PORT ${PORT}...`)
})