// To begin, run npm init, and fill out the information
// To install the needed packages, run in the terminal
// npm install express --save
// npm install socket.io --save
// npm install twit -- save
require('dotenv').load();

var express = require('express')
  , app = express()
  , http = require('http')
  , server = http.createServer(app)
  , Twit = require('twit')
  , io = require('socket.io').listen(server);

  app.use(express.static('public'))
  app.use("/public", express.static(__dirname + "/public"));

  server.listen(process.env.PORT || 5000);

  var qterm="Katy Perry";

// routing
app.get('/', function (req, res) {
res.sendFile(__dirname + '/index.html');
});

var watchList = {q: qterm, result_type: "mixed"};
 var T = new Twit({
    consumer_key:         process.env.CONSUMER_KEY
  , consumer_secret:      process.env.CONSUMER_SECRET
  , bearer_token:         process.env.BEARER_TOKEN
})

io.sockets.on('connection', function (socket) {
  console.log('Connected');


 var stream = T.stream('search/tweets.json', { track: watchList })

  stream.on('tweet', function (tweet) {

    io.sockets.emit('stream',tweet.text);
    console.log(tweet.text);

  });
 });