"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormStatus {
  type: "idle" | "loading" | "success" | "error";
  message: string;
}

const Contact = () => {
  const t = useTranslations('Contact');
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<FormStatus>({
    type: "idle",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Client-side validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        type: "error",
        message: t('form.errorRequired'),
      });
      return;
    }

    if (!isValidEmail(formData.email)) {
      setStatus({
        type: "error",
        message: t('form.errorInvalidEmail'),
      });
      return;
    }

    setStatus({ type: "loading", message: "" });

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({
          type: "success",
          message: t('form.success'),
        });
        // Reset form
        setFormData({ name: "", email: "", message: "" });
      } else {
        const errorData = await response.json();
        setStatus({
          type: "error",
          message: errorData.error || "An error occurred",
        });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: t('form.errorNetwork'),
      });
    }
  };

  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s"
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                {t('title')}
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                {t('description')}
              </p>
              <form onSubmit={handleSubmit}>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        {t('form.name')}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder={t('form.name')}
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        disabled={status.type === "loading"}
                        required
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        {t('form.email')}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder={t('form.email')}
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        disabled={status.type === "loading"}
                        required
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        {t('form.message')}
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder={t('form.messagePlaceholder')}
                        className="border-stroke w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        disabled={status.type === "loading"}
                        required
                      ></textarea>
                    </div>
                  </div>

                  {/* Status Messages */}
                  {status.message && (
                    <div className="w-full px-4">
                      <div
                        className={`mb-6 rounded-md px-4 py-3 ${
                          status.type === "success"
                            ? "bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400"
                            : status.type === "error"
                            ? "bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400"
                            : "bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400"
                        }`}
                      >
                        <div className="flex items-center">
                          {status.type === "success" && (
                            <svg
                              className="mr-2 h-4 w-4"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          )}
                          {status.type === "error" && (
                            <svg
                              className="mr-2 h-4 w-4"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                clipRule="evenodd"
                              />
                            </svg>
                          )}
                          <span>{status.message}</span>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="w-full px-4">
                    <button
                      type="submit"
                      disabled={status.type === "loading"}
                      className="rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                    >
                      {status.type === "loading" ? (
                        <>
                          <svg
                            className="mr-2 h-4 w-4 animate-spin"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          {t('form.sending')}
                        </>
                      ) : (
                        t('form.sendMessage')
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

const NewsLatterBox = () => {
  return (
    <div
      className="relative z-10 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
      data-wow-delay=".15s"
    >
      <h3 className="mb-4 text-2xl font-bold leading-tight text-black dark:text-white">
        Subscribe to receive future updates
      </h3>
      <p className="mb-11 border-b border-body-color border-opacity-25 pb-11 text-base leading-relaxed text-body-color dark:border-white dark:border-opacity-25">
        Lorem ipsum dolor sited Sed ullam corper consectur adipiscing Mae ornare massa quis lectus.
      </p>
      <div>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          className="border-stroke mb-4 w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
        />
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          className="border-stroke mb-4 w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
        />
        <input
          type="submit"
          value="Subscribe"
          className="mb-5 flex w-full cursor-pointer items-center justify-center rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
        />
        <p className="text-center text-base leading-relaxed text-body-color">
          No spam guaranteed, So please don't send any spam mail.
        </p>
      </div>
      <div>
        <span className="absolute left-2 top-7">
          <svg
            width="57"
            height="65"
            viewBox="0 0 57 65"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.2"
              d="M0.407629 15.9573L39.1541 64.0714L56.4489 0.160793L0.407629 15.9573Z"
              fill="url(#paint0_linear_1028_600)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1028_600"
                x1="-18.3187"
                y1="55.1044"
                x2="37.161"
                y2="15.3509"
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  stopColor="#4A6CF7"
                  stopOpacity="0"
                />
                <stop
                  offset="1"
                  stopColor="#4A6CF7"
                />
              </linearGradient>
            </defs>
          </svg>
        </span>
        <span className="absolute bottom-24 left-1.5">
          <svg
            width="39"
            height="32"
            viewBox="0 0 39 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.894806 7.0002C0.894806 15.8282 0.894806 24.6562 0.894806 31.0002L6.58893 25.9002C14.5093 25.9002 22.4297 25.9002 30.3501 25.9002C32.0893 25.9002 33.8285 24.9002 35.5677 22.9002C36.6069 21.4002 37.6461 19.9002 38.6853 18.4002C39.2049 17.4002 39.2049 16.4002 38.6853 15.4002C37.6461 13.9002 36.6069 12.4002 35.5677 10.9002C33.8285 8.9002 32.0893 7.9002 30.3501 7.9002C22.4297 7.9002 14.5093 7.9002 6.58893 7.9002L0.894806 2.8002C0.894806 4.2002 0.894806 5.6002 0.894806 7.0002Z"
              fill="#13C296"
            />
            <path
              opacity="0.7"
              d="M7.9107 23.8002C15.0314 23.8002 22.152 23.8002 29.2727 23.8002C30.1676 23.8002 31.0624 23.2002 31.9573 22.0002C32.8522 20.8002 33.7471 19.6002 34.6419 18.4002C35.0893 17.8002 35.0893 17.2002 34.6419 16.6002C33.7471 15.4002 32.8522 14.2002 31.9573 13.0002C31.0624 11.8002 30.1676 11.2002 29.2727 11.2002C22.152 11.2002 15.0314 11.2002 7.9107 11.2002V23.8002Z"
              fill="#4A6CF7"
            />
          </svg>
        </span>
        <span className="absolute right-2 top-[140px]">
          <svg
            width="38"
            height="38"
            viewBox="0 0 38 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.3"
              d="M10.6763 35.3091C23.3976 41.6367 38.1681 31.7045 31.8405 19.0711C25.5129 6.3378 10.6763 16.2646 16.9985 28.8979C23.3207 41.5312 38.0912 31.5989 31.7636 18.9656C25.436 6.33225 10.5994 16.259 16.9216 28.8924"
              stroke="#4A6CF7"
            />
            <path
              d="M17.599 6.87776C17.599 5.05914 19.0717 3.58643 20.8903 3.58643C22.7089 3.58643 24.1816 5.05914 24.1816 6.87776C24.1816 8.69639 22.7089 10.1691 20.8903 10.1691C19.0717 10.1691 17.599 8.69639 17.599 6.87776Z"
              fill="#4A6CF7"
            />
            <path
              d="M30.7597 17.2693C30.7597 15.4507 32.2324 13.978 34.051 13.978C35.8696 13.978 37.3423 15.4507 37.3423 17.2693C37.3423 19.0879 35.8696 20.5606 34.051 20.5606C32.2324 20.5606 30.7597 19.0879 30.7597 17.2693Z"
              fill="#4A6CF7"
            />
            <path
              d="M1.71472 17.2693C1.71472 15.4507 3.18743 13.978 5.00605 13.978C6.82468 13.978 8.29739 15.4507 8.29739 17.2693C8.29739 19.0879 6.82468 20.5606 5.00605 20.5606C3.18743 20.5606 1.71472 19.0879 1.71472 17.2693Z"
              fill="#4A6CF7"
            />
            <path
              d="M12.1063 27.6613C12.1063 25.8427 13.579 24.37 15.3976 24.37C17.2162 24.37 18.6889 25.8427 18.6889 27.6613C18.6889 29.4799 17.2162 30.9526 15.3976 30.9526C13.579 30.9526 12.1063 29.4799 12.1063 27.6613Z"
              fill="#4A6CF7"
            />
          </svg>
        </span>
      </div>
    </div>
  );
};
