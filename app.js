const express = require('express')
const app = express()
const port = 3000

app.get('/health', (req, res) => res.send('Hello kanmaniii!'))
app.use('/',express.static('public'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
