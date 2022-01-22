import React from 'react'
import {useState,useReducer} from 'react';
import {States} from './States'
const Defaults={
     Title:'123',
     Desc:'3223',
     Todo:[],
}
const Reducer = () =>{
  
    const [Title, setTitle] = useState('');
    const [Desc, setDesc] = useState('');
    const [state, dispatch] = useReducer(States,Defaults);

    const hSubmit = (e) => {
      e.preventDefault();
      console.log(Title,Desc);
      if(Title&&Desc){
            const t = { id: new Date().getTime().toString(), Title, Desc };
            dispatch({type:"ADD",payload:t});
            setTitle('');
            setDesc('');
            }
        }
        return (
            <>
            <form onSubmit={hSubmit} >
            <div className="mb-3">
            <label htmlFor="title" className="form-label" >Todo Title</label>
            <input type="text" value={Title} onChange={(e) => setTitle(e.target.value)} className="form-control" />
            </div>
            <div className="mb-3">
            <label htmlFor="desc" className="form-label">Todo Description</label>
            <input type="text" value={Desc} onChange={(e) => setDesc(e.target.value)} className="form-control"  />
            </div>
            <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
            </form>
            <div>
            {state.Todo.map((t) => {
        return (
          <div key={t.id} className='item'>
            <h4>{t.Title}</h4>
            <p>{t.Desc}</p>
            <button
              onClick={() =>
                dispatch({ type:"REMOVE", payload: t.id })
              }>REMOVE</button>
            </div>
            );
        })}
        </div>
        </>        
    );
}
export default Reducer;
