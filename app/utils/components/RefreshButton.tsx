"use client";

import React from "react";
import { useQuoteContext } from "../context/QuoteContext";
import { BiRefresh } from "react-icons/bi";

const RefreshButton = () => {
  const { getRandomQuote } = useQuoteContext();

  return (
    <div className="w-full flex justify-end my-10">
      <button className="p-3 bg-gray-600 rounded flex items-center gap-2" onClick={getRandomQuote}>
        Generate Quote
        <BiRefresh height={24} width={24} className="w-6 h-6" />
      </button>
    </div>
  );
};

export default RefreshButton;
