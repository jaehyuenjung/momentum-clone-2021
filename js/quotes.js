const quotes = [
    {
        quote: "The only way to do great work is to love the work you do.",
        author: "Steve Jobs",
    },
    {
        quote: "A rose by any other name would smell as sweet.",
        author: "William Shakespeare",
    },
    {
        quote: "Ask not what your country can do for you; ask what you can do for your country.",
        author: "John Kennedy",
    },
    {
        quote: "Eighty percent of success is showing up.",
        author: "Woody Allen",
    },
    {
        quote: "Genius is one percent inspiration and ninety-nine percent perspiration.",
        author: "Thomas Edison",
    },
    {
        quote: "He travels the fastest who travels alone.",
        author: "Rudyard Kipling",
    },
    {
        quote: "Hell has no fury like a woman scorned.",
        author: "William Congreve",
    },
    {
        quote: "If at first you don’t succeed, try, try again.",
        author: "W. E. Hickson",
    },
    {
        quote: "If you are going through hell, keep going.",
        author: "Winston Churchill",
    },
    {
        quote: "If you want something said, ask a man; if you want something done, ask a woman.",
        author: "Margaret Thatcher",
    },
]

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;