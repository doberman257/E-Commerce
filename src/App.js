import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import { auth, createUserProfileDoc } from './firebase/firebase';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';

import './App.css';
import Homepage from './pages/homepage/homepage.component';
import SkateBoard from './pages/skateboard-page/skateboard.component';
import Running from './pages/running-page/running.component';
import Sneakers from './pages/sneakers-page/sneakers.component';
import Header from './components/header/header/header.component';
import ShopPage from './pages/shop/shop.component';
import SignInRegister from './pages/signin-register/signin-register.component';


class App extends React.Component {

  unsubscribeFromAuth = 0;

  componentDidMount() {

    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDoc(userAuth);

        userRef.onSnapshot(snapshot => {
          setCurrentUser({ 
              id: snapshot.id,
              ...snapshot.data()
          });
        })
      }

      setCurrentUser( userAuth);
    }) 

  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/skateboard' component={SkateBoard} />
          <Route path='/running' component={Running} />
          <Route path='/sneakers' component={Sneakers} />
          <Route path='/shop' component={ShopPage} /> 
          <Route path='/signin' render={() => this.props.currentUser ? (<Redirect to='/'/>) : (<SignInRegister/>)} />      
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
