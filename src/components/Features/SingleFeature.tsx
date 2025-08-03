"use client";
import { useTranslations } from "next-intl";
import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const t = useTranslations();
  const { icon, title, paragraph, titleKey, paragraphKey } = feature;
  
  const displayTitle = titleKey ? t(titleKey) : title;
  const displayParagraph = paragraphKey ? t(paragraphKey) : paragraph;
  
  return (
    <div className="w-full">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div className="bg-primary/10 text-primary mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md">
          {icon}
        </div>
        <h3 className="mb-5 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl dark:text-white">
          {displayTitle}
        </h3>
        <p className="text-body-color pr-[10px] text-base leading-relaxed font-medium">
          {displayParagraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
