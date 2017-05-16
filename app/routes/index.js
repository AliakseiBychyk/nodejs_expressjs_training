var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {

  var data = req.app.get('appData');
  var pagePhotos = [];
  var pageSpeakers = data.speakers;

  data.speakers.forEach(function (item) {
    pagePhotos = pagePhotos.concat(item.artwork);
  })


  res.render('index', {
    pageTitle: 'Home',
    artwork: pagePhotos,
    speakers: pageSpeakers,
    pageID: 'home'
  });

  // res.send(`
  //   <link rel="stylesheet" type="text/css" href="css/style.css" />
  //   <h1>Welcome to Roux Meetups! voila!</h1>
  //   <h2> le Beaujolais nouveau est arrive!</h2>
  //   <img src="/images/misc/background.jpg" 
  //   alt="background" style="height: 300px" />
  //   <p>Roux Academy Meetups put together artists from all walks of life</p>
  //   <script src="/reload/reload.js"></script>
  // `);
});

module.exports = router;