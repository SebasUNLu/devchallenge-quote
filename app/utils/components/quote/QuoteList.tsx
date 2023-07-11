"use client";

import React from "react";
import { useQuoteContext } from "../../context/QuoteContext";
import RandomQuote from "./RandomQuote/RandomQuote";
import AuthorQuotes from "./authorQuotes/AuthorQuotes";
import Loader from "../Loader";

const QuoteList = () => {
  const { authorQuotes, loading } = useQuoteContext();

  if(loading) return <Loader />

  if (authorQuotes) return <AuthorQuotes />;

  return <RandomQuote />;
};

export default QuoteList;
