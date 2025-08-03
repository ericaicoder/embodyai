"use client";

import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { useTranslations } from "next-intl";

const AboutPage = () => {
  const t = useTranslations('Breadcrumb');
  
  return (
    <>
      <Breadcrumb
        pageName={t('aboutTitle')}
        description={t('aboutDescription')}
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
