import React from 'react';
import RefreshButton from './RefreshButton';
import QuoteList from './quote/QuoteList';

const QuotePage = () => {
  return (
    <div className=''>
      <RefreshButton />
      <QuoteList />
    </div>
  );
};

export default QuotePage;