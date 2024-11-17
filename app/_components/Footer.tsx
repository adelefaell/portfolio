'use client';
import { SiteData } from '@/data/SiteData';
// import NowPlayingFooter from './NowPlayingFooter'
import Link from 'next/link';
import { Links } from '../_types/Links';

export default function Footer() {
  const date = new Date();
  return (
    <footer>
      <div className="mt-10 flex flex-col items-center">
        {/* <div className="">
          <NowPlayingFooter />
        </div> */}
        <div className="mb-2 hidden text-sm text-gray-500 dark:text-gray-400 md:flex">
          <div className="mx-1">
            <Link
              href={SiteData.github}
              target="_blank"
              className="link-underline"
            >
              {SiteData.full_N}
              {` © ${new Date().getFullYear()}`}
            </Link>
          </div>
          {`•`}
          <div className="mx-1">
            <Link
              href="#"
              className="link-underline"
            >
              Have a good {date.toLocaleString('default', { weekday: 'long' })}!
            </Link>
          </div>
          {`•`}
          <div className="mx-1">
            <Link
              href={Links.ContactPage()}
              className="link-underline"
            >
              Contact
            </Link>
          </div>
        </div>
        <div className="mb-2 text-sm text-gray-500 dark:text-gray-400 sm:block md:hidden lg:hidden">
          <div className="mx-1">
            <Link
              href={SiteData.github}
              className="link-underline"
              target="_blank"
            >
              {SiteData.first_N}
              {` © ${new Date().getFullYear()}`}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
