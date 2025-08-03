import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - EmbodyAI",
  description: "Read EmbodyAI's terms of service and user agreement for our AI platform and services.",
};

const TermsOfService = () => {
  return (
    <>
      <section className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px]">
                <h1 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                  Terms of Service
                </h1>
                <p className="mb-8 text-base text-body-color dark:text-body-color-dark">
                  Last updated: January 2025
                </p>

                <div className="prose prose-lg max-w-none dark:prose-invert">
                  <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                    1. Acceptance of Terms
                  </h2>
                  <p className="mb-6 text-base text-body-color dark:text-body-color-dark">
                    By accessing or using EmbodyAI's services, you agree to be bound by these Terms of Service.
                    If you do not agree to these terms, you may not use our services.
                  </p>

                  <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                    2. Description of Service
                  </h2>
                  <p className="mb-6 text-base text-body-color dark:text-body-color-dark">
                    EmbodyAI provides artificial intelligence solutions including machine learning,
                    natural language processing, computer vision, and data analytics services to businesses
                    and organizations.
                  </p>

                  <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                    3. User Responsibilities
                  </h2>
                  <p className="mb-4 text-base text-body-color dark:text-body-color-dark">
                    You agree to:
                  </p>
                  <ul className="mb-6 list-disc pl-6 text-base text-body-color dark:text-body-color-dark">
                    <li>Use our services in compliance with all applicable laws and regulations</li>
                    <li>Provide accurate and complete information</li>
                    <li>Maintain the confidentiality of your account credentials</li>
                    <li>Not use our services for illegal, harmful, or unauthorized purposes</li>
                    <li>Respect intellectual property rights</li>
                  </ul>

                  <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                    4. Data and Privacy
                  </h2>
                  <p className="mb-4 text-base text-body-color dark:text-body-color-dark">
                    EmbodyAI operates on a privacy-first principle. Your use of our services is subject to our Privacy Policy.
                  </p>
                  <div className="mb-6 rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
                    <p className="text-base font-semibold text-green-800 dark:text-green-200">
                      <strong>No Company Data Collection:</strong> We do not collect, access, or store your company information, 
                      business data, trade secrets, or proprietary information. Our AI services are designed to function 
                      without requiring access to your confidential business details.
                    </p>
                  </div>
                  <p className="mb-6 text-base text-body-color dark:text-body-color-dark">
                    You retain full ownership and control of any data you choose to share. We process only the minimal 
                    information necessary for service delivery.
                  </p>

                  <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                    5. AI Model Training and Improvement
                  </h2>
                  <p className="mb-6 text-base text-body-color dark:text-body-color-dark">
                    We do not use customer data, company information, or business content to train our AI models. 
                    Our AI improvements are based on general performance metrics and anonymous usage patterns only, 
                    with no access to your specific data or business information.
                  </p>

                  <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                    6. Service Availability
                  </h2>
                  <p className="mb-6 text-base text-body-color dark:text-body-color-dark">
                    We strive to maintain high availability but do not guarantee uninterrupted service.
                    We may perform maintenance, updates, or modifications that temporarily affect availability.
                  </p>

                  <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                    7. Intellectual Property
                  </h2>
                  <p className="mb-6 text-base text-body-color dark:text-body-color-dark">
                    EmbodyAI retains all rights to our technology, algorithms, and software.
                    You may not reverse engineer, copy, or create derivative works of our services.
                  </p>

                  <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                    8. Limitation of Liability
                  </h2>
                  <p className="mb-6 text-base text-body-color dark:text-body-color-dark">
                    EmbodyAI's liability is limited to the amount paid for our services.
                    We are not liable for indirect, incidental, or consequential damages.
                    AI outputs should be reviewed and validated before business use.
                  </p>

                  <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                    9. Termination
                  </h2>
                  <p className="mb-6 text-base text-body-color dark:text-body-color-dark">
                    Either party may terminate the agreement with appropriate notice.
                    We may suspend or terminate access for violations of these terms.
                  </p>

                  <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                    10. Disclaimers
                  </h2>
                  <p className="mb-4 text-base text-body-color dark:text-body-color-dark">
                    Our AI services are provided "as is" without warranties. We disclaim:
                  </p>
                  <ul className="mb-6 list-disc pl-6 text-base text-body-color dark:text-body-color-dark">
                    <li>Accuracy or completeness of AI outputs</li>
                    <li>Fitness for specific business purposes</li>
                    <li>Freedom from errors or interruptions</li>
                    <li>Compliance with specific industry regulations</li>
                  </ul>

                  <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                    11. Governing Law
                  </h2>
                  <p className="mb-6 text-base text-body-color dark:text-body-color-dark">
                    These terms are governed by Japanese law. Disputes will be resolved
                    through arbitration in Japan.
                  </p>

                  <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                    12. Changes to Terms
                  </h2>
                  <p className="mb-6 text-base text-body-color dark:text-body-color-dark">
                    We may modify these terms with notice. Continued use of our services
                    constitutes acceptance of updated terms.
                  </p>

                  <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                    13. Contact Information
                  </h2>
                  <p className="mb-4 text-base text-body-color dark:text-body-color-dark">
                    For questions about these terms, contact us at:
                  </p>
                  <div className="mb-6 text-base text-body-color dark:text-body-color-dark">
                    <p>Email: support@embodyai.co.jp</p>
                    <p>Website: https://embodyai.co.jp</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsOfService; 