import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';

function App() {
  return (
    <>
      <Header/>
      <div className="flex">
        <Sidebar/>
      </div>
    </>
  );
}

export default App;
