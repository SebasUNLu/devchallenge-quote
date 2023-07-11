"use client";

import { useQuoteContext } from "@/app/utils/context/QuoteContext";
import React from "react";
import SingleQuote from "../SingleQuote";
import { FaLongArrowAltRight } from "react-icons/fa";

const RandomQuote = () => {
  const { randomQuote, getAuthorQuotes } = useQuoteContext();
  return (
    <div className="flex flex-col items-center justify-center">
      <SingleQuote quote={randomQuote?.quoteText} />
      <button
        onClick={() =>
          randomQuote?.quoteAuthor && getAuthorQuotes(randomQuote?.quoteAuthor)
        }
        className="w-9/12 hover:bg-[#333333] items-center justify-between flex px-7 py-12 rounded mt-12 transition-all furation-300 text-[#4F4F4F] hover:text-white border border-[#333333]"
      >
        <div className="flex flex-col items-center justify-between font-bold text-2xl">
          {randomQuote?.quoteAuthor}
          <h3 className="text-[#828282] self-baseline font-medium text-sm">{randomQuote?.quoteGenre}</h3>
        </div>
        <FaLongArrowAltRight className="w-6 h-6 text-white" />
      </button>
    </div>
  );
};

export default RandomQuote;
