"use client";

import React from "react";
import { useQuoteContext } from "../../context/QuoteContext";
import RandomQuote from "./RandomQuote/RandomQuote";

const QuoteList = () => {

  const {randomQuote} = useQuoteContext()

  return <RandomQuote />
};

export default QuoteList;
