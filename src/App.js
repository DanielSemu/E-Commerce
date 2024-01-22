
import './App.css';
import Homepage from './pages/homepage/homepage.components';
import { Link, Route, Routes } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
     <Routes>
        <Route exact path='/' Component={Homepage}/>
        <Route exact path='/Shop' Component={ShopPage}/>
     </Routes>
    </div>
  );
}

export default App;
