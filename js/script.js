/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
let quotes = [
  {
    quote: `People with talent often have the wrong impression that things will go as they think.`,
    source: `Karma Akabane`,
    citation: `Assassination Classroom`
  },
  {
    quote: `Human strength lies in the ability to change yourself.`,
    source: `Saitama`,
    citation: `One punch man`
  },
  {
    quote: `You should enjoy the little detours to the fullest. Because that's where you'll find the things more important than what you want.`,
    source: `Ging Freecss`,
    citation: `HXH`
  }, 
  {
    quote: `Any fool can write code that a computer can understand. Good programmers write code that humans can understand.`,
    source: `Martin Fowler`
  }, 
  {
    quote: `Wax on, wax off.`,
    source: `Mr Miyagi`,
    citation: `The Karate Kid`,
    year: 1984
  }, 
  {
    quote: `Why so serious?`,
    source: `Joker`,
    citation: `The Dark Knight`,
    year: 2008
  }
];


/***
 * `getRandomQuote` function
***/
const getRandomQuote = (array) => {
  let randomNumber = Math.floor(Math.random() * array.length);
  return array[randomNumber];
}


/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

// document.getElementById('load-quote').addEventListener("click", printQuote, false);