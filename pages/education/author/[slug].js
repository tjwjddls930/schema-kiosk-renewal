import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Author = () => {
  const router = useRouter();
  const pid = router.query.slug; // 'slug'([slug]) is the name of the dynamic parameter

  return (
    <>
      <h1>author [slug]: {pid}</h1>
      <Link href="/main">
        {'To viewpage'}
      </Link>
    </>
  );
};

export default Author;