import { SiteData } from '@/data/SiteData';
import { Metadata } from 'next';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiFillLinkedin } from 'react-icons/ai';
import { RoughNotation } from 'react-rough-notation';
import avatar from '@/public/avatar.jpeg';

export const metadata: Metadata = {
  title: `About - ${SiteData.full_N}`,
  description: 'A brief introduction about me as a frontend web developer',
};

const AboutPage = () => {
  return (
    <div className="">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5 md:pl-16">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          About Me
        </h1>
      </div>
      <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
        <div className="flex flex-col items-center space-x-2 pt-8 xl:sticky xl:top-0">
          <Image
            src={avatar}
            alt="avatar"
            width={192}
            height={192}
            className="h-48 w-48 rounded-full xl:rounded-full"
            style={{ objectFit: 'cover' }}
            placeholder="blur"
            blurDataURL="/SVG-placeholder.png"
          />
          <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
            {SiteData.full_N}
          </h3>
          <div className="text-gray-500 dark:text-gray-400">{SiteData.job}</div>
          <div className="text-gray-500 dark:text-gray-400">
            {SiteData.company}
          </div>
          <div className="flex flex-col pt-3">
            <Link
              href={SiteData.linkedin}
              className="rounded-full border px-8 py-2 text-center text-sm font-normal text-gray-700 transition-colors hover:border-blue-600 hover:bg-blue-600 hover:text-white hover:shadow dark:text-white"
              target="_blank"
              rel="noreferrer noopener"
            >
              <AiFillLinkedin className="mr-2 mb-0.5 inline h-5 w-5" />
              Connect with me
            </Link>
          </div>
        </div>

        <div className="prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2">
          <p>
            Hello! I&apos;m an aspiring{' '}
            <RoughNotation
              type="highlight"
              color="#0ea5e9"
              strokeWidth={2}
              show={true}
              animationDelay={300}
              animationDuration={2000}
            >
              <span className="font-semibold">frontend web developer </span>
            </RoughNotation>{' '}
            passionate about crafting beautiful, responsive, and user-friendly
            websites.
          </p>
          <p>
            <RoughNotation
              type="bracket"
              brackets={['left', 'right']}
              show={true}
              color="#FF0000"
              animationDelay={300}
              animationDuration={3000}
            >
              I am deeply interested in modern web technologies and frameworks
              like React, Next.js, and TailwindCSS. I enjoy building clean,
              efficient, and accessible interfaces that enhance user experience.
            </RoughNotation>{' '}
          </p>
          <p>
            Currently, I&apos;m honing my skills in{' '}
            <RoughNotation
              type="underline"
              show={true}
              color="#f59e0b"
              animationDelay={500}
              animationDuration={2500}
              multiline={true}
            >
              React, TypeScript, and responsive design
            </RoughNotation>
            . My goal is to continuously learn and grow as a developer while
            contributing to open-source projects.
          </p>
          <p>
            I am particularly interested in how CSS can be used creatively to
            bring a site to life. From subtle animations to dynamic layouts, I
            believe the frontend is where design meets functionality.
          </p>
          <br />
          <h2>My Current Focus</h2>
          <ul className="list-disc pl-6">
            <li>
              Building projects with <strong>Next.js</strong> and{' '}
              <strong>TailwindCSS</strong> to enhance my understanding of modern
              frontend workflows.
            </li>
            <li>
              Exploring <strong>TypeScript</strong> to write safer and more
              maintainable code.
            </li>
            <li>
              Delving into <strong>Web Accessibility</strong> to create
              inclusive experiences for all users.
            </li>
          </ul>
          <br />
          <h2>Reach Out</h2>
          <p>
            I&apos;m always open to collaborating on interesting projects or
            discussing new ideas. Feel free to reach out via{' '}
            <Link
              href={`mailto:${SiteData.gmail}`}
              className="underline hover:text-blue-600 dark:text-blue-400"
            >
              Email
            </Link>{' '}
            or{' '}
            <Link
              href={SiteData.whatsapp}
              className="underline hover:text-blue-600 dark:text-blue-400"
              target="_blank"
              rel="noreferrer noopener"
            >
              WhatsApp
            </Link>
            .
          </p>
        </div>
      </div>

      {/* <div className="mt-10 md:pl-16">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Experience
          </h1>
        </div>
        <div className="max-w-none pt-8 pb-8 xl:col-span-2">
          {experienceData.map((d) => (
              <Experience
                key={d.company}
                title={d.title}
                company={d.company}
                location={d.location}
                range={d.range}
                url={d.url}
                text1={d.text1}
                text2={d.text2}
                text3={d.text3}
              />
            ))}
        </div>
      </div> */}
    </div>
  );
};

export default AboutPage;
