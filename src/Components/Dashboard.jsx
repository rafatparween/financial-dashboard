import React from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import { FaArrowDown, FaArrowUp, FaPaperPlane } from "react-icons/fa";
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
  // Weekly Activity Bar Chart Data
  const weeklyData = {
    labels: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
    datasets: [
      {
        label: "Deposit",
        data: [200, 300, 400, 350, 500, 450, 600],
        backgroundColor: "#3b82f6",
      },
      {
        label: "Withdraw",
        data: [50, 100, 200, 150, 80, 300, 250],
        backgroundColor: "#333",
      },
    ],
  };

  const weeklyOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  // Expense Donut Chart Data
  const expenseData = {
    labels: ["Entertainment", "Investment", "Bill Expense", "Others"],
    datasets: [
      {
        label: "Expense",
        data: [30, 20, 15, 35],
        backgroundColor: ["#343C6A", "#396AFF", "#FC7900", "#232323"],
        hoverOffset: 4,
      },
    ],
  };

  const expenseOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "right",
      },
    },
  };

  // Balance History Line Chart Data
  const balanceData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Balance History",
        data: [200, 300, 500, 400, 600, 750, 900, 850, 700, 650, 800, 900],
        borderColor: "#10b981",
        fill: false,
        tension: 0.1,
        borderWidth: 2,
        pointBackgroundColor: "#10b981",
      },
    ],
  };

  const balanceOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* My Cards Section */}
        <div className="xl:col-span-2">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">My Cards</h2>
            <button className="text-blue-500 font-medium hover:underline">See All</button>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="bg-gradient-to-r from-gray-800 to-black text-white p-6 rounded-2xl shadow-lg">
              <p className="text-lg font-medium">Balance</p>
              <p className="text-3xl font-bold">$5,756</p>
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
              <p className="mt-6 text-lg font-semibold">3778 ** ** 1234</p>
            </div>
            {/* Card 2 */}
            <div className="bg-white shadow-lg p-6 rounded-2xl">
              <p className="text-gray-600 text-lg font-medium">Balance</p>
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
                3778 ** ** 1234
              </p>
            </div>
          </div>
        </div>

        {/* Recent Transactions */}
        <div>
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Recent Transactions</h2>
          <div className="bg-white shadow-lg p-6 rounded-2xl space-y-4">
            {[
              {
                title: "Deposit from my Card",
                date: "28 January 2021",
                amount: "-$850",
                icon: <FaArrowDown className="text-red-500" />,
              },
              {
                title: "Deposit Paypal",
                date: "25 January 2021",
                amount: "+$2,500",
                icon: <FaArrowUp className="text-green-500" />,
              },
              {
                title: "Jemi Wilson",
                date: "21 January 2021",
                amount: "+$5,400",
                icon: <FaArrowUp className="text-green-500" />,
              },
            ].map((txn, index) => (
              <div key={index} className="flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  {txn.icon}
                  <div>
                    <p className="font-medium">{txn.title}</p>
                    <p className="text-sm text-gray-500">{txn.date}</p>
                  </div>
                </div>
                <p className="font-semibold">{txn.amount}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mt-8">
        {/* Weekly Activity Chart */}
        <div className="xl:col-span-2">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Weekly Activity</h2>
          <div className="bg-white shadow-lg p-6 rounded-2xl">
            <Bar data={weeklyData} options={weeklyOptions} />
          </div>
        </div>

        {/* Expense Statistics */}
        <div>
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Expense Statistics</h2>
          <div className="bg-white shadow-lg p-6 rounded-2xl">
            <Pie data={expenseData} options={expenseOptions} />
          </div>
        </div>
      </div>

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
                src="https://via.placeholder.com/50"
                alt="Profile 1"
                className="rounded-full w-12 h-12"
              />
              <img
                src="https://via.placeholder.com/50"
                alt="Profile 2"
                className="rounded-full w-12 h-12"
              />
              <img
                src="https://via.placeholder.com/50"
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


