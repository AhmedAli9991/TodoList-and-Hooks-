import React from 'react';
import Nav from './Nav';
import{useState} from'react';
import Reducer from './Reducer';
import Counter from './Counter';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import Addtodo from './Addtodo';
import Effect from './Effect';

export const CContext = React.createContext();
function App() {
  
  const [State,setState]=useState(0);
  const increase=()=>{setState(State+1)};
  const decrease=()=>{setState(State-1)};
    

  return (
    <>
    <CContext.Provider value={{increase,decrease,State}}>
    <React.Fragment>
    <Router>
    <Nav/>
     <Switch>
   
     <Route exact path="/">
     <Addtodo />
     </Route>
     <Route exact path="/Reducer">
     <Reducer />
     </Route>
     <Route exact path="/Effect">
     <Effect />
     </Route>
     <Route exact path="/Counter">  
     <Counter />
     </Route>
      </Switch>
    </Router>
    </React.Fragment>
    </CContext.Provider>

    </>
  );
}

export default App;
