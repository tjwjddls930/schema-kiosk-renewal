import React from "react";
import { useRouter } from "next/router";
import EducationLayout from "@/components/education/program/EducationLayout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import EducationContent from "@/components/education/program/EducationContent";
import { educationData } from "@/data/educationData";
import Navbar from "@/components/navbar/Navbar";
import { useState, useEffect } from "react";

const Program = () => {
  const router = useRouter();
  const [data, setData] = useState(null);
  const pid = router.query.slug; // 'slug'([slug]) is the name of the dynamic parameter
  const {index} = router.query;
  useEffect(()=> {
    const selectedData = educationData[pid].education[index];
    if(pid && index) {
      setData(selectedData)
    }
  }, [pid, index]);
  // console.log(data);
  return (
    <EducationLayout>
      {data && (
        <EducationContent 
          img={data.img}
          type={data.type}
          title={data.title}
          explanation={data.explanation}
          participate={data.participate}
          time1={data.time1}
          participate1={data.participate1}
          location={data.location}
          host={data.host}
          support={data.support}
        />
      )}
      <Navbar />
    </EducationLayout>
  );
};

export async function getStaticPaths() {
  // const pid = CoverflowCarousel.id;
  const pid = educationData.id;
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