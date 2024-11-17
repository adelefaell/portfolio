'use client';

import {
  Dialog,
  Combobox,
  Transition,
  ComboboxInput,
  ComboboxOptions,
  ComboboxOption,
  DialogPanel,
  DialogBackdrop,
} from '@headlessui/react';
import { useState, useEffect, Fragment } from 'react';
import { HiSearch } from 'react-icons/hi';
import { useRouter } from 'next/navigation';
import { FiCommand } from 'react-icons/fi';
import { motion } from 'framer-motion';
import useSound from 'use-sound';
import { navigation } from '@/app/_types/navigation';
import { usePathname } from 'next/navigation';

export default function CommandPalette() {
  const pathname = usePathname();
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [ThemeSound] = useSound('/sounds/open.mp3');

  // Toggle Command Palette with Ctrl+K or Cmd+K
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'k' && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        setIsOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleIcon = () => {
    setIsOpen((prev) => !prev);
    ThemeSound();
  };

  const filteredNavigation = query
    ? navigation.filter((page) =>
        page.title.toLowerCase().includes(query.toLowerCase())
      )
    : navigation;

  return (
    <>
      {/* Command Palette Button */}
      <motion.button
        className="ml-2 mr-1 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-zinc-300 p-1 ring-zinc-400 transition-all duration-200 ease-in-out hover:bg-zinc-300 hover:ring-1 dark:bg-zinc-700 dark:ring-white dark:hover:bg-zinc-800"
        type="button"
        aria-label="Command palette"
        animate={{
          rotate: isOpen ? 360 : 0,
        }}
        transition={{ duration: 0.1, ease: 'easeIn' }}
        onClick={toggleIcon}
      >
        <FiCommand />
      </motion.button>

      {/* Command Palette Dialog */}
      <Transition
        appear
        show={isOpen}
        as={Fragment}
        afterLeave={() => setQuery('')}
      >
        <Dialog
          open={true}
          as="div"
          className="relative z-10 focus:outline-none "
          onClose={() => setIsOpen(false)}
        >
          <DialogBackdrop className="fixed inset-0  bg-zinc-500/75" />
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <DialogPanel
                transition
                className="w-full max-w-md rounded-xl bg-zinc-200 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
              >
                <Combobox
                  value=""
                  onChange={(href) => {
                    if (href) {
                      setIsOpen(false);
                      router.push(href);
                    }
                  }}
                >
                  <div className="relative">
                    <div className="flex items-center px-4 py-3">
                      <HiSearch className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                      <ComboboxInput
                        onChange={(event) => setQuery(event.target.value)}
                        className="w-full border-0 bg-transparent px-4 py-2 text-gray-900 placeholder-gray-500 focus:outline-none dark:text-neutral-200"
                        placeholder="Search..."
                        autoComplete="off"
                        autoFocus
                      />
                    </div>
                    {filteredNavigation.length > 0 ? (
                      <ComboboxOptions
                        static
                        className="max-h-60 overflow-y-auto py-2"
                      >
                        {filteredNavigation.map((page) => (
                          <ComboboxOption
                            key={page.title}
                            value={page.href}
                            className={`cursor-pointer select-none px-6 py-2 hover:bg-zinc-300 hover:dark:bg-zinc-600 hover:text-gray-900 hover:dark:text-gray-100 ${
                              pathname === page.href
                                ? 'bg-zinc-300 dark:bg-zinc-600 text-gray-900 dark:text-gray-100'
                                : 'bg-zinc-200 dark:bg-zinc-800 text-gray-700 dark:text-gray-300'
                            }`}
                          >
                            <div className="flex justify-between">
                              <span>{page.title}</span>
                              {/* <span className="text-sm text-gray-500 dark:text-gray-400">
                                {page.title === 'Home' ? 'H' : page.title[0]}
                              </span> */}
                            </div>
                          </ComboboxOption>
                        ))}
                      </ComboboxOptions>
                    ) : (
                      <p className="px-6 py-4 text-sm text-gray-500">
                        No results found
                      </p>
                    )}
                  </div>
                </Combobox>
              </DialogPanel>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
