// import Link from "next/link";
import Artistlayout from "@/components/exhibits/artistselect/ArtistLayout";
import { useState, useEffect } from "react";
// import { artistData } from "@/data/artistData";
// import { AnimatePresence, motion } from "framer-motion";
// import Artistcontent from "@/components/exhibits/artistselect/Artistcontent";
import Navbar from "@/components/navbar/Navbar";

export default function Presentpage() {
    // const [artist, setArtist] = useState(artistData[0]);
    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        // Update the isClient state to true as this code will be executed only on client side
        setIsClient(true);
      }, []);
    return (
       <>
        {isClient && (
        <Artistlayout>  
            <Navbar 
            url={"/video/docent/schema-docent-02.webm"}
            lang={"artist"}
            />
        </Artistlayout>
        )}
       </>
    )
};