
// KEY Configuration, keys hidden in ENV
require("dotenv").config();

// DEBUG
// console.log('INPUT_ARGV.JS is loaded');
// console.log("inArgv..."); // WORKS
// console.log(inArgv); // WORKS

var methods = {};
methods.askViaArgv = function () {
  var searchStr = "";
  // console.log("Please enter a 'concert-this', 'spotify-this-song', or 'movie-this' search type AND a title or artist to search...");
  // console.log("Or you can enter 'do-what-it-says' and Liri will us instruction from the 'random.txt' file...")
  var qAnswers = [];
  // Handle 1st Arguement
  if ( (process.argv[2]) ) {
    if ( (process.argv[2]) === 'concert-this' ||
                               'movie-this' ||
                               'spotify-this-song'|| 
                               'do-what-it-says') {
      qAnswers.push(process.argv[2]); // searchType
      if (process.argv[2] === 'spotify-this-song') {
        // Set Default for when no song is entered...
        if (!process.argv[3]) {
          searchStr = "The Sign"; // Mr. Nobody
          qAnswers.push(searchStr); // searchStr
          return qAnswers;
        }
      }
      if (process.argv[2] === 'movie-this') {
        // Set Default for when no song is entered...
        if (!process.argv[3]) {
          searchStr = "Mr. Nobody"; // Default if no title entered
          qAnswers.push(searchStr); // searchStr
          return qAnswers;
        }
      }
      if (process.argv[2] === 'do-what-it-says') {
        // Set Default for when no song is entered...
        if (!process.argv[3]) {
          searchStr = "random.txt"; // Default if no file entered
          qAnswers.push(searchStr); // searchStr
          // console.log("qAnswers...");
          // console.log(qAnswers)
          return qAnswers;
        }
      }
    } else {
      console.log("I don't understand that request...");
      return null;
    }
  } else {
    console.log("Please enter a 'concert-this', 'spotify-this-song', or 'movie-this' search type...");
    return null;
  }

  // Handle 2nd Arguement
  if ( (process.argv[3]) ) {
    searchStr = process.argv.slice(3).join(' ');
    // console.log("searchStr = " + searchStr);
    qAnswers.push(searchStr); // searchStr
  } else {
    console.log("Please enter a title or artist to search...");
    return null;
  }
  // DEBUG
  // console.log("qAnswers[0] (i.e. searchType) = " + qAnswers[0]);
  // console.log("qAnswers[1] (i.e. searchStr) = " + qAnswers[1]);
  return qAnswers;
};

exports.data = methods;
