import { SiteData } from '@/data/SiteData';
import { Metadata } from 'next';
import React from 'react';
import { ContactLink } from './_components/ContactLink';

export const metadata: Metadata = {
  title: `Contact - ${SiteData.full_N}`,
  description: 'All my contacts',
};

const ContactPage = () => {
  return (
    <div className="mx-auto max-w-3xl overflow-hidden">
      <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
        Contact
      </h1>
      <div className="pt-10 pb-8">
        <ul className="font-semi-bold flex flex-col space-y-4">
          <ContactLink
            href={`mailto:${SiteData.gmail}`}
            title="gmail"
            preTitle={SiteData.gmail.split('@')[0]}
          />
          <ContactLink
            href={SiteData.github}
            title="github"
            preTitle={SiteData.username}
          />

          <ContactLink
            href={SiteData.linkedin}
            title="linkedin"
            preTitle={SiteData.username}
          />
        </ul>
      </div>
    </div>
  );
};

export default ContactPage;
