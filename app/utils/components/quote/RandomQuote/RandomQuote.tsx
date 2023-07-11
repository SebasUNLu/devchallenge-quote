"use client";

import { useQuoteContext } from "@/app/utils/context/QuoteContext";
import React from "react";
import SingleQuote from "../SingleQuote";
import { FaLongArrowAltRight } from "react-icons/fa";

const RandomQuote = () => {
  const { randomQuote } = useQuoteContext();
  return (
    <div className="flex flex-col items-center justify-center">
      <SingleQuote quote={randomQuote?.quoteText} />
      <button
        onClick={() => console.log("loading...")}
        className="w-9/12 bg-[#333333] items-center justify-between flex px-7 py-12 rounded mt-12"
      >
        {randomQuote?.quoteAuthor}
        <FaLongArrowAltRight />
      </button>
    </div>
  );
};

export default RandomQuote;
