const express = require('express')
const app = express()
const port = 3000


const csvFilePath='uscitiesv1.4.csv'
const csv=require('csvtojson')
csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
    app.get('/', (req, res) => res.send(jsonObj))
})



app.listen(port, () => console.log(`Example app listening on port ${port}!`))