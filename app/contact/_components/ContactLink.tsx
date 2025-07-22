import Link from "next/link";

/**
 * Props for the ContactLink component.
 */
interface ContactLinkProps {
  title: string;
  href: string;
  preTitle?: string;
}

/**
 * Renders a contact link with optional pre-title and styling.
 * @param {ContactLinkProps} props - The contact link details to display.
 * @returns {JSX.Element} The rendered contact link.
 */
export const ContactLink: React.FC<ContactLinkProps> = ({ title, href, preTitle }): JSX.Element => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <li className="duration-250 mr-2 inline cursor-pointer text-4xl transition-colors ease-in hover:text-gray-400 sm:text-6xl md:text-5xl lg:text-6xl">
        <span className="duration-250 transition-colors ease-in hover:text-primary-500 dark:hover:text-primary-400">
          {preTitle}
        </span>
        <span className="font-light opacity-50">@</span>
        <span className="duration-250 font-mono  transition-colors ease-in hover:text-gray-500 ">
          {title}
        </span>
      </li>
    </Link>
  );
};
