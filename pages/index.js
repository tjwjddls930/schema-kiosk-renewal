import React from "react";
import Screensaverpage from "@/components/docent/Screensaverpage";
export default function Home() {
    return(
        <Screensaverpage />
    )
};

// export const getServerSideProps = async (context) => {
//     return {
//         redirect: {
//             destination: 'https://schema-screensaver.vercel.app/', 
//             permanent: false, 
//         },
//     };
// };

