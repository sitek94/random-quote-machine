import React from 'react';
import Button from './Button';

export default function NewQuoteButton({ onClick }) {
  return (
    <Button id="new-quote" onClick={onClick} className="NewQuoteButton">
      New Quote
    </Button>
  );
}