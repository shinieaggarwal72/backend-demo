require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
})
app.get('/login', (req, res)=>{
    res.send('Login details')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
