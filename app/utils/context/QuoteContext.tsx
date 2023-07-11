"use client";

import {
  createContext,
  useState,
  useContext,
  PropsWithChildren,
  useEffect,
} from "react";
import { Quote, ApiResponse, AuthorQuotes } from "../types";

const EMPTY_QUOTE: Quote = {
  __v: 0,
  _id: "",
  quoteAuthor: "",
  quoteGenre: "",
  quoteText: "",
};

const EMPTY_AUTHOR_QUOTES: AuthorQuotes = {
  author: "",
  quotes: [],
};

interface QuoteContextProps {
  randomQuote: Quote | null;
  authorQuotes: AuthorQuotes | null;
  loading: boolean;
  error: string | null;
  getRandomQuote: () => void;
  getAuthorQuotes: (author: string) => void;
}

const QuoteContext = createContext<QuoteContextProps>({
  randomQuote: EMPTY_QUOTE,
  authorQuotes: {
    author: "",
    quotes: [],
  },
  error: "",
  loading: false,
  getRandomQuote: () => {},
  getAuthorQuotes: (author: string) => {},
});

const QuoteContextProvider = ({ children }: PropsWithChildren<{}>) => {
  const [randomQuote, setRandomQuote] = useState<Quote | null>(null);
  const [authorQuotes, setAuthorQuotes] = useState<AuthorQuotes | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getRandomQuote();
  }, []);

  const setErrors = (
    error: string = "Algo ha salido mal. Vuelve a intentarlo más tarde"
  ) => {
    setError(error);
  };

  const getRandomQuote = async () => {
    setAuthorQuotes(null);
    setError('')
    setLoading(true);
    try {
      const response: ApiResponse = await fetch(
        `https://quote-garden.onrender.com/api/v3/quotes/random`
      ).then((res) => {
        return res.json();
      });
      // Las quotes vienen en un array, por eso saco el primero
      setRandomQuote(response.data[0]);
    } catch (e) {
      setErrors();
    } finally {
      setLoading(false);
    }
  };

  const getAuthorQuotes = async (author: string) => {
    setRandomQuote(null);
    setError('')
    setLoading(true);
    try {
      let quotes: Quote[] = [];
      let currentPage: number | null = 1;
      do {
        const response: ApiResponse = await fetch(
          `https://quote-garden.onrender.com/api/v3/quotes?author=${author}&page=${currentPage}`
        ).then((res) => {
          return res.json();
        });
        quotes = [...quotes, ...response.data];
        currentPage = response.pagination.nextPage;
      } while (currentPage);
      setAuthorQuotes({
        author,
        quotes,
      });
    } catch (e) {
      setErrors();
    } finally {
      setLoading(false);
    }
  };

  return (
    <QuoteContext.Provider
      value={{
        randomQuote,
        authorQuotes,
        error,
        loading,
        getRandomQuote,
        getAuthorQuotes,
      }}
    >
      {children}
    </QuoteContext.Provider>
  );
};

export default QuoteContextProvider;

export const useQuoteContext = () => useContext(QuoteContext);
