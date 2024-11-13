'use strict'

const express = require('express')

const PORT = 8000
const HOST = '0.0.0.0'

const app = express()
/*
[ROUTE] '/'
[Response] => Hello world!
 */
app.get('/', (req, res) => {
    res.send('Hello World\n')
})

/*
Optional [ROUTE] '/me'
[Response] => Dicoding username.
*/
app.get('/me', (req, res) => {
    res.send('pidelsitorus\n')
})


app.listen(PORT, HOST)
    console.log(`Server Running at http://${HOST}:${PORT}`)