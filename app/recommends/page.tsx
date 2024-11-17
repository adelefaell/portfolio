import { SiteData } from '@/data/SiteData';
import React from 'react';
import { RecommendCard } from './_components/RecommendCard';
import { movieData, tvSeriesData } from '@/data/cenimaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Recommendations - ${SiteData.full_N}`,
  description: 'Recommended movies and tv-series.',
};

const RecommendsPage = () => {
  return (
    <div className="mx-auto max-w-3xl">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
          Recommends
        </h1>
        <p className="text-md leading-7 text-gray-500 dark:text-gray-400">
          A list of recommended movies and tv-series.
        </p>
      </div>

      <div className="container py-7">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5 ">
          <h2 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-4xl md:leading-14">
            <span
              role="img"
              className="mr-4"
              aria-label="wave"
            >
              🍿
            </span>
            Movies
          </h2>
          <p className="text-md leading-7 text-gray-500 dark:text-gray-400">
            You&apos;ll never forget these movies.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 py-4">
          {movieData.map((d) => (
            <RecommendCard
              key={d.title}
              title={d.title}
              description={d.description}
              tags={d.tags}
              href={d.href}
            />
          ))}
        </div>
      </div>

      <div className="container py-7">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5 ">
          <h2 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-4xl md:leading-14">
            <span
              role="img"
              className="mr-4"
              aria-label="wave"
            >
              📺
            </span>
            TV Series
          </h2>
          <p className="text-md leading-7 text-gray-500 dark:text-gray-400">
            Must watch series.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 py-4">
          {tvSeriesData.map((d) => (
            <RecommendCard
              key={d.title}
              title={d.title}
              description={d.description}
              tags={d.tags}
              href={d.href}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecommendsPage;
