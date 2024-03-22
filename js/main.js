var authorsNames = [
  "-- Oscar Wilde --",
  "-- Frank Zappa --",
  "-- Albert Einstein --",
  "-- Marcus Tullius Cicero --",
  "-- Bernard M. Baruch --",
  "-- Dr. Seuss --",
];

var quotes = [
  "“Be yourself; everyone else is already taken.”",
  "“So many books, so little time.”",
  "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
  "“A room without books is like a body without a soul.”",
  "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
  "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
];

var authorImage = [
  "images/a22.jpg",
  "images/a9.jpg",
  "images/a6.jpg",
  "images/a8.jpg",
  "images/a20.jpg",
  "images/a13.jpg",
];

var previousIndex = -1;

function randomQuote() {
  var randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * quotes.length);
  } while (randomIndex == previousIndex);

  previousIndex = randomIndex;

  document.getElementById("quoteText").innerHTML = quotes[randomIndex];
  document.getElementById("authorText").innerHTML = authorsNames[randomIndex];
  document
    .getElementById("authorImage")
    .setAttribute("src", `${authorImage[randomIndex]}`);
  document
    .getElementById("authorImage")
    .setAttribute("alt", `${authorsNames[randomIndex]}`);
}
