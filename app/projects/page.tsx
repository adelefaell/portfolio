import { projectsData } from '@/data/projectsData';
import { SiteData } from '@/data/SiteData';
import { Metadata } from 'next';
import { Card } from './_components/Card';

export const metadata: Metadata = {
  title: `Projects - ${SiteData.full_N}`,
  description: 'A list of projects I have built',
};

export default function Projects() {
  return (
    <>
      <div className="mx-auto max-w-6xl divide-y divide-gray-400">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Projects
          </h1>
          <p className="text-md leading-7 text-gray-500 dark:text-gray-400">
            A list of projects I have been working on or built
          </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {projectsData.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.desc}
                href={d.site}
                github={d.gitlink}
                tech={d.tech}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
