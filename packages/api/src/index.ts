
const express = require('express')
const app = express()
const port = 4242;

app.get('/', (req : any, res : any) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
