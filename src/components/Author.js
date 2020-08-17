import React from 'react';

export default function Author({ name }) {
  return (
    <span id="author" className="Author">
      &mdash; {name}
    </span>
  );
}