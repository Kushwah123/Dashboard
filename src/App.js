import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Rightside from './components/Rightside';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <>
    <div className="App">
     <Sidebar/>
     <Rightside/>
    </div>
      {/* <Home/>      */}
    </>
  );
}

export default App;
