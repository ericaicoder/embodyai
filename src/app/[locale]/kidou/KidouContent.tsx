"use client";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { useTranslations, useLocale } from "next-intl";
import { useState, useEffect } from "react";

interface KidouVersion {
  success: boolean;
  version: string;
  releaseDate: string;
  releaseUrl: string;
  downloadUrl: {
    mac: {
      arm64: string;
      intel: string;
    };
  };
  timestamp: string;
  note?: string;
}

const KidouContent = () => {
  const t = useTranslations('Kidou');
  const [versionInfo, setVersionInfo] = useState<KidouVersion | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showDownloadMenu, setShowDownloadMenu] = useState(false);
  const [downloading, setDownloading] = useState(false);

  useEffect(() => {
    const fetchVersionData = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/kidou/version');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const version = await response.json();
        setVersionInfo(version);
      } catch (err) {
        console.error('Error fetching Kidou version:', err);
        setError('Failed to load version information');
      } finally {
        setLoading(false);
      }
    };

    fetchVersionData();
  }, []);

  // Handle clicking outside the download menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (showDownloadMenu && !target.closest('.download-menu-container')) {
        setShowDownloadMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showDownloadMenu]);

  const handleDownload = async (downloadType: 'appleSilicon' | 'intel') => {
    setDownloading(true);
    try {
      if (!versionInfo) {
        throw new Error('Version info not available');
      }
      
      const url = downloadType === 'appleSilicon' 
        ? versionInfo.downloadUrl.mac.arm64 
        : versionInfo.downloadUrl.mac.intel;
      
      window.open(url, '_blank');
    } catch (err) {
      console.error('Error fetching download URL:', err);
      setError('Failed to load download link');
    } finally {
      setDownloading(false);
      setShowDownloadMenu(false);
    }
  };

  const toggleDownloadMenu = () => {
    setShowDownloadMenu(!showDownloadMenu);
  };

  return (
    <>
      <Breadcrumb
        pageName="Kidou"
        description={t('description')}
      />

      {/* Hero Section */}
      <section className="pt-16 md:pt-20 lg:pt-28">
        <div className="container">
          <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
            <div className="mx-auto max-w-[800px] text-center">
              <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                {t('title')}
              </h1>
              <p className="mb-8 text-base leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                {t('description')}
              </p>
              <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <div className="relative">
                  <button
                    onClick={toggleDownloadMenu}
                    className="rounded-xs bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80 flex items-center space-x-2"
                  >
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span>{t('downloadNow')}</span>
                  </button>
                  
                  {/* Download Menu */}
                  {showDownloadMenu && (
                    <div className="download-menu-container absolute top-full left-0 mt-2 w-96 bg-white dark:bg-gray-dark rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50">
                      <div className="p-2">
                        {/* macOS Apple Silicon */}
                        <button
                          onClick={() => handleDownload('appleSilicon')}
                          disabled={downloading || !versionInfo}
                          className="w-full text-left p-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {downloading ? (
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary"></div>
                          ) : (
                            <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                            </svg>
                          )}
                          <div>
                            <div className="font-semibold text-black dark:text-white">
                              {downloading ? 'Preparing download...' : 'Download for Mac (Apple Silicon)'}
                            </div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">M1, M2, M3 Macs</div>
                          </div>
                        </button>

                        {/* macOS Intel */}
                        <button
                          onClick={() => handleDownload('intel')}
                          disabled={downloading || !versionInfo}
                          className="w-full text-left p-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {downloading ? (
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary"></div>
                          ) : (
                            <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                          )}
                          <div>
                            <div className="font-semibold text-black dark:text-white">
                              {downloading ? 'Preparing download...' : 'Download for Mac (Intel)'}
                            </div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">Intel-based Macs</div>
                          </div>
                        </button>

                        <div className="border-t border-gray-200 dark:border-gray-700 my-2"></div>

                        {/* Windows - Coming Soon */}
                        <div className="w-full text-left p-3 rounded-md flex items-center space-x-3 opacity-60">
                          <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                          </svg>
                          <div>
                            <div className="font-semibold text-gray-500 dark:text-gray-400">Download for Windows</div>
                            <div className="text-sm text-gray-400 dark:text-gray-500">Coming Soon</div>
                          </div>
                        </div>

                        {/* Linux - Coming Soon */}
                        <div className="w-full text-left p-3 rounded-md flex items-center space-x-3 opacity-60">
                          <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                          </svg>
                          <div>
                            <div className="font-semibold text-gray-500 dark:text-gray-400">Download for Linux</div>
                            <div className="text-sm text-gray-400 dark:text-gray-500">Coming Soon</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <a
                  href="#features"
                  className="rounded-xs bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
                >
                  {t('exploreFeatures')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Kidou Section */}
      <section className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-16">
            <h2 className="mb-4 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
              {t('whatIsKidou.title')}
            </h2>
            <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark">
              {t('whatIsKidou.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-white p-8 shadow-three dark:bg-gray-dark">
              <div className="mb-6 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                Multi-Session Management
              </h3>
              <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark">
                Open and manage multiple Claude coding sessions simultaneously. Each session maintains its own context, memory, and conversation thread for specialized tasks.
              </p>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-three dark:bg-gray-dark">
              <div className="mb-6 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                Vibe Coding Experience
              </h3>
              <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark">
                Enter the flow state with intuitive, responsive UI designed for seamless AI collaboration. Code, chat, and create without breaking your mental momentum.
              </p>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-three dark:bg-gray-dark">
              <div className="mb-6 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                Intelligent Session Orchestration
              </h3>
              <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark">
                Smart session management with automatic context switching, session persistence, and intelligent workload distribution across your AI assistants.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-gray-light py-16 dark:bg-bg-color-dark md:py-20 lg:py-28">
        <div className="container">
          <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-16">
            <h2 className="mb-4 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
              {t('capabilities.title')}
            </h2>
            <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark">
              {t('capabilities.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="rounded-lg bg-white p-8 shadow-three dark:bg-gray-dark">
              <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                🚀 Parallel AI Workstreams
              </h3>
              <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                Run multiple Claude instances in parallel for different aspects of your project:
              </p>
              <ul className="list-disc pl-6 text-base text-body-color dark:text-body-color-dark">
                <li>Frontend development in one session</li>
                <li>Backend API design in another</li>
                <li>Database optimization in a third</li>
                <li>Code review and testing in parallel</li>
              </ul>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-three dark:bg-gray-dark">
              <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                💡 Context-Aware Sessions
              </h3>
              <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                Each session maintains deep project context and memory:
              </p>
              <ul className="list-disc pl-6 text-base text-body-color dark:text-body-color-dark">
                <li>Persistent conversation history</li>
                <li>Project-specific knowledge retention</li>
                <li>Automatic context switching</li>
                <li>Cross-session information sharing</li>
              </ul>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-three dark:bg-gray-dark">
              <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                ⚡ Lightning-Fast Interface
              </h3>
              <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                Optimized for speed and developer productivity:
              </p>
              <ul className="list-disc pl-6 text-base text-body-color dark:text-body-color-dark">
                <li>Instant session switching with hotkeys</li>
                <li>Real-time collaborative editing</li>
                <li>Smart auto-completion</li>
                <li>Minimal latency AI responses</li>
              </ul>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-three dark:bg-gray-dark">
              <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                🎨 Customizable Workflows
              </h3>
              <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                Tailor Kidou to your development style:
              </p>
              <ul className="list-disc pl-6 text-base text-body-color dark:text-body-color-dark">
                <li>Custom session templates</li>
                <li>Programmable hotkeys and shortcuts</li>
                <li>Flexible window layouts</li>
                <li>Integration with your favorite tools</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Kidou Section */}
      <section className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div className="mb-12 max-w-[570px] lg:mb-0">
                <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                  {t('whyKidou.title')}
                </h2>
                
                <div className="mb-8">
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                    {t('whyKidou.vibeCooding.title')}
                  </h3>
                  <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark">
                    {t('whyKidou.vibeCooding.description')}
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                    {t('whyKidou.tenxSpeed.title')}
                  </h3>
                  <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark">
                    {t('whyKidou.tenxSpeed.description')}
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                    {t('whyKidou.cognitiveReduction.title')}
                  </h3>
                  <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark">
                    {t('whyKidou.cognitiveReduction.description')}
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto max-w-[500px] lg:mr-0">
                {/* Placeholder for features illustration */}
                <div className="rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 p-8 text-center">
                  <div className="mb-6 text-6xl">🚀</div>
                  <h4 className="mb-4 text-xl font-bold text-black dark:text-white">
                    Ready to Transform Your Coding Experience?
                  </h4>
                  <p className="text-base text-body-color dark:text-body-color-dark">
                    Join the revolution in AI-assisted development with Kidou&apos;s multi-session management.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default KidouContent; 