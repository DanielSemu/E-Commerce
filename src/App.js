
import './App.css';
import Homepage from './pages/homepage/homepage.components';
import { Route, Routes } from 'react-router-dom';
const HatsPage =()=>(
  <div>
    <h1>Hats Page</h1>
  </div>

)

function App() {
  return (
    <div className="App">
     <Routes>
        <Route exact path='/' Component={Homepage}/>
        <Route exact path='/hats' Component={HatsPage}/>
     </Routes>
    </div>
  );
}

export default App;
