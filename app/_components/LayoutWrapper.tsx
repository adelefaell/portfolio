'use client';

import { SectionContainer } from './SectionContainer';
import Footer from './Footer';
import { navigation } from '@/app/_types/navigation';
import CommandPalette from './CommandPalette';
import ThemeSwitch from './ThemeSwitch';
import Typewriter from 'typewriter-effect';

import Link from 'next/link';
import DropMenu from './DropMenu';
import { usePathname } from 'next/navigation';
import { Links } from '../_types/Links';
import { AppProgressBar } from 'next-nprogress-bar';

// import Logo from '@/data/logo.svg'

export const LayoutWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const pathname = usePathname();
  return (
    <SectionContainer>
      <AppProgressBar
        height="4px"
        color={'bg-brand-color dark:bg-primary-color-dark'}
        options={{ showSpinner: false }}
        shallowRouting
      />

      <div className="flex h-screen flex-col justify-between">
        <header className="flex items-center justify-between py-10">
          <div>
            <Link href={Links.HomePage()}>
              {/* <div className="flex items-center justify-between">
                <div className="mr-1">
                  <Logo />
                </div>
                {typeof SiteData.headerTitle === 'string' ? (
                  <div className="hidden h-6 text-2xl font-semibold sm:block">
                    {SiteData.headerTitle}
                  </div>
                ) : (
                  SiteData.headerTitle
                )}
              </div> */}
              <div className="text-primary-color dark:text-primary-color-dark flex items-center justify-between text-xl font-semibold">
                {`~${pathname}`}
                {''}
                <Typewriter
                  options={{
                    strings: [],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
            </Link>
          </div>
          <div className="flex items-center text-base leading-5">
            <div className="hidden sm:block">
              {navigation
                .filter((n) => n.showOnHeader)
                .map((link) => (
                  <Link
                    key={link.title}
                    href={link.href}
                    className="link-underline rounded py-1 px-2 text-gray-900 hover:bg-gray-200 dark:text-gray-100 dark:hover:bg-gray-700 sm:py-2 sm:px-3"
                  >
                    {link.title}
                  </Link>
                ))}
            </div>
            <CommandPalette />
            <ThemeSwitch />
            <DropMenu />
          </div>
        </header>
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  );
};
