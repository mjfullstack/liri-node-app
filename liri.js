
require("dotenv").config();
var keys = require("./keys.js");

var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
console.log ("spotify..."); // gets object
console.log (spotify); // gets object
console.log ("spotify.id = " + spotify.credentials.id); // works with ".credentials"
console.log ("spotify.secret = " + spotify.credentials.secret);

/*********** No Worky Yet, IF ever! Not Needed ***************
var Omdb = require('node-omdb');
alert("Click State:Pending");
var omdb = new Omdb(keys.omdb);
console.log ("omdb...");
console.log (omdb);
console.log ("omdb.key = " + omdb.omdb_key);
console.log ("omdb.state = " + omdb.state);
 *********** No Worky Yet, IF ever! Not Needed ***************/
console.log ("keys.omdb.omdb_key = " + keys.omdb.omdb_key); // WORKS
