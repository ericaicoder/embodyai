import { releaseNotes } from "@/kidou/release";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Link from "next/link";
import { useLocale } from "next-intl";

interface PageProps {
  params: Promise<{ version: string; locale: string }>;
}

const ReleaseVersionPage = async ({ params }: PageProps) => {
  const { version, locale } = await params;
  
  // Check if the version exists in our release notes
  const versionKey = version as keyof typeof releaseNotes;
  if (!releaseNotes[versionKey]) {
    notFound();
  }

  const releaseNote = releaseNotes[versionKey];
  
  // Parse the release notes (assuming markdown-like format)
  const lines = releaseNote.trim().split('\n').filter(line => line.trim());

  return (
    <>
      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            {/* Back to releases link */}
            <div className="mb-8">
              <Link
                href={`/${locale}/kidou/releases`}
                className="inline-flex items-center text-primary hover:underline"
              >
                <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
                Back to all releases
              </Link>
            </div>

            {/* Version header */}
            <div className="mb-12 text-center">
              <h1 className="mb-4 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                Kidou v{version}
              </h1>
              <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
                Release Version
              </div>
            </div>

            {/* Release notes content */}
            <div className="rounded-lg bg-white p-8 shadow-three dark:bg-gray-dark">
              <h2 className="mb-6 text-2xl font-bold text-black dark:text-white">
                What's New
              </h2>
              
              <div className="prose prose-lg max-w-none dark:prose-invert">
                <ul className="space-y-3">
                  {lines.map((line, index) => {
                    if (line.startsWith('- ')) {
                      return (
                        <li key={index} className="flex items-start">
                          <svg className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-body-color dark:text-body-color-dark">
                            {line.substring(2)}
                          </span>
                        </li>
                      );
                    }
                    return (
                      <li key={index} className="flex items-start">
                        <svg className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-body-color dark:text-body-color-dark">
                          {line}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            {/* Download section */}
            <div className="mt-12 text-center">
              <h3 className="mb-6 text-xl font-bold text-black dark:text-white">
                Download Kidou v{version}
              </h3>
              <Link
                href={`/${locale}/kidou`}
                className="inline-flex items-center rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
              >
                <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReleaseVersionPage; 