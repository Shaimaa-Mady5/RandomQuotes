function quoteAppears() {

    var quoteWriterImg = [
        '<img src="images/q1.jpg" alt="Oscar Wilde">' ,
        '<img src="images/q2.jpg" alt="Albert Einstein">',
        '<img src="images/q3.jpg" alt="Bernard M. Baruch">',
        '<img src="images/q4.jpg" alt="J.K. Rowling">',
        '<img src="images/q5.jpg" alt="Maya Angelou">',
        '<img src="images/q6.jpg" alt="Mahatma Gandhi">'

    ];
    

  var quotes = [
    "Be yourself; everyone else is already taken." ,
    "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe." ,
    "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind." ,
    "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
    "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
    "Be the change that you wish to see in the world."
];

var author=[
    "- Oscar Wilde -",
    "- Albert Einstein -", 
    "- Bernard M. Baruch -",
    "- J.K. Rowling -",
    "- Maya Angelou -",
    "- Mahatma Gandhi -"
];

    var randomNum = Math.floor(  Math.random() * quotes.length );
   
    document.getElementById('quoteImg').innerHTML = quoteWriterImg[randomNum];
    document.getElementById('quote').innerHTML = quotes[randomNum];
    document.getElementById('quotesWriter').innerHTML= author[randomNum];
}




