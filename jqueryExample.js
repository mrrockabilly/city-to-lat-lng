var request = require('ajax-request');
request('url', function(err, res, body) {});
 
request({
  url: 'https://mrrockabilly.herokuapp.com/cityGeoCode/?city=Los+Angeles&state=CA',
  method: 'GET'
}, function(err, res, body) {
  console.log(body)
});