"use client";

import { useQuoteContext } from "@/app/utils/context/QuoteContext";
import React from "react";
import SingleQuote from "../SingleQuote";

const AuthorQuotes = () => {
  const { randomQuote, authorQuotes } = useQuoteContext();
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="self-baseline font-bold text-4xl">{authorQuotes?.author}</h1>
      {authorQuotes?.quotes.map((quote) => (
        <SingleQuote quote={quote.quoteText} key={`${quote._id}`} />
      ))}
    </div>
  );
};

export default AuthorQuotes;
