import React, {useState} from 'react';
import './App.css';
import Header from "./Header";
import Sidebar from "./Sidebar"
import Chat from "./Chat"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from "./Login";
import { useStateValue } from './StateProvider';


function App() {
  // const [state, disaptch] = useStateValue();
  // destructing
  const [{user}, dispatch] = useStateValue();


  // const [user, setUser] = useState(null);
  // this is a local but we want to use it as a global variable

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <div className="app__body">
              <Sidebar />
              <Switch>
                <Route path="/room/:roomId">
                  <Chat />
                </Route>
                <Route path="/">
                  <h1>Welcome</h1>
                </Route>
              </Switch>
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;

