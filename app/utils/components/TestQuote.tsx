"use client";

import React from "react";
import { useQuoteContext } from "../context/QuoteContext";

const TestQuote = () => {
  const { author, getAuthorQuotes, getRandomQuote, quotes } = useQuoteContext();
  return (
    <div>
      <button onClick={() => getRandomQuote()}>Random Quote</button>
      <button onClick={() => getAuthorQuotes("Hosea Ballou")}>Random Quote from author</button>
      {quotes.map((quote) => (
        <h1 key={`${quote._id}`} className="my-4">{quote.quoteText}</h1>
      ))}
      <h2>- {author}</h2>
    </div>
  );
};

export default TestQuote;
