import React from "react";

const Sidebar = () => {
    const menuItems = [
        { name: "Dashboard", icon: "/home.png" },
        { name: "Transactions", icon: "/Vector.png" },
        { name: "Accounts", icon: "/user.png" },
        { name: "Investments", icon: "/invesment.png" },
        { name: "Credit Cards", icon: "/creditcard.png" },
        { name: "Loans", icon: "/loan.png" },
        { name: "Services", icon: "/service.png" },
        { name: "My Privileges", icon: "/privilage.png" },
        { name: "Setting", icon: "/setting.png" },
    ];

    return (
        <div className="flex">
            <aside className="w-64 bg-white shadow-lg h-[1184px] w-[250px]">
                <nav className="mt-6 space-y-2">
                    {menuItems.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center p-4 text-[#B1B1B1] text-[18px] font-medium hover:bg-gray-100 hover:text-[#232323] rounded-md cursor-pointer "
                        >

                            <img
                                src={item.icon}
                                alt={item.name}
                                className="mr-3 w-6 h-6 object-contain"
                            />
                            <span>{item.name}</span>
                        </div>
                    ))}
                </nav>
            </aside>
            <main className="flex-1 p-6">

            </main>
        </div>
    );
};

export default Sidebar;