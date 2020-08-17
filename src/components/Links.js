import React from 'react';
import { FaFreeCodeCamp, FaGithub, FaTwitter } from 'react-icons/fa';

function Link({ children, ...props }) {
  return (
    <a {...props} className="Link" target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export default function Links({ text, author }) {
  const twitterLink = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    `"${text}" - ${author}`
  )}&hashtags=quotes`;

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
      <Link href={twitterLink} id="tweet-quote">
        <FaTwitter className="icon" />
      </Link>
    </div>
  );
}
