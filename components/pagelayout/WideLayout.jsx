
const WideLayout = ({ children }) => {
  return (
    <div className="font-thin font-sans min-h-screen min-w-full flex items-center justify-center">
      <div className="w-[calc(16/9*100vh)] h-screen">
        {/* <TopNavbar /> */}
        {/* <main className="flex-grow">{children}</main> */}
        {/* <BottomNavbar /> */}
        {children}
      </div>
    </div>
  );
};

export default WideLayout;