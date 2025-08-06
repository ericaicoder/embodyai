"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { releaseNotes } from "@/kidou/release";

const ReleasesPage = () => {
  const t = useTranslations('Breadcrumb');
  
  // Get all available versions from the release notes
  const versions = Object.keys(releaseNotes).sort((a, b) => {
    // Sort versions in descending order (newest first)
    const aParts = a.split('.').map(Number);
    const bParts = b.split('.').map(Number);
    
    for (let i = 0; i < Math.max(aParts.length, bParts.length); i++) {
      const aPart = aParts[i] || 0;
      const bPart = bParts[i] || 0;
      
      if (aPart !== bPart) {
        return bPart - aPart;
      }
    }
    return 0;
  });

  return (
    <>
      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h1 className="mb-4 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                Kidou Releases
              </h1>
              <p className="text-lg leading-relaxed text-body-color dark:text-body-color-dark">
                Explore the evolution of Kidou with detailed release notes for each version.
              </p>
            </div>

            <div className="space-y-6">
              {versions.map((version) => (
                <div
                  key={version}
                  className="rounded-lg bg-white p-6 shadow-three dark:bg-gray-dark"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="mb-2 text-xl font-bold text-black dark:text-white">
                        Version {version}
                      </h2>
                      <p className="text-sm text-body-color dark:text-body-color-dark">
                        {releaseNotes[version as keyof typeof releaseNotes].split('\n')[1]?.replace('- ', '') || 'Release notes available'}
                      </p>
                    </div>
                    <Link
                      href={`/kidou/releases/${version}`}
                      className="rounded-sm bg-primary px-6 py-3 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReleasesPage; 