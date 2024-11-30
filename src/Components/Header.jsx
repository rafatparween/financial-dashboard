import React from "react";

const Header = () => {
    return (
        <header className="w-full flex items-center justify-between px-6 py-4 bg-white">
            <div className="flex items-center space-x-3">

                <img
                    src="/Logo.png"
                    alt="Company Icon"
                    className="w-[167px] h-[35px]"
                />

                <div className="w-6"></div>

                <h2 className="text-[28px] text-[343C6A] font-bold">Overview</h2>

            </div>


            <div className="flex items-center space-x-6">

                <div className="relative flex items-center w-[255px] h-[50px] mt-[25px] bg-gray-100 rounded-full">

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


                <button>
                    <img
                        src="/settingicon.png"
                        alt="Settings"
                        className="w-[50px] h-[50px]"
                    />
                </button>
                <button>
                    <img
                        src="/bellicon.png"
                        alt="Notifications"
                        className="w-[50px] h-[50px]"
                    />
                </button>


                <img
                    src="/profile.png"
                    alt="Profile"
                    className="w-[60px] h-[60px] rounded-full object-cover"
                />
            </div>
        </header>
    );
};

export default Header;
