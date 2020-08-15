import React, { useState, useEffect } from 'react';
import { random } from 'lodash';
import './App.css';

const text =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci repudiandae ut repellat ullam, facilis molestiae qui voluptatum minus ab debitis. Voluptatibus hic unde laudantium ea? Aspernatur quasi eos doloribus distinctio?';

const url =
  'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';

function App() {
  return (
    <div className="App">
      <QuoteMachine />
    </div>
  );
}

function QuoteMachine() {
  const [text, setText] = useState('');
  const [author, setAuthor] = useState('')

  useEffect(() => {
    fetchRandomQuote();
  }, []);

  const fetchRandomQuote = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const quotes = data.quotes;
        const randomNum = random(0, quotes.length);
        const randomQuote = quotes[randomNum];

        setAuthor(randomQuote.author);
        setText(randomQuote.quote);
      });
  };

  return (
    <div id="quote-box">
      <div id="text">{text}</div>
      <div id="author">{author}</div>
      <button id="new-quote" onClick={fetchRandomQuote}>New Quote</button>
      <a href="twitter.com/intent/tweet" id="tweet-quote">
        Tweet quote
      </a>
    </div>
  );
}

export default App;
