
var inquirer = require('inquirer');
console.log('INPUT_INQUIRER.JS is loaded');
// var inInq = require("./input_inquirer.js");
// console.log("inInq..."); // WORKS
// console.log(inInq); // WORKS
// var searchParams = inInq.data.askViaInquirer(); // Uses ./input_inquirer.js 

var methods = {};

/**
 * Checkbox list examples
 */

// 'use strict'; // Investigate WHY...
methods.askViaInquirer = function() {
  inquirer
    .prompt([
      // Here we create a checkbox prompt.
      {
        type: 'checkbox',
        message: 'Select What to Search...',
        name: 'searchType',
        choices: [
          new inquirer.Separator(' ====== Enter via Keyboard... ======= '),
          {
            name: 'bandToSearch',
            message: 'concert-this'
          },
          {
            name: 'songToSearch',
            message: 'spotify-this-song'
          },
          {
            name: 'movieToSearch',
            message: 'movie-this'
          },
          new inquirer.Separator(' ======= From Text File... ======= '),
          {
            name: 'fileToUse',
            message: 'Using random.txt...'
            // checked: true
          }
        ],
        validate: function(answer) {
          if (answer.length < 1) {
            return 'You must choose at least one search method.';
          }
          return true;
        }
      },
      {
        name: 'searchStr',
        message: 'Enter your text to search...'
      }
    ])
    .then(answers => {
      console.log(JSON.stringify(answers, null, '  '));
      console.log(answers);
      console.log(answers.searchType[0]);
      console.log(answers.searchStr);
      var qAnswers = [];
      qAnswers.push(answers.searchType[0]);
      qAnswers.push(answers.searchStr);
            
      return qAnswers;
    });
  };

  exports.data = methods;
