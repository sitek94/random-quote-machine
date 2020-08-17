import React, { useState, useEffect } from 'react';
import { random } from 'lodash';
import './App.scss';

import colors from './colors';

import Links from './components/Links';
import NewQuoteButton from './components/NewQuoteButton';
import Text from './components/Text';

const url =
  'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';

function BottomRow({ children }) {
  return <div className="BottomRow">{children}</div>;
}



function Author({ name }) {
  return (
    <span id="author" className="Author">
      &mdash; {name}
    </span>
  );
}

function QuoteBox({ onNewQuoteClick }) {
  const [quotedText, setQuotedText] = useState('');
  const [authorName, setAuthorName] = useState('');

  useEffect(() => {
    fetchRandomQuote();
  }, []);

  const fetchRandomQuote = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const quotes = data.quotes;
        // Get random quote
        const randomNum = random(0, quotes.length);
        const randomQuote = quotes[randomNum];

        setAuthorName(randomQuote.author);
        setQuotedText(randomQuote.quote);
      })
      .catch((error) => {
        
        console.log(error);
        setAuthorName("Maciek");
        setQuotedText("Something went wrong and we couldn't load the quote, please try again :)");
      });
  };

  const handleNewQuoteClick = () => {
    onNewQuoteClick();
    fetchRandomQuote();
  }

  return (
    <div id="quote-box" className="QuoteBox">
      <Text text={quotedText} />
      <Author name={authorName} />

      <BottomRow>
        <Links text={quotedText} author={authorName} />
        <NewQuoteButton onClick={handleNewQuoteClick} />
      </BottomRow>
    </div>
  );
}

function App() {
  const [theme, setTheme] = useState(colors[2]);

  const style = {
    '--primary': theme.main,
    '--primary-dark': theme.dark,
  };

  const changeTheme = () => {
    const randomNum = colors[random(0, colors.length - 1)];

    setTheme(randomNum);
  }

  return (
    <div className="App" style={style}>
      <QuoteBox onNewQuoteClick={changeTheme}  />
    </div>
  );
}

export default App;
