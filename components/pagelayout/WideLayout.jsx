
export default function WideLayout({ children }) {
    return (
      <div className="font-thin font-sans min-h-screen min-w-full bg-gray-100 flex items-center justify-center">
        <div className="w-[calc(16/9*100vh)] h-screen bg-white border shadow-lg flex flex-row justify-between">
          {/* <TopNavbar /> */}
          <main className="flex-grow">{children}</main>
          {/* <BottomNavbar /> */}
        </div>
      </div>
    );
  };