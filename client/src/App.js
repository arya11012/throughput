import './App.css';
import Graph1 from './components/Graph1';
import Graph2 from './components/Graph2';
import Header from './components/Header';
import SIdebar from './components/SIdebar';
function App() {
  return (
    <div className="App" >
      <Header/>
      <div className='flex bg-gray-700 w-90'>
        <SIdebar/>
        <div className='flex flex-col ml-20 mb-10'>
          <Graph1/>
          <Graph2/>
        </div>
      </div> 
        
    </div>
  );
}

export default App;
