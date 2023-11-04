import React from "react";
import { useRouter } from "next/router";
import EducationLayout from "@/components/education/program/EducationLayout";
import EducationContent from "@/components/education/program/EducationContent";
import Navbar from "@/components/navbar/Navbar";
import { useState, useEffect, useContext } from "react";
import { LanguageContext } from "@/contexts/LanguageContext";
import { educationData_KOR } from "@/data/educationData_KOR";
import { educationData_ENG } from "@/data/educationData_ENG";
import { educationData_CH } from "@/data/educationData_CH";
import { educationData_TH } from "@/data/educationData_TH";
import { educationData_VI } from "@/data/educationData_VI";

const inputData = {
  KOR: educationData_KOR,
  ENG: educationData_ENG,
  CH: educationData_CH,
  TH: educationData_TH,
  VI: educationData_VI
};

const Program = () => {
  const router = useRouter();
  const {language} = useContext(LanguageContext);
  const [data, setData] = useState(null);
  const pid = router.query.slug; // 'slug'([slug]) is the name of the dynamic parameter
  const {index} = router.query;
  useEffect(()=> {
    const selectedData = inputData[language][pid].education[index];
    if(pid && index) {
      setData(selectedData)
    }
  }, [pid, index]);
  // console.log(data);
  return (
    <EducationLayout>
      {data && (
        // <EducationContent 
        //   img={data.img}
        //   clip={data.youtube}
        //   type={data.type}
        //   title={data.title}
        //   explanation={data.explanation}
        //   participate={data.participate}
        //   time1={data.time1}
        //   participate1={data.participate1}
        //   location={data.location}
        //   host={data.host}
        //   support={data.support}
        // />
        <EducationContent />
      )}
      <Navbar />
    </EducationLayout>
  );
};

// export async function getStaticPaths() {
//   // const pid = CoverflowCarousel.id;
//   const pid = educationData.id;
//   return {
//     paths: [
//       // String variant:
//       `/education/program/${pid}`,
//       // Object variant:
//       { params: { slug: `program-${pid}` } },
//     ],
//     fallback: true,
//   }
// }

export default Program;