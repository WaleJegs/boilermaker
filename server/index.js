const path = require('path')
const express = require('express');
const app = express();
const port = process.env.PORT || 1337;

app.listen(port, () => {
    console.log(`port is listening on ${port}`)
})

app.use(express.static(path.join(__dirname, '../public')))

app.get('*', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})