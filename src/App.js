import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import FirstQuestion from "./pages/FirstQuestion";
import SecondQuestion from "./pages/SecondQuestion";
import Results from "./pages/Results";

function App() { 
  return (
    <BrowserRouter>
      <Switch>    
        <Route exact path="/" component={ Home } />
        <Route exact path="/quiz/1" component={ FirstQuestion } />
        <Route exact path="/quiz/2" component={ SecondQuestion } />
        <Route exact path="/results" component={ Results } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
