import React,{useContext,useEffect,useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom"
import { CContext } from './App';
const Nav =()=> {
  const {State} = useContext(CContext)    
  let navStyle={
    marginBottom: 80
  };
  //useEffect is used to make the counter show value onlyis State is greater than 0
  const [Shower, setShower] = useState(false)
  {useEffect(() => {  
    
    if(State>0){
      setShower(true) 
    }
    else{
      setShower(false)
      }
  }, [State])}
        return (
          <div style={navStyle}>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark nav-back fixed-top"  >
          <Link className="navbar-brand" to="/"> Random stuff</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="true" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <Link className="nav-item nav-link " to="/">Todos </Link>
                <Link className="nav-item nav-link" to="Effect">useEffect</Link> 
                <Link className="nav-item nav-link" to="Reducer">useReducer</Link> 
                <Link className="nav-item nav-link" to="Counter">Counter</Link> 
                {Shower&&<span className="badge badge-pill badge-secondary " style={{marginLeft:0,padding:0,color:'grey'}}>{State}</span>}                  
              </div>
          </div>
        </nav>
        </div>
          );
}
 
export default Nav;