'use client'

import { useQuoteContext } from '@/app/utils/context/QuoteContext';
import React from 'react';

const RandomQuote = () => {
  const {randomQuote} = useQuoteContext()
  return (
    <div className=''>
      
    </div>
  );
};

export default RandomQuote;