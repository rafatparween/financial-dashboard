import React from "react";

const Dashboard = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8 w-[1495px]">
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* My Cards Section */}
        <div className="xl:col-span-2">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">My Cards</h2>
            <button className="text-blue-500 font-medium">See All</button>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="bg-gradient-to-r from-gray-800 to-gray-600 text-white p-6 rounded-[25px] h-[235px] w-[350px]">
              {/* Balance and Image Section */}
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-lg font-semibold">Balance</p>
                  <p className="text-3xl font-bold">$5,756</p>
                </div>
                {/* Card Image */}
                <img
                  src="/chip.png" // Replace with the actual card image path
                  alt="Card Image"
                  className="w-[34px] h-[34px] object-cover" // Adjust size to match the design
                />
              </div>
              {/* Card Details Section */}
              <div className="flex justify-between text-sm mt-4">
                <div>
                  <p>CARD HOLDER</p>
                  <p className="font-semibold">Eddy Cusuma</p>
                </div>
                <div>
                  <p>VALID THRU</p>
                  <p className="font-semibold">12/22</p>
                </div>
              </div>
              <p className="mt-6 text-lg font-semibold">3778 **** **** 1234</p>
            </div>
            {/* Card 2 */}
            <div className="bg-white shadow-lg p-6 rounded-[25px] h-[235px] w-[350px]">
              <p className="text-gray-600 text-lg font-semibold">Balance</p>
              <p className="text-3xl font-bold mb-4">$5,756</p>
              <div className="flex justify-between text-sm">
                <div>
                  <p className="text-gray-500">CARD HOLDER</p>
                  <p className="font-semibold">Eddy Cusuma</p>
                </div>
                <div>
                  <p className="text-gray-500">VALID THRU</p>
                  <p className="font-semibold">12/22</p>
                </div>
              </div>
              <p className="mt-6 text-lg font-semibold text-gray-700">
                3778 **** **** 1234
              </p>
            </div>
          </div>
        </div>

        {/* Recent Transactions */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Recent Transaction</h2>
          <div className="bg-white shadow-lg p-6 rounded-[25px] h-[235px] w-[350px] space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium">Deposit from my Card</p>
                <p className="text-sm text-gray-500">28 January 2021</p>
              </div>
              <p className="text-red-500 font-semibold">-$850</p>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium">Deposit Paypal</p>
                <p className="text-sm text-gray-500">25 January 2021</p>
              </div>
              <p className="text-green-500 font-semibold">+$2,500</p>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium">Jemi Wilson</p>
                <p className="text-sm text-gray-500">21 January 2021</p>
              </div>
              <p className="text-green-500 font-semibold">+$5,400</p>
            </div>
          </div>
        </div>

        {/* Weekly Activity */}
        {/* Weekly Activity */}
<div className="xl:col-span-2">
  <h2 className="text-2xl font-bold mb-6">Weekly Activity</h2>
  <div className="bg-white shadow-lg p-6 rounded-lg">
    <div className="flex justify-between items-center mb-6">
      <p className="text-blue-500 font-medium">Deposit</p>
      <p className="text-black font-medium">Withdraw</p>
    </div>
    <div className="grid grid-cols-7 gap-4">
      {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, index) => (
        <div key={index} className="flex flex-col items-center">
          {/* Side by side bars for each day */}
          <div className="flex items-end">
            <div
              className="h-12 w-8 bg-black rounded-t"
              style={{ marginRight: `${index * 8}px` }} // Increasing space as the week progresses
            ></div>
            <div className="h-8 w-8 bg-blue-500 rounded-t"></div>
          </div>
          <p className="mt-2 text-sm font-medium">{day}</p>
        </div>
      ))}
    </div>
  </div>
</div>

        {/* Expense Statistics */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Expense Statistics</h2>
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <div className="relative">
              <svg viewBox="0 0 36 36" className="w-32 h-32 mx-auto">
                <circle
                  className="text-blue-500"
                  strokeWidth="3.8"
                  strokeDasharray="30,70"
                  fill="none"
                  r="16"
                  cx="18"
                  cy="18"
                  stroke="currentColor"
                />
                <circle
                  className="text-orange-500"
                  strokeWidth="3.8"
                  strokeDasharray="15,85"
                  fill="none"
                  r="16"
                  cx="18"
                  cy="18"
                  stroke="currentColor"
                  transform="rotate(-90 18 18)"
                />
                <circle
                  className="text-gray-300"
                  strokeWidth="3.8"
                  strokeDasharray="55,45"
                  fill="none"
                  r="16"
                  cx="18"
                  cy="18"
                  stroke="currentColor"
                  transform="rotate(-180 18 18)"
                />
              </svg>
            </div>
            <div className="mt-6 space-y-2 text-sm">
              <div className="flex justify-between">
                <p>Entertainment</p>
                <p>30%</p>
              </div>
              <div className="flex justify-between">
                <p>Bill Expense</p>
                <p>15%</p>
              </div>
              <div className="flex justify-between">
                <p>Investment</p>
                <p>20%</p>
              </div>
              <div className="flex justify-between">
                <p>Others</p>
                <p>35%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;



