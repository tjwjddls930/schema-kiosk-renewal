import BottomNavbar from "@/components/BottomNavbar";
import TopNavbar from "@/components/TopNavbar";

export const TallLayout = ({ children }) => {
  return (
    <div className="font-thin font-sans min-h-screen min-w-full bg-gray-100 flex items-center justify-center">
      <div className="w-[calc(9/16*100vh)] h-screen bg-white border shadow-lg flex flex-col justify-between">
        <TopNavbar />
        <main className="flex-grow">{children}</main>
        <BottomNavbar />
      </div>
    </div>
  );
};

export const WideLayout = ({ children }) => {
  return (
    <div className="font-thin font-sans min-h-screen min-w-full bg-gray-100 flex items-center justify-center">
      <div className="w-[calc(16/9*100vh)] h-screen bg-white border shadow-lg flex flex-col justify-between">
        {/* <TopNavbar /> */}
        <main className="flex-grow">{children}</main>
        {/* <BottomNavbar /> */}
      </div>
    </div>
  );
};
