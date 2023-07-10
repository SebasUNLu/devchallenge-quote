export interface ApiResponse {
  statusCode: number,
  message: string,
  pagination: {
    currentPage: number,
    nextPage: number | null,
    totalPages: number
  },
  totalQuotes: number,
  data: Quote[]
}

export interface Quote {
  _id: string,
  quoteText: string,
  quoteAuthor: string,
  quoteGenre: string,
  __v: number
}