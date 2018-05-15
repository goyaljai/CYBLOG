
const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('LNMIIT BLOG!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))
