var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var request = new XMLHttpRequest();
var cityName = "wakayama";
var ownApiKey = "0b93c807526aacc22ae0d9d0bf088c14"
var ownURL = "http://api.openweathermap.org/data/2.5/weather?q="+ cityName +"&appid="+ ownApiKey;

request.open('GET',ownURL,true);
request.responseType = 'json';

request.onload = function() {
  var data = this.response;
  console.log(data);

}

request.send();