import React,{useContext} from 'react'
import { CContext } from './App';
const Counter =()=>{
    
    const {State,increase,decrease} = useContext(CContext);

    let ButtonStyle={
        width :30
   
       };
       let h6style={
           marginLeft:10
       };
    return(
        <div >
            <h3>counter</h3>
            <button className="btn btn-sm btn-success"style={ButtonStyle} onClick={increase}>+</button><h6 style={h6style}>{State}</h6><button className="btn btn-sm btn-success"style={ButtonStyle}onClick={decrease}>-</button>

        </div>
    );

}
export default Counter;