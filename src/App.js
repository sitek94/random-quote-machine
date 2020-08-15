import React, { useState, useEffect } from 'react';
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
  const [quotes, setQuotes] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setQuotes(data.quotes);
      });
  };

  

  return (
    <div id="quote-box">
      <div id="text">{text}</div>
      <div id="author">Author</div>
      <button id="new-quote">New Quote</button>
      <a href="twitter.com/intent/tweet" id="tweet-quote">
        Tweet quote
      </a>
    </div>
  );
}

export default App;
