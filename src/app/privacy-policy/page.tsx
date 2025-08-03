import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - EmbodyAI",
  description: "Learn how EmbodyAI protects your privacy and handles your personal data.",
};

const PrivacyPolicy = () => {
  return (
    <>
      <section className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px]">
                <h1 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                  Privacy Policy
                </h1>
                <p className="mb-8 text-base text-body-color dark:text-body-color-dark">
                  Last updated: January 2025
                </p>

                <div className="prose prose-lg max-w-none dark:prose-invert">
                  <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                    1. Information We Collect
                  </h2>
                  <p className="mb-6 text-base text-body-color dark:text-body-color-dark">
                    EmbodyAI is committed to privacy-first AI services. We collect minimal information necessary to provide our services:
                  </p>
                  <ul className="mb-6 list-disc pl-6 text-base text-body-color dark:text-body-color-dark">
                    <li>Basic contact information you voluntarily provide (name, email for communication)</li>
                    <li>Technical information for service functionality (IP address, browser type, device information)</li>
                    <li>Usage patterns to improve our AI platform performance</li>
                  </ul>
                  <div className="mb-6 rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
                    <p className="text-base font-semibold text-blue-800 dark:text-blue-200">
                      <strong>Important:</strong> We do not collect, store, or process company information, business data, 
                      or proprietary details. Our AI services are designed to operate without requiring access to your 
                      confidential business information.
                    </p>
                  </div>

                  <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                    2. How We Use Your Information
                  </h2>
                  <p className="mb-4 text-base text-body-color dark:text-body-color-dark">
                    We use the limited information we collect to:
                  </p>
                  <ul className="mb-6 list-disc pl-6 text-base text-body-color dark:text-body-color-dark">
                    <li>Provide and maintain our AI services</li>
                    <li>Improve platform performance and user experience</li>
                    <li>Communicate with you about service updates (only when necessary)</li>
                    <li>Ensure security and prevent unauthorized access</li>
                  </ul>
                  <p className="mb-6 text-base text-body-color dark:text-body-color-dark">
                    <strong>We do not use your data to train AI models or for any commercial purposes beyond service delivery.</strong>
                  </p>

                  <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                    3. Data Sharing and Disclosure
                  </h2>
                  <p className="mb-6 text-base text-body-color dark:text-body-color-dark">
                    We follow a strict no-sharing policy. We do not sell, rent, or share your personal data with third parties. 
                    Limited exceptions apply only for: legal compliance when required by law, essential service providers 
                    under strict confidentiality agreements, or with your explicit written consent.
                  </p>

                  <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                    4. Data Security
                  </h2>
                  <p className="mb-6 text-base text-body-color dark:text-body-color-dark">
                    We implement industry-standard security measures including encryption, access controls,
                    and regular security audits to protect your data.
                  </p>

                  <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                    5. Your Rights
                  </h2>
                  <p className="mb-4 text-base text-body-color dark:text-body-color-dark">
                    You have the right to:
                  </p>
                  <ul className="mb-6 list-disc pl-6 text-base text-body-color dark:text-body-color-dark">
                    <li>Access your personal data</li>
                    <li>Correct inaccurate information</li>
                    <li>Delete your data (subject to legal obligations)</li>
                    <li>Object to processing</li>
                    <li>Data portability</li>
                  </ul>

                  <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                    6. Cookies and Tracking
                  </h2>
                  <p className="mb-6 text-base text-body-color dark:text-body-color-dark">
                    We use cookies and similar technologies to improve functionality, analyze usage,
                    and personalize content. You can control cookies through your browser settings.
                  </p>

                  <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                    7. International Data Transfers
                  </h2>
                  <p className="mb-6 text-base text-body-color dark:text-body-color-dark">
                    Your data may be processed in countries other than your own. We ensure adequate
                    protection through appropriate safeguards and compliance measures.
                  </p>

                  <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                    8. Contact Us
                  </h2>
                  <p className="mb-4 text-base text-body-color dark:text-body-color-dark">
                    For privacy-related questions or to exercise your rights, contact us at:
                  </p>
                  <div className="mb-6 text-base text-body-color dark:text-body-color-dark">
                    <p>Email: support@embodyai.co.jp</p>
                    <p>Website: https://embodyai.co.jp</p>
                  </div>

                  <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                    9. Changes to This Policy
                  </h2>
                  <p className="mb-6 text-base text-body-color dark:text-body-color-dark">
                    We may update this Privacy Policy periodically. We will notify you of significant
                    changes through our website or direct communication.
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

export default PrivacyPolicy; 