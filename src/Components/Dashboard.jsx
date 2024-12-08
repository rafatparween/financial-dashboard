import React from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import { FaArrowDown, FaArrowUp, FaPaperPlane } from "react-icons/fa";
import data from "./dashboardData.json"; // Import the JSON data
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  ArcElement,
} from "chart.js";

// Register chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  ArcElement
);

const Dashboard = () => {
  const { weeklyData, expenseData, balanceData, transactions } = data; // Destructure the JSON data
  const balanceOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 sm:gap-8">
        {/* My Cards Section */}
        <div className="xl:col-span-2">
          <div className="flex justify-between items-center mb-4 sm:mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 font-inter">My Cards</h2>
            <button className="text-blue-500 font-medium hover:underline font-inter">See All</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* Card 1 */}
            <div className="bg-gradient-to-r from-gray-800 to-black text-white p-4 sm:p-6 rounded-2xl shadow-lg">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-md sm:text-lg font-medium">Balance</p>
                  <p className="text-2xl sm:text-3xl font-bold">$5,756</p>
                </div>
                <img
                  src="/chip.png"
                  alt="Card Image"
                  className="w-8 h-8 sm:w-10 sm:h-10 object-cover"
                />
              </div>
              <div className="flex justify-between text-xs sm:text-sm mt-4">
                <div>
                  <p>CARD HOLDER</p>
                  <p className="font-semibold">Eddy Cusuma</p>
                </div>
                <div>
                  <p>VALID THRU</p>
                  <p className="font-semibold">12/22</p>
                </div>
              </div>
              <p className="mt-4 sm:mt-6 text-md sm:text-lg font-semibold">3778 * * 1234</p>
            </div>
            
            {/* Card 2 */}
            <div className="bg-white shadow-lg p-4 sm:p-6 rounded-2xl">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-600 text-md sm:text-lg font-medium">Balance</p>
                  <p className="text-2xl sm:text-3xl font-bold mb-4">$5,756</p>
                </div>
                <img
                  src="/schip.png"
                  alt="Card Image"
                  className="w-8 h-8 sm:w-10 sm:h-10 object-cover"
                />
              </div>
              <div className="flex justify-between text-xs sm:text-sm">
                <div>
                  <p className="text-gray-500">CARD HOLDER</p>
                  <p className="font-semibold">Eddy Cusuma</p>
                </div>
                <div>
                  <p className="text-gray-500">VALID THRU</p>
                  <p className="font-semibold">12/22</p>
                </div>
              </div>
              <p className="mt-4 sm:mt-6 text-md sm:text-lg font-semibold text-gray-700">
                3778 * * 1234
              </p>
            </div>
          </div>
        </div>

        {/* Recent Transactions */}
        <div>
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-800">Recent Transactions</h2>
          <div className="bg-white shadow-lg p-4 sm:p-6 rounded-2xl space-y-4">
            {transactions.map((txn, index) => (
              <div key={index} className="flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <img
                    src={txn.type === "deposit" ? "/depositcard.png" : "/jemiwilson.png"}
                    alt={txn.title}
                    className="w-10 h-10 object-cover"
                  />
                  <div>
                    <p className="font-medium">{txn.title}</p>
                    <p className="text-xs sm:text-sm text-gray-500">{txn.date}</p>
                  </div>
                </div>
                <p className="font-semibold">{txn.amount}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 sm:gap-8 mt-6 sm:mt-8">
        <div className="xl:col-span-2">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-800">Weekly Activity</h2>
          <div className="bg-white shadow-lg p-4 sm:p-6 rounded-2xl">
            <Bar data={weeklyData} options={{ responsive: true }} />
          </div>
        </div>

        <div>
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-800">Expense Statistics</h2>
          <div className="bg-white shadow-lg p-4 sm:p-6 rounded-2xl">
            <Pie data={expenseData} options={{ responsive: true }} />
          </div>
        </div>
      </div>

      {/* Balance History */}
       {/* Balance History and Quick Transfer */}
       <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mt-8">
      {/* Quick Transfer */}
      <div>
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Quick Transfer</h2>
        <div className="bg-white shadow-lg p-6 rounded-2xl">
          <div className="flex items-center space-x-4 mb-6">
            {/* Profile Images */}
            <div className="flex space-x-4">
              <img
                src="/livia.png"
                alt="Profile 1"
                className="rounded-full w-12 h-12"
              />
              <img
                src="/randy.png"
                alt="Profile 2"
                className="rounded-full w-12 h-12"
              />
              <img
                src="/workman.png"
                alt="Profile 3"
                className="rounded-full w-12 h-12"
              />
              <button className="bg-gray-200 rounded-full w-12 h-12 flex items-center justify-center">
                <FaPaperPlane className="text-gray-500" />
              </button>
            </div>
          </div>
          {/* Input and Button */}
          <div className="flex items-center mt-4">
            <input
              type="text"
              placeholder="Write Amount"
              className="flex-grow border border-gray-300 p-4 rounded-lg text-gray-800"
            />
            <button className="bg-blue-500 text-white px-6 py-4 rounded-lg flex items-center ml-4">
              Send <FaPaperPlane className="ml-2" />
            </button>
          </div>
        </div>
      </div>

      {/* Balance History */}
      <div>
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Balance History</h2>
        <div className="bg-white shadow-lg p-6 rounded-2xl">
          <div className="h-64">
            <Line data={balanceData} options={balanceOptions} />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Dashboard;
