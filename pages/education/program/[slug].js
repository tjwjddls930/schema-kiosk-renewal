import React from "react";
import { useRouter } from "next/router";
import EducationLayout from "@/components/education/EducationLayout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import CoverflowCarousel from "@/components/CoverflowCarousel";
import EducationContent from "@/components/education/EducationContent";
import { coverflow_carousel_data } from "@/data/sample_data";

const Program = () => {
  const router = useRouter();
  const pid = router.query.slug; // 'slug'([slug]) is the name of the dynamic parameter

  return (
    // <>
    //   <h1 className="font-se">program [slug]: {pid}</h1>
    // </>
    <EducationLayout>
      <EducationContent />
    </EducationLayout>
  );
};

export async function getStaticPaths() {
  // const pid = CoverflowCarousel.id;
  const pid = coverflow_carousel_data.id;
  return {
    paths: [
      // String variant:
      `/education/program/${pid}`,
      // Object variant:
      { params: { slug: `program-${pid}` } },
    ],
    fallback: true,
  }
}

export async function getStaticProps(context) {
  const {locale} = context;
  return{
      props: {
          ...(await serverSideTranslations(locale, ['common', 'navbar']))
      }
  }
};

export default Program;