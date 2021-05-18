import './App.css';
import './Styling.css'

import SignUp from './components/signup';
import Login from './components/login';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/home';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      
      <Router>
      <Header/>
        <Switch>

        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />

          <Route path="/signup" component={SignUp} />
        </Switch>

        </Router> 

        
        
    </div>
  );
}

export default App;
