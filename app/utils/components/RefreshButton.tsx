"use client";

import React, { useState } from "react";
import { useQuoteContext } from "../context/QuoteContext";
import { BiRefresh } from "react-icons/bi";

const RefreshButton = () => {
  const { getRandomQuote } = useQuoteContext();
  const [hover, setHover] = useState(false);

  return (
    <div className="w-full flex justify-between my-10">
      <div>
      <h1 className="font-bold text-xl">Quote Generator</h1>
      <p className="font-medium text-sm">Using Quote Garden API</p>
      </div>
      <button
        className="p-3 border border-gray-600 hover:text-white hover:bg-[#333333] rounded flex items-center gap-2 transition-all duration-300"
        onClick={getRandomQuote}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        Generate Quote
        <BiRefresh
          height={24}
          width={24}
          className={`w-6 h-6 ${hover ? "rotate" : ""}`}
        />
      </button>
    </div>
  );
};

export default RefreshButton;
