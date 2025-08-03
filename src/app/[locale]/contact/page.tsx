"use client";

import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import { useTranslations } from "next-intl";

const ContactPage = () => {
  const t = useTranslations('Breadcrumb');
  
  return (
    <>
      <Breadcrumb
        pageName={t('contactTitle')}
        description={t('contactDescription')}
      />

      <Contact />
    </>
  );
};

export default ContactPage;
