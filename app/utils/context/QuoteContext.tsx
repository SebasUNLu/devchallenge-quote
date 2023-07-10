"use client";

import {
  createContext,
  useState,
  useContext,
  PropsWithChildren,
  useEffect,
} from "react";
import { Quote, ApiResponse } from "../types";

interface QuoteContextProps {
  quotes: Quote[];
  author: string;
  getRandomQuote: () => void;
  getAuthorQuotes: (author: string) => void;
}

const QuoteContext = createContext<QuoteContextProps>({
  author: "",
  quotes: [],
  getRandomQuote: () => {},
  getAuthorQuotes: (author: string) => {},
});

const QuoteContextProvider = ({ children }: PropsWithChildren<{}>) => {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [author, setAuthor] = useState("");

  const getRandomQuote = async () => {
    try {
      const response: ApiResponse = await fetch(
        `https://quote-garden.onrender.com/api/v3/quotes/random`
      ).then((res) => {
        return res.json();
      });
      setQuotes(response.data);
      setAuthor(response.data[0]?.quoteAuthor);
    } catch (e) {
      console.log(e);
    }
  };

  const getAuthorQuotes = async (author: string) => {
    try {
      const response: ApiResponse = await fetch(
        `https://quote-garden.onrender.com/api/v3/quotes?author=${author}`
      ).then((res) => {
        return res.json();
      });
      setQuotes(response.data);
      setAuthor(response.data[0]?.quoteAuthor);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <QuoteContext.Provider
      value={{ author, quotes, getRandomQuote, getAuthorQuotes }}
    >
      {children}
    </QuoteContext.Provider>
  );
};

export default QuoteContextProvider;

export const useQuoteContext = () => useContext(QuoteContext);
