const express = require('express')
const app = express()
const csvFilePath='uscitiesv1.4.csv'
const csv=require('csvtojson')
var port = process.env.PORT || 8000;
var path = require('path');


csv()
.fromFile(csvFilePath)
.then((cityData)=>{
    app.get('/cityGeoCode', (req, res) => {
        let city = req.query.city;
        let state = req.query.state;
        var found = cityData.find(function(element) {
            return element.city === city && element.state_id === state;
          });
        if(found){
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify(found))
        } else {
            res.send("City not in database!")
        }
        
    })
})

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/tryNow', (req, res) => {
    res.send("tryNow")
})

app.listen(port, function() {
    console.log("App is running on port " + port);
});