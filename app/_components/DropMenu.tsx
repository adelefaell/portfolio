'use client';

import { Fragment, useState } from 'react';
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from '@headlessui/react';
import { motion } from 'framer-motion';
import classNames from 'classnames';

import {
  HomeIcon,
  DiscIcon,
  HamburgerMenuIcon,
  LaptopIcon,
  Link2Icon,
  QuoteIcon,
  PersonIcon,
  QuestionMarkIcon,
  DrawingPinIcon,
  ExclamationTriangleIcon,
} from '@radix-ui/react-icons';
import useSound from 'use-sound';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navigation } from '@/app/_types/navigation';
import { Links } from '../_types/Links';

export default function DropMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIcon = () => {
    setIsOpen(!isOpen);
  };

  const [ThemeSound] = useSound('/sounds/page-change.mp3');

  const pathname = usePathname();

  const getCorrectIcon = (href: string) => {
    switch (href) {
      case Links.HomePage():
        return <HomeIcon className="mr-4 mt-0.5" />;
      case Links.ProjectsPage():
        return <DiscIcon className="mr-4 mt-0.5" />;
      case Links.AboutPage():
        return <PersonIcon className="mr-4 mt-0.5" />;
      case Links.ContactPage():
        return <Link2Icon className="mr-4 mt-0.5" />;
      case Links.SkillsPage():
        return <LaptopIcon className="mr-4 mt-0.5" />;
      case Links.QuotesPage():
        return <QuoteIcon className="mr-4 mt-0.5" />;
      case Links.RandomJokePage():
        return <QuestionMarkIcon className="mr-4 mt-0.5" />;
      case Links.RecommendsPage():
        return <DrawingPinIcon className="mr-4 mt-0.5" />;
      default:
        return <ExclamationTriangleIcon className="mr-4 mt-0.5" />;
    }
  };

  const SplitPoint = 3;

  return (
    <Menu
      as="div"
      className="relative z-10 inline-block text-left "
    >
      <div>
        <MenuButton className="ml-2 cursor-pointer rounded-full bg-zinc-300 ring-zinc-400 transition-all hover:bg-violet-400 hover:ring-1 dark:bg-zinc-700 dark:ring-violet-700 dark:hover:bg-violet-600">
          <motion.div
            className="flex h-8 w-8 items-center justify-center p-2"
            whileTap={{
              scale: 0.5,
            }}
            transition={{ duration: 0.1, ease: 'easeIn' }}
            aria-label="Toggle List Menu"
          >
            {isOpen ? (
              <HamburgerMenuIcon className="h-4 w-4" />
            ) : (
              <HamburgerMenuIcon className="h-4 w-4" />
            )}
          </motion.div>
        </MenuButton>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
        afterEnter={() => {
          toggleIcon();
          ThemeSound();
        }}
        afterLeave={() => {
          toggleIcon();
          ThemeSound();
        }}
      >
        <MenuItems className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-zinc-300 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:divide-zinc-700 dark:bg-zinc-800 ">
          <div className="py-1">
            {navigation.slice(0, SplitPoint).map((item) => (
              <MenuItem key={item.href}>
                <Link
                  href={item.href}
                  className={classNames(
                    pathname === item.href
                      ? 'bg-gray-200 text-gray-700 dark:bg-zinc-700 dark:text-gray-300'
                      : 'bg-white text-zinc-700 hover:bg-gray-300 dark:bg-zinc-800 dark:text-gray-200 dark:hover:bg-zinc-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  <div className="flex flex-row">
                    {getCorrectIcon(item.href)} {item.title}
                  </div>
                </Link>
              </MenuItem>
            ))}
          </div>
          <div className="py-1">
            {navigation.slice(SplitPoint, navigation.length).map((item) => (
              <MenuItem key={item.href}>
                <Link
                  href={item.href}
                  className={classNames(
                    pathname === item.href
                      ? 'bg-gray-200 text-gray-700 dark:bg-zinc-700 dark:text-gray-300'
                      : 'bg-white text-zinc-700 hover:bg-gray-300 dark:bg-zinc-800 dark:text-gray-200 dark:hover:bg-zinc-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  <div className="flex flex-row">
                    {getCorrectIcon(item.href)} {item.title}
                  </div>
                </Link>
              </MenuItem>
            ))}
          </div>
        </MenuItems>
      </Transition>
    </Menu>
  );
}
