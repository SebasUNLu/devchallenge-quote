"use client";

import React from "react";
import { useQuoteContext } from "../../context/QuoteContext";
import RandomQuote from "./RandomQuote/RandomQuote";
import AuthorQuotes from "./authorQuotes/AuthorQuotes";

const QuoteList = () => {
  const { randomQuote, authorQuotes } = useQuoteContext();

  if (authorQuotes) return <AuthorQuotes />;

  return <RandomQuote />;
};

export default QuoteList;
