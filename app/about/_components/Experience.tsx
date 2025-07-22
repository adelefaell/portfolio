import Link from 'next/link';

/**
 * Props for the Experience component.
 */
type ExperienceProps = {
  title: string;
  company: string;
  location: string;
  range: string;
  url: string;
  text1: string;
  text2: string;
  text3: string;
};

/**
 * Renders a single experience entry with title, company, location, and details.
 * @param {ExperienceProps} props - The experience details to display.
 * @returns {JSX.Element} The rendered experience component.
 */
export const Experience: React.FC<ExperienceProps> = (props): JSX.Element => {
  const { title, company, location, range, url, text1, text2, text3 } = props;
  return (
    <div className="my-3">
      <div className="flex flex-row text-xl">
        <span className="text-gray-500 dark:text-gray-400">{title}</span>{' '}
        <span className="text-gray-500 dark:text-gray-400">&nbsp;@&nbsp;</span>{' '}
        <span className="text-primary-color-500">
          <Link
            href={url}
            className="company"
          >
            {company}
          </Link>
        </span>
      </div>
      <div>
        <div className="p-1 font-mono text-sm text-gray-400 dark:text-gray-600">
          {range}
        </div>
        <div className="p-2">
          <div className="flex flex-row ">
            <div className="mr-2 text-lg text-primary-color-500"> &#8227;</div>
            <div className="text-gray-500 dark:text-gray-400">{text1}</div>
          </div>
          <div className="flex flex-row">
            <div className="mr-2 text-lg text-primary-color-500"> &#8227;</div>
            <div className="text-gray-500 dark:text-gray-400">{text2}</div>
          </div>
          <div className="items-top flex flex-row">
            <div className="mr-2 text-lg text-primary-color-500"> &#8227;</div>
            <div className="text-gray-500 dark:text-gray-400">{text3}</div>
          </div>
        </div>
      </div>
      <div className="justify-center text-center text-2xl font-medium text-gray-200  dark:text-gray-600">
        &#126;&#126;&#126;
      </div>
      <div className="justify-center text-center text-2xl font-medium text-gray-200  dark:text-gray-600">
        {location}
      </div>
    </div>
  );
};
