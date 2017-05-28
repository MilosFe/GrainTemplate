var express = require("express");
var request = require("request");
var bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/app'));
app.set('port', (process.env.PORT || 6000));
app.set('app', __dirname + '/app');



app.get('/', function(request, result) {
    result.send('index');
})

app.listen(app.get('port'), function() {
    console.log('Node app is running on', app.get('port'));
});