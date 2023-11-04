// import BottomNavbar from "@/components/BottomNavbar";
// import TopNavbar from "@/components/TopNavbar";
// import TopNavbar from "../mainpage/Topnavbar";

const TallLayout = ({ children }) => {
  return (
    <div className="font-thin font-sans min-h-screen min-w-full flex items-center justify-center">
      <div className="w-[calc(9/16*100vh)] h-screen">
        {/* <TopNavbar /> */}
        {/* <main className="flex-grow">{children}</main> */}
        {/* <BottomNavbar /> */}
        {children}
      </div>
    </div>
  );
};

export default TallLayout;

