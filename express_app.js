//Now all http work are done by expressJs in simpler manner
//Previsouly I have to done manually set end points
const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/about', (req, res)=>{
    res.end("This is about page")
})
app.get('/home', (req, res)=>{
    res.end("This is home page")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)})