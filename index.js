const express = require('express')
const app = express()
const csvFilePath='uscitiesv1.4.csv'
const csv=require('csvtojson')

csv()
.fromFile(csvFilePath)
.then((cityData)=>{
    app.get('/cityGeoCode', (req, res) => {
        let city = req.query.city;
        let state = req.query.state;
        console.log(req.query)
        var found = cityData.find(function(element) {
            return element.city === city && element.state_id === state;
          });
        if(found){
            res.send(found)
        } else {
            res.send("Data not found.")
        }
        
    })
})

app.get('/', (req, res) => {

        res.send("App Working!")
  
    
})

app.listen(process.env.PORT || 3000, () => console.log(`Example app listening on port ${port}!`))