import React from "react";
import { useRouter } from "next/router";

const Program = () => {
  const router = useRouter();
  const pid = router.query.slug; // 'slug'([slug]) is the name of the dynamic parameter

  return (
    <>
      <h1 className="font-se">program [slug]: {pid}</h1>
    </>
  );
};

export default Program;