import React from "react";
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import About from "./About";
import Headtail from "./HeadTail";
import Home from "./Home";

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Home/>
        
          <Route path='/' component={Home}>
            <Switch>
              <Route exact path='/about' component={About}/>
              <Route exact path='/headtail' component={Headtail}/>
            </Switch>
          </Route>       
        
      </BrowserRouter>
    </div>
  );
};

export default App;