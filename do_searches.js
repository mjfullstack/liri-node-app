// DEBUG
// console.log('DO_SEARCHES.JS is loaded');

require("dotenv").config();
var moment = require('moment');
var keys = require("./keys.js");
var request = require('request');
var Spotify = require('node-spotify-api');
// var spotify = new Spotify(keys.spotify);
// ONLY FOR DEBUG!!!
// console.log ("spotify.id = " + spotify.credentials.id); // works with ".credentials"
// console.log ("spotify.secret = " + spotify.credentials.secret);

// Object for these methods to be exported...
var methods = {};
// BandsInTown
methods.getBands = function(bandToSearch) {
  // Form the URL...
  var bandsBaseURL = "https://rest.bandsintown.com/artists/";
  var bandsKey = '?app_id=codingbootcamp';
  var artistToSearch = bandToSearch + "/events"
  var bandsReqURL = bandsBaseURL + artistToSearch + bandsKey;
  // console.log("bandsReqURL = " + bandsReqURL);
  // Make request... using callback for now...
  request(bandsReqURL, function (error, response, body) {
    if (error) {
      console.log('error:', error); // Print the error if one occurred
    };
    // if (response.statusCode !== "200") {
    //   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // };
    body = JSON.parse(body, null, 2)
    // return body; // NOPE, Have to process it HERE since it returns undefined!
    
    // Headliner
    // console.log("Headliner:\t" + body[0].venue.lineup.[0]);

    // Name of the venue
    console.log("\nName of the Venue:\t" + body[0].venue.name);
    
    // Venue location
    console.log("Location of the Venue:\t" + body[0].venue.city +", " + body[0].venue.country);

    // Date of the Event in "MM/DD/YYYY" format via moment
    var concertDate = moment(body[0].datetime).format("MM-DD-YYYY");
    var concertDay = moment(body[0].datetime).format("ddd");
    var concertTime = moment(body[0].datetime).format("h:mm:A");
    console.log("Date of the Event:\t" + concertDay + " " + concertDate + " @ " + concertTime);
  });
}

// Spotify
methods.getSong = function(songToSearch) {
  // Create instance...
  var spotify = new Spotify(keys.spotify);

  // Use "search" method
  spotify
  // .search({ type: 'artist OR album OR track',
  // .search({ type: 'artistk',
  // .search({ type: 'album',
  .search({ type: 'track',
            query: songToSearch,
            limit: 3 })
  .then(function(response) {
    // DEBUG
    // console.log("Now we got some SPOTIFY SONG DATA(data) to work with"); 
    // console.log(response);
    // respJSON = JSON.parse(response);
    // console.log("respJSON...");
    // console.log(respJSON);
    // console.log("\nresponse.tracks.items[0]..."); // WORKS
    // console.log(response.tracks.items[0]); // WORKS
    // console.log("\nresponse.tracks.items[0].album.artists..."); // WORKS
    // console.log(response.tracks.items[0].album.artists); // WORKS
    // console.log("\nresponse.tracks.items[0].album.artists[0]..."); // 
    // console.log(response.tracks.items[0].album.artists[0]); // WORKS
    // console.log("\nresponse.tracks.items[0].album.artists[0].external_urls..."); // 
    // console.log(response.tracks.items[0].album.artists[0].external_urls); // WORKS
    // console.log("\nresponse.tracks.items[0].album.artists[0].name..."); // 
    console.log("\nArtist(s):\t" + response.tracks.items[0].album.artists[0].name); // WORKS
    // console.log("\nresponse.tracks.items[0].name..."); // WORKS
    console.log("Song's name:\t" + response.tracks.items[0].name); // WORKS
    // console.log("\nresponse.tracks.items[0].album.artists[0].external_urls.spotify..."); // 
    console.log("Preview Link:\t" + response.tracks.items[0].album.artists[0].external_urls.spotify); // WORKS
    // console.log("\nresponse.tracks.items[0].album.name..."); // WORKS
    console.log("Album:\t\t" + response.tracks.items[0].album.name); // WORKS
// return response; // have to process it HERE since
  })
  .catch(function(err) {
    console.log(err);
  });
}

// OMDb
methods.getMovie = function(movieToSearch) {
  // Form the URL...
  var movieBaseURL = 'http://www.omdbapi.com/';
  var movieKey = '&apikey=' + keys.omdb.omdb_key;
  var movieReqURL = movieBaseURL + '?t=' + movieToSearch + movieKey
  console.log("movieReqURL = " + movieReqURL);
  // Make request... using callback for now...
  request(movieReqURL, function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // console.log('body:', body);
    bodyJSON = JSON.parse(body, null, 2)
    console.log("bodyJSON...");
    console.log(bodyJSON);
// return body; // Have to process it HERE since it returns undefined!
});
}

exports.data = methods;
