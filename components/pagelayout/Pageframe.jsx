import Navbar from "../navbar/Navbar";

export default function Pageframe({children, url}) {

    return(
        <div className={`h-screen w-screen bg-no-repeat bg-cover bg-[url(${url})`}>
            {children}
            {/* navbar */}
        </div>
    )
};