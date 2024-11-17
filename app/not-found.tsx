import { SiteData } from '@/data/SiteData';
import { Metadata } from 'next';
import Link from 'next/link';
import { Links } from './_types/Links';

export const metadata: Metadata = {
  title: `Page Not Found - ${SiteData.full_N}`,
  description: 'Page Not Found',
};

export default function NotFound() {
  return (
    <>
      <div className="flex flex-col items-start justify-start md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6">
        <div className="space-x-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-6xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 md:px-3 md:text-8xl md:leading-14">
            404
          </h1>
        </div>
        <div className="mx-auto max-w-2xl">
          <div className="md:border-l-2 md:px-6">
            <p className="mb-4 text-xl font-bold leading-normal md:text-2xl">
              Unavailable For Legal Reasons
            </p>
            <p className="mb-4">
              Why show a generic 404 when I can make it sound mysterious? It
              seems you&apos;ve found something that used to exist, or you
              spelled something wrong. I&apos;m guessing you spelled something
              wrong. Can you double check that URL?
            </p>
            <p>
              But dont worry, you can find plenty of other things on our
              homepage.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-16 grid place-items-center">
        <Link href={Links.HomePage()}>
          <button
            aria-label="Scroll To Top"
            type="button"
            className="pushable"
          >
            <span className="shadow"></span>
            <span className="edgeblue"></span>
            <span className="frontblue">Return to Homepage</span>
          </button>
        </Link>
      </div>
    </>
  );
}
