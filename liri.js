var inArgv = require("./input_argv.js");

// OMDb Key
// ONLY PRINT FOR DEBUG!!!
// console.log ("keys.omdb.omdb_key = " + keys.omdb.omdb_key); // WORKS

// Re-factoring, separate files per function
var doSearch = require("./do_searches.js");

var searchParams = inArgv.data.askViaArgv(); // Uses ./input_argv.js
if ( searchParams ) {
  // DEBUG
  // console.log("searchType = " + searchParams[0]);  // WORKS
  // console.log("searchStr = " + searchParams[1]); // WORKS
  var searchType = searchParams[0];
  var searchStr = searchParams[1];
} else {
  console.log("Nothing entered... Please try again...");
  // Need to exit here...
};

var selectAction = function(searchType, searchStr) {
  var resultsObj = {};
  if ( searchType ) {
    switch (searchType) {
      case "concert-this":      resultsObj = doSearch.data.getBands(searchStr);
        break;
      case "spotify-this-song": resultsObj = doSearch.data.getSong(searchStr);
        break;
      case "movie-this":        resultsObj = doSearch.data.getMovie(searchStr);
        break;
      case "do-what-it-says":   console.log("\nGetting instrucions from 'random.txt'...")
        doSearch.data.getFromFile(searchStr); // Search string contains random.txt or user emtered file name
        break;
    }
    // DEBUG
    // console.log("resultsObj..."); // Comes back undefined, reason is TBD
    // console.log(resultsObj);
  } else {
    console.log("No search specified! Please re-start...");
  }
}

selectAction(searchType, searchStr);

exports.recursiveCall = selectAction;
