import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ClickCounter from './click-counter/clickCounter';
import JottoContainer from './jotto/JottoContainer';
import ContainerComponent from './Hoc-exp/ContainerComponent';


function App() {
  return (
    <div className="App1">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
     
       <Router>
         <div>
           <h4>Welcome to app</h4>
           <Link to={'/'} className="nav-link"> Counter </Link>
           <br/>
           <Link to={'/jotto'} className="nav-link"> Jotto App </Link>
         <Switch>
              <Route exact path='/' component={ClickCounter} />
              <Route exact path='/jotto' component={JottoContainer} />
              <Route exact path='/hoc' component={ContainerComponent} />
              
          </Switch>
         </div>
      
       </Router>
      
    </div>
  );
}

export default App;
