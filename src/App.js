import './App.css';
import Dashboard from './Components/Dashboard';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';

function App() {
  return (
    <>
      <Header/>
      <div className="flex">
        <Sidebar/>
        <Dashboard/>
      </div>
    </>
  );
}

export default App;
