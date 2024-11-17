import { SiteData } from '@/data/SiteData';
import { Metadata } from 'next';

import Link from 'next/link';
import { Links } from './_types/Links';

import { RoughNotation } from 'react-rough-notation';

export const metadata: Metadata = {
  title: `Portfolio - ${SiteData.full_N}`,
  description: SiteData.description,
};

export default function Home() {
  return (
    <div className="mt-12 mb-12 flex flex-col items-center gap-x-12 xl:flex-row">
      <div className="pt-6">
        <h1 className="pb-6 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Hi, I am{' '}
          <span className="text-primary-color-500 dark:text-primary-color-dark-500">
            {SiteData.first_N}
          </span>
        </h1>
        <h2 className="prose pt-5 text-lg text-gray-600 dark:text-gray-300">
          Welcome to {SiteData.description}. I am a {SiteData.job} who is
          passionate about Websites and Animation. In my free time, I like
          developing side projects and learning new technologies.
        </h2>
        <div className="pt-5 text-lg leading-7 text-slate-600 dark:text-slate-300 sm:block md:hidden lg:hidden">
          This is my place for{' '}
          <RoughNotation
            animate={true}
            type="box"
            show={true}
            color="#DE1D8D"
            animationDelay={1000}
            animationDuration={2500}
          >
            thoughts, reflections & everything&nbsp;
          </RoughNotation>
          in between. Have a good explore!
        </div>
        <div className="hidden pt-10 text-lg leading-7 text-slate-600 dark:text-slate-300 md:block">
          This is my place for{' '}
          <RoughNotation
            animate={true}
            type="highlight"
            show={true}
            color="#DE1D8D"
            animationDelay={1000}
            animationDuration={2500}
          >
            thoughts, reflections & everything&nbsp;
          </RoughNotation>
          in between. Have a good explore!{' '}
          <div className="mt-8 text-slate-600 dark:text-slate-400">
            <span className="text-sm">Press</span>{' '}
            <span className="rounded-md bg-gray-300 p-1 text-sm text-gray-900 dark:bg-gray-400">
              ⌘
            </span>{' '}
            <span className="text-sm">+ </span>
            <span className="rounded-md bg-gray-300 p-1 text-sm text-gray-900 dark:bg-gray-400">
              K
            </span>{' '}
            <span className="text-sm">to start</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="grid grid-cols-1 grid-rows-3 gap-8 py-12">
          <div className="my-2 grid items-start gap-8">
            <div className="group relative">
              <div className="animate-tilt absolute -inset-0.5 rounded-lg bg-gradient-to-r from-pink-600 to-purple-600 opacity-50 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200" />
              <Link href={Links.ProjectsPage()}>
                <span className="relative flex items-center divide-x divide-gray-600 rounded-lg bg-white px-7 py-4 leading-none dark:bg-black">
                  <span className="flex items-center space-x-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 -rotate-6 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                      />
                    </svg>
                    <span className="pr-6 text-gray-900 dark:text-gray-100">
                      What I built
                    </span>
                  </span>
                  <span className="pl-6 text-amber-400 transition duration-200 group-hover:text-gray-900 dark:group-hover:text-gray-100">
                    Projects&nbsp;&rarr;
                  </span>
                </span>
              </Link>
            </div>
          </div>
          <div className="my-2 grid items-start gap-8">
            <div className="group relative">
              <div className="animate-tilt absolute -inset-0.5 rounded-lg bg-gradient-to-r from-fuchsia-600 to-emerald-600 opacity-50 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200" />
              <Link href={Links.RandomJokePage()}>
                <span className="relative flex items-center divide-x divide-gray-600 rounded-lg bg-white px-7 py-4 leading-none dark:bg-black">
                  <span className="flex items-center space-x-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 -rotate-6 text-pink-600"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 1a7 7 0 100 14A7 7 0 008 1zM5.531 4.719C6.266 4.719 7 5.165 7 6.03c-1.5-.338-3.125 1.733-3 0 .063-.866.797-1.312 1.531-1.312zm4.938 0c.734 0 1.469.446 1.531 1.312.125 1.733-1.5-.338-3 0 0-.866.734-1.312 1.469-1.312zM3 9.03c2 1.304 7.987 1.304 10.031 0l-.03.531c-.037.43-1 3.376-5 3.407-4 .031-5-2.78-5-3.313V9.03z" />
                    </svg>

                    <span className="pr-6 text-gray-900 dark:text-gray-100">
                      Laugh
                    </span>
                  </span>
                  <span className="pl-6 text-indigo-400 transition duration-200 group-hover:text-gray-900 dark:group-hover:text-gray-100">
                    Dad Joke&nbsp;&rarr;
                  </span>
                </span>
              </Link>
            </div>
          </div>
          <div className="my-2 grid items-start gap-8">
            <div className="group relative">
              <div className="animate-tilt absolute -inset-0.5 rounded-lg bg-gradient-to-r  from-pink-600 to-purple-600 opacity-50 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200" />
              <Link
                href={SiteData.cv}
                target="_blank"
              >
                <span className="relative flex items-center divide-x divide-gray-600 rounded-lg bg-white px-7 py-4 leading-none dark:bg-black">
                  <span className="flex items-center space-x-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 -rotate-6 text-fuchsia-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                      />
                    </svg>
                    <span className="pr-6 text-gray-900 dark:text-gray-100">
                      Hire me!&nbsp;&nbsp;&nbsp;
                    </span>
                  </span>
                  <span className="pl-6 text-primary-400 transition duration-200 group-hover:text-gray-900 dark:group-hover:text-gray-100">
                    Resume&nbsp;&rarr;
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
