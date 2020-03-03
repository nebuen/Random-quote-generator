/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
 * citation = '' // year = 0 so i can use it for conditional much easier
***/
let quotes = [
  {
    quote: `People with talent often have the wrong impression that things will go as they think.`,
    source: `Karma Akabane`,
    citation: `Assassination Classroom`,
    year: 0
  },
  {
    quote: `Human strength lies in the ability to change yourself.`,
    source: `Saitama`,
    citation: `One punch man`,
    year: 0
  },
  {
    quote: `You should enjoy the little detours to the fullest. Because that's where you'll find the things more important than what you want.`,
    source: `Ging Freecss`,
    citation: `HXH`,
    year: 0
  }, 
  {
    quote: `Any fool can write code that a computer can understand. Good programmers write code that humans can understand.`,
    source: `Martin Fowler`,
    citation: '',
    year: 0
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
 * select number from 0 - 5 as the index starts with zero. no need to add 1
***/
const getRandomQuote = (array) => {
  let randomNumber = Math.floor(Math.random() * array.length);
  return array[randomNumber];
}


/***
 * `getRandomColor` function
 * got this code from `https://stackoverflow.com/questions/1484506/random-color-generator`
***/
const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  total = document.body.style.backgroundColor = color;
  return total;
}

/***
 * `printQuote` function
 * - randomNumber() function to give us random number. randomly select array object from array `quotes`
 * - made variable for every .notation to get the `values` from the `quoute` array to make a lot easier to use for the conditional
***/
const printQuote = () => {
  randomNumber = getRandomQuote(quotes);
  quote = randomNumber.quote;
  source = randomNumber.source;
  citation = randomNumber.citation;
  year = randomNumber.year;
  html = '';
// not adding citation and year incase we don't have any.
  if(citation == ''){
    html += `<p class="quote">${quote}</p>
              <p class="source">${source}
              `;


    if (year == 0){
      html += `</p>`;
    } else {
      html += `<span class = "year">${year}</span></p>`;
    }


  } else {
    html += `<p class="quote">${quote}</p>
              <p class="source">${source}
              <span class = "citation">${citation}</span>
              `;


    if (year == 0){
      html += `</p>`;
    } else {
      html += `<span class = "year">${year}</span></p>`;
    }


  }
  getRandomColor();
  return document.getElementById('quote-box').innerHTML = html;
}
console.log(printQuote());

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

// call printQuote function every 10 seconds
document.getElementById('load-quote').addEventListener("click", printQuote, false);
setInterval(printQuote, 10000);