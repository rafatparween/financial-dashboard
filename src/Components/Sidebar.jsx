import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Sidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const menuItems = [
        { name: "Dashboard", icon: "/home.png", route: "/dashboard" },
        { name: "Transactions", icon: "/Vector.png" },
        { name: "Accounts", icon: "/user.png" },
        { name: "Investments", icon: "/invesment.png" },
        { name: "Credit Cards", icon: "/creditcard.png" },
        { name: "Loans", icon: "/loan.png" },
        { name: "Services", icon: "/service.png" },
        { name: "My Privileges", icon: "/privilage.png" },
        { name: "Setting", icon: "/setting.png", route: "/settings" },
    ];

    return (
        <div className="flex">
            <button
                className="md:hidden p-4 text-gray-600 focus:outline-none"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
                {isSidebarOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
            </button>
            <aside
                className={`fixed top-0 left-0 h-full 2xl:w-[213px] bg-white shadow-lg transform transition-transform duration-300 z-50
                    ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:relative md:w-64`}
            >
                <nav className="mt-6 space-y-2">
                    {menuItems.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center p-4 text-[#B1B1B1] text-[18px] font-medium hover:bg-gray-100 hover:text-[#232323] rounded-md cursor-pointer"
                        >
                            {item.route ? (
                                <Link
                                    to={item.route}
                                    className="flex items-center w-full"
                                    onClick={() => setIsSidebarOpen(false)}
                                >
                                    <img
                                        loading="lazy"
                                        src={item.icon}
                                        alt={item.name}
                                        className="mr-3 w-6 h-6 object-contain"
                                    />
                                    <span>{item.name}</span>
                                </Link>
                            ) : (
                                <div className="flex items-center w-full">
                                    <img
                                        loading="lazy"
                                        src={item.icon}
                                        alt={item.name}
                                        className="mr-3 w-6 h-6 object-contain"
                                    />
                                    <span>{item.name}</span>
                                </div>
                            )}
                        </div>
                    ))}
                </nav>
            </aside>

        </div>
    );
};

export default Sidebar;

