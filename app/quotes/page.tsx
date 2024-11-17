import { SiteData } from '@/data/SiteData';
import { Metadata } from 'next';
import React from 'react';
import { AnimatedQuotes } from './_components/AnimatedQuotes';

export const metadata: Metadata = {
  title: `Quotes - ${SiteData.full_N}`,
  description: 'Random quotes to read through',
};

export type Quote ={
  q: string;
  a: string;
  c: string;
  h: string;
}

const QuotesPage = async () => {

  const response = await fetch('https://zenquotes.io/api/quotes', {
    headers: {
      Accept: 'application/json',
    },
  });
  const data: Quote[] = await response.json(); // Parse JSON response


  return (
    <div className="mx-auto max-w-2xl">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
          Quotes
        </h1>
        <p className="text-md leading-7 text-gray-500 dark:text-gray-400">
          Random quotes to read through
        </p>
      </div>

      <AnimatedQuotes  quotes={data}/>
    </div>
  );
};

export default QuotesPage;
