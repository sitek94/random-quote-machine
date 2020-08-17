import React from 'react';
import {
  FaQuoteLeft,
} from 'react-icons/fa';

export default function Text({ text }) {
  return (
    <p id="text" className="Text">
      <FaQuoteLeft /> {text}
    </p>
  );
}