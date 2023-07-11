"use client";

import React from "react";
import { useQuoteContext } from "../../context/QuoteContext";

interface SingleQuoteProps {
  quote?: string;
}

const SingleQuote = ({ quote = "No quote" }: SingleQuoteProps) => {
  const {} = useQuoteContext();

  return <div className="border-l-8 border-[#F7DF94] w-full font-medium text-4xl pl-24 my-8">
    "{quote}"
  </div>;
};

export default SingleQuote;
