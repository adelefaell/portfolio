import { SiteData } from '@/data/SiteData';
import { Metadata } from 'next';
import React from 'react';
import { ShinyButton } from './_components/ShinyButton';

import { ArrowUpIcon } from '@radix-ui/react-icons';

export const metadata: Metadata = {
  title: `Random Joke - ${SiteData.full_N}`,
  description: 'Random Dad Joke',
};

const RandomJokePage = async () => {
  const response = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'application/json',
    },
    next: { tags: ['randomJoke'] },
  });
  const data: {
    id: string;
    joke: string;
    status: number;
  } = await response.json(); // Parse JSON response

  if (!response.ok) {
    return (
      <section className="flex flex-col items-center gap-8 justify-center my-24">
        <ShinyButton disabled>Sorry, no joke available right now!</ShinyButton>
      </section>
    );
  }

  return (
    <section className="flex flex-col items-center gap-8 justify-center my-24">
      <ShinyButton>{data.joke}</ShinyButton>

      <div className="flex flex-col items-center gap-3">
        <ArrowUpIcon />
        New Joke? Press.
      </div>
    </section>
  );
};

export default RandomJokePage;
