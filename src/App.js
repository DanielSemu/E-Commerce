
import './App.css';
import React from 'react';
import Homepage from './pages/homepage/homepage.components';
import {  Route, Routes } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/Header';
import SignInPage from './pages/Sign-in-and-sign-up/SignIn.pages';
import {auth} from './firebase/firebase'

class App extends React.Component {
  constructor(){
    super()
    this.state={
      currentUser:null
    }
  }
unsubscribeFromAuth =null

componentDidMount(){
  this.unsubscribeFromAuth=auth.onAuthStateChanged(user=>{
    this.setState({currentUser:user})
  })
}
componentWillUnmount(){
  this.unsubscribeFromAuth()
}
  render(){
  return (
    <div className="App">
      <Header currentUser={this.state.currentUser}/>
     <Routes>
        <Route exact path='/' Component={Homepage}/>
        <Route exact path='/Shop' Component={ShopPage}/>
        <Route exact path='/signin' Component={SignInPage}/>
     </Routes>
    </div>
  );
}
}

export default App;
