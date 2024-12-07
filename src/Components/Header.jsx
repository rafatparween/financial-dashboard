import * as React from "react";

const Header = () => {
  const navigationIcons = [
    {
      src: "/settingicon.png",
      alt: "Settings",
      className: "w-[50px] h-[50px]",
    },
    {
      src: "/bellicon.png",
      alt: "Notifications",
      className: "w-[50px] h-[50px]",
    },
    {
      src: "/profile.png",
      alt: "Profile",
      className: "w-[60px] h-[60px] rounded-full object-cover",
    },
  ];

  return (
    <>
      {/* Mobile View */}
      <header className="w-full flex flex-col sm:hidden items-center justify-between px-4 py-4 bg-white">
        {/* Top Section for Logo and Profile */}
        <div className="w-full flex items-center justify-between sm:w-auto">
          <button className="sm:hidden">
            {/* Mobile Menu Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-[#343C6A]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 6h16.5m-16.5 6h16.5"
              />
            </svg>
          </button>
          <h2 className="text-[18px] sm:text-[28px] text-[#343C6A] font-medium">
            Overview
          </h2>
          <img
            src="/profile.png"
            alt="Profile"
            className="w-8 h-8 sm:w-[60px] sm:h-[60px] rounded-full object-cover"
          />
        </div>

        {/* Bottom Section for Search Bar */}
        <div className="w-full sm:w-auto mt-4 sm:mt-0 flex items-center justify-center sm:justify-end">
          <div className="relative flex items-center w-full sm:w-[255px] h-[40px] sm:h-[50px] bg-gray-100 rounded-full">
            <img
              src="/searchicon.png"
              alt="Search Icon"
              className="w-[16px] sm:w-[19px] h-[16px] sm:h-[19px] ml-3 text-gray-500"
            />
            <input
              type="text"
              placeholder="Search for something"
              className="w-full bg-transparent px-3 py-2 text-sm focus:outline-none placeholder:text-gray-400"
            />
          </div>
        </div>
      </header>

      {/* Desktop View */}
      <header className="w-full hidden sm:flex items-center justify-between px-6 py-4 bg-white">
        <div className="flex items-center space-x-3">
          <img
            src="/Logo.png"
            alt="Company Icon"
            className="w-[167px] h-[35px]"
          />
          <div className="w-6"></div>
          <div className="relative my-auto text-[28px] text-[#343C6A] font-inter ml-[115px]">Overview</div>
        </div>

        <div className="flex items-center space-x-6">
          <div className="relative flex items-center w-[255px] h-[50px] bg-gray-100 rounded-full">
            <img
              src="/searchicon.png"
              alt="Search Icon"
              className="w-[19px] h-[19px] ml-3 text-gray-500"
            />
            <input
              type="text"
              placeholder="Search for something"
              className="w-full bg-transparent px-3 py-2 text-sm focus:outline-none"
            />
          </div>

          {navigationIcons.map((icon, index) => (
            <button key={index} tabIndex={0} aria-label={icon.alt}>
              <img
                src={icon.src}
                alt={icon.alt}
                className={icon.className}
              />
            </button>
          ))}
        </div>
      </header>
    </>
  );
};

export default Header;



