import React, { useState, useEffect } from 'react';
import { random } from 'lodash';
import './App.scss';
import Button from './Button';
import {
  FaFreeCodeCamp,
  FaGithub,
  FaTwitter,
  FaQuoteLeft,
} from 'react-icons/fa';
import colors from './colors';

const url =
  'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';

function BottomRow({ children }) {
  return <div className="BottomRow">{children}</div>;
}

function NewQuoteButton({ onClick }) {
  return (
    <Button id="new-quote" onClick={onClick} className="NewQuoteButton">
      New Quote
    </Button>
  );
}

function Link({ children, ...props }) {
  return (
    <a {...props} className="Link" target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

function Links({ text, author }) {
  return (
    <div className="Links">
      <Link href="https://github.com/sitek94" id="github">
        <FaGithub className="icon" />
      </Link>
      <Link
        href="https://forum.freecodecamp.org/u/sitek94/summary"
        id="free-code-camp"
      >
        <FaFreeCodeCamp className="icon" />
      </Link>
      <Link
        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
          `"${text}" - ${author}`
        )}&hashtags=quotes`}
        id="tweet-quote"
      >
        <FaTwitter className="icon" />
      </Link>
    </div>
  );
}

function Text({ text }) {
  return (
    <p id="text" className="Text">
      <FaQuoteLeft /> {text}
    </p>
  );
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
