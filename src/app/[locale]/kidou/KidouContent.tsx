"use client";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { useTranslations, useLocale } from "next-intl";

const KidouContent = () => {
  const t = useTranslations('Kidou');
  const locale = useLocale();

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
            <div className="-mx-4 flex flex-wrap items-center">
              <div className="w-full px-4 lg:w-1/2">
                <div className="mb-12 max-w-[570px] lg:mb-0">
                  <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                    {t('title')}
                  </h1>
                  <p className="mb-8 text-base leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                    {t('description')}
                  </p>
                  <div className="flex flex-col items-start justify-start space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                    <a
                      href="#features"
                      className="rounded-xs bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                    >
                      {t('exploreFeatures')}
                    </a>
                    <a
                      href={`/${locale}/contact`}
                      className="inline-block rounded-xs bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
                    >
                      {t('getEarlyAccess')}
                    </a>
                  </div>
                </div>
              </div>

              <div className="w-full px-4 lg:w-1/2">
                <div className="relative mx-auto aspect-video max-w-[500px] lg:mr-0">
                  {/* Placeholder for Kidou screenshot/demo */}
                  <div className="flex h-full w-full items-center justify-center rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
                    <div className="text-center">
                      <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center">
                        <svg className="h-8 w-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <p className="text-sm text-body-color dark:text-body-color-dark">
                        Kidou Interface Demo
                      </p>
                    </div>
                  </div>
                </div>
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

      {/* CTA Section */}
      <section className="bg-primary py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="mx-auto max-w-[570px] text-center">
            <h2 className="mb-4 text-3xl font-bold leading-tight text-white sm:text-4xl sm:leading-tight">
              {t('cta.title')}
            </h2>
            <p className="mb-8 text-base leading-relaxed text-white/90">
              {t('cta.description')}
            </p>
            <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <a
                href={`/${locale}/contact`}
                className="rounded-xs bg-white px-8 py-4 text-base font-semibold text-primary duration-300 ease-in-out hover:bg-white/90"
              >
                {t('cta.requestEarlyAccess')}
              </a>
              <a
                href={`/${locale}/contact`}
                className="rounded-xs border border-white px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-white hover:text-primary"
              >
                {t('cta.scheduleDemo')}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default KidouContent; 