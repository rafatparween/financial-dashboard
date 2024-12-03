import './App.css';
import Dashboard from './Components/Dashboard';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Setting from './Components/Setting';

function App() {
  return (
    <>
      <Header/>
      {/* <div className="flex">
        <Sidebar/>
        <Dashboard/>
      </div> */}
      <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          {/* Use Routes instead of Switch */}
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/settings" element={<Setting />} />
            {/* Add other routes as necessary */}
          </Routes>
        </div>
      </div>
    </Router>
    </>
  );
}

export default App;
