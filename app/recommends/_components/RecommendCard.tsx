import Link from 'next/link';

/**
 * Props for the RecommendCard component.
 */
type RecommendCardProps = {
  title: string;
  description: string;
  href?: string;
  tags: string[];
};

/**
 * Renders a recommendation card with title, description, and tags.
 * @param {RecommendCardProps} props - The recommendation details to display.
 * @returns {JSX.Element} The rendered recommendation card.
 */
export const RecommendCard: React.FC<RecommendCardProps> = (props): JSX.Element => {
  const { title, description, href, tags } = props;

  if (href && href.length > 0) {
    return (
      <Link
        href={href}
        aria-label={`Link to ${title}`}
        className="bg-day·dark:bg-night·group group relative flex transform cursor-pointer flex-wrap border border-gray-200 bg-opacity-50 p-px py-px transition duration-200 hover:scale-105 dark:border-gray-700 dark:bg-opacity-50"
      >
        <div className="absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 transform bg-primary-500 duration-200 group-hover:scale-x-100" />
        <div className="absolute bottom-0 left-0 h-full w-0.5 origin-bottom scale-y-0 transform bg-primary-500 duration-200 group-hover:scale-y-100" />
        <div className="absolute top-0 left-0 h-0.5 w-full origin-right scale-x-0 transform bg-primary-500 duration-200 group-hover:scale-x-100" />
        <div className="absolute bottom-0 right-0 h-full w-0.5 origin-top scale-y-0 transform bg-primary-500 duration-200 group-hover:scale-y-100" />
        <div className="bg-day dark:bg-night relative space-y-2 rounded-2xl p-4">
          <article>
            <div>
              <h2 className="text-2xl font-bold leading-8 tracking-tight ">
                <div className="text-gray-900 transition  duration-500 ease-in-out hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-500">
                  {title}

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="ml-0.5 inline-block h-5 w-5 fill-current"
                  >
                    <g data-name="Layer 2">
                      <g data-name="external-link">
                        <rect
                          width="24"
                          height="24"
                          opacity="0"
                        />
                        <path d="M20 11a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1z" />
                        <path d="M16 5h1.58l-6.29 6.28a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L19 6.42V8a1 1 0 0 0 1 1 1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-4a1 1 0 0 0 0 2z" />
                      </g>
                    </g>
                  </svg>
                </div>
              </h2>
              <div className="prose prose-base max-w-none text-gray-500 dark:text-gray-400 sm:prose-lg">
                {description}
              </div>

              {tags && (
                <div className="max-w-none text-sm capitalize text-gray-500 dark:text-gray-400">
                  {tags.join(' • ')}
                </div>
              )}
            </div>
          </article>
        </div>
      </Link>
    );
  }

  return (
    <div className="h-full overflow-hidden  border-2 border-solid border-gray-200 hover:border-primary-500 dark:border-gray-800 dark:hover:border-primary-500">
      <div className="p-6">
        <h4 className="mb-3 text-2xl font-bold leading-8 tracking-tight text-black dark:text-white">
          {title}
        </h4>
        <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">
          (Coming soon) {description}
        </p>
        {tags && (
          <div className="mt-4 text-xs text-gray-700 dark:text-gray-300">
            {tags.join(' | ')}
          </div>
        )}
      </div>
    </div>
  );
};
