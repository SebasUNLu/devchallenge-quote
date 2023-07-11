import React from "react";
import RefreshButton from "./RefreshButton";
import QuoteList from "./quote/QuoteList";

const QuotePage = () => {
  return (
    <div className="w-full flex flex-col items-center max-w-2xl">
      <RefreshButton />
      <div className="w-10/12 my-8">
        <QuoteList />
      </div>
    </div>
  );
};

export default QuotePage;
