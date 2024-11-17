import { SocialIcons } from '@/app/_components/SocialIcons';
import { FolderSvg } from './FolderSvg';

interface CardProps {
  title: string;
  description: string;
  href?: string;
  github?: string;
  tech: string[];
}

export const Card: React.FC<CardProps> = ({
  title,
  description,
  href,
  github,
  tech,
}) => (
  <div
    className="md p-4 md:w-1/2"
    style={{ maxWidth: '544px' }}
  >
    <div className="h-full transform overflow-hidden rounded-md border-2 border-solid border-gray-200 bg-transparent bg-opacity-20 transition duration-500 hover:scale-105 hover:rounded-md hover:border-primary-500 hover:bg-gray-300 dark:border-gray-700 dark:hover:border-primary-500 dark:hover:bg-gray-800">
      <div className="p-6">
        <div className="flex flex-row items-center justify-between">
          <div className="my-2">
            <FolderSvg />
          </div>
          <div className="flex flex-row justify-between">
            <div className="mx-1.5">
              {href ? (
                <SocialIcons
                  kind="external"
                  href={href}
                  size={6}
                />
              ) : null}
            </div>
            <div className="mx-1.5">
              {github ? (
                <SocialIcons
                  kind="github"
                  href={github}
                  size={6}
                />
              ) : null}
            </div>
          </div>
        </div>
        <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
          {title}
        </h2>

        <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">
          {description}
        </p>
        <div className="flex flex-row justify-between">
          <div className="text-sm text-gray-400">
            {tech.map((t) => (
              <span key={t}>{t} &#8226; </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);
