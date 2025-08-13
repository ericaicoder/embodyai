"use client";

import { useTranslations } from "next-intl";
import SectionTitle from "@/components/Common/SectionTitle";

export default function CompanyIntro() {
  const t = useTranslations("CompanyIntro");

  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <SectionTitle
            title={t("title")}
            paragraph={t("description")}
            center
            width="800px"
            mb="40px"
          />
          <div className="mx-auto max-w-4xl space-y-4 text-base leading-relaxed text-body-color sm:text-lg">
            <p>{t("p1")}</p>
            <p>{t("p2")}</p>
            <p>{t("p3")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
