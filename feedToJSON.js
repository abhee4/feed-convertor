var express = require('express');

var Feed = require('rss-to-json');

var app = express();

app.get('/getjson', function(req, res){

    let rssURL = req.query.feedurl;

    Feed.load(rssURL, function(err, rss){ 

    res.end(JSON.stringify(rss));
  });
   //res.send("Hello world!");
});

app.listen(3000);
