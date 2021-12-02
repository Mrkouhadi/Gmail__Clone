import React, {useEffect} from 'react';
import './App.css';
import { Header, Sidebar, Mail,EmailList, SendMail, Login } from './components';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import {useSelector, useDispatch} from "react-redux";
import {selectSendMessageIsOpen} from "./features/mailSlice";
import {logIn, selectUser} from "./features/userSlice";
import {login} from "./features/userSlice";
import { auth } from './firebase';

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen)
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  // make the login persistent (it's goignto crete a cookie that save us as logged/loggedout)
  useEffect(() => {
    auth.onAuthStateChanged(user =>{
      if(user){
        // the user is logged in
        dispatch(logIn({
          displayName:user.displayName,
          email:user.email,
          photoUrl:user.photoURL,
        }))
      }
    })
    
  }, [])
  return (
    <Router>
      {!user ? (
        <Login /> 
      ) : (
        <div className="app">
          <Header/>
          <div className="app__body">
              <Sidebar/> 

              <Switch>
                  <Route path="/mail">
                    <Mail/>
                  </Route>
                  <Route path="/">
                    <EmailList/>
                  </Route>
              </Switch>
          </div>
          {sendMessageIsOpen && <SendMail />}
        </div>
      )
    }
    </Router>
  );
}

export default App;
