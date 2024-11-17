import Link from 'next/link';
import {
  AiOutlineGithub,
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiOutlineGlobal,
} from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { FiExternalLink, FiMail } from 'react-icons/fi';

const components = {
  mail: FiMail,
  github: AiOutlineGithub,
  facebook: AiOutlineFacebook,
  linkedin: FaLinkedinIn,
  twitter: AiOutlineTwitter,
  website: AiOutlineGlobal,
  external: FiExternalLink,
};

type SocialIconsProps = {
  kind:
    | 'mail'
    | 'github'
    | 'facebook'
    | 'linkedin'
    | 'twitter'
    | 'website'
    | 'external';
  href: string;
  size?: number;
};

/**
 * A component that renders a social icon with a link to the corresponding
 * social media profile.
 *
 * @param {{ kind: "mail" | "github" | "facebook" | "linkedin" | "twitter" | "website" | "external"; href: string; size?: number }}
 * @returns {JSX.Element | null}
 */
export const SocialIcons: React.FC<SocialIconsProps> = (
  props
): JSX.Element | null => {
  const { kind, href, size = 8 } = props;

  if (
    !href ||
    (kind === 'mail' &&
      !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href))
  )
    return null;

  const SocialSvg = components[kind];

  return (
    <Link
      className="text-sm text-gray-500 transition duration-200 hover:rotate-180 hover:text-gray-600"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <span className="sr-only">{kind}</span>
      <SocialSvg
        className={`text-gray-700 hover:text-primary-color-500 dark:text-gray-200 dark:hover:text-primary-color-dark-500 h-${size} w-${size}`}
      />
    </Link>
  );
};
