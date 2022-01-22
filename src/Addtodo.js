import React from 'react'
import {useState} from 'react';

const Addtodo = () =>{
    
    const [Title, setTitle] = useState('');
    const [Desc, setDesc] = useState('');
    const [Todo, setTodo] = useState([]);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (Title && Desc) {
        const t = { id: new Date().getTime().toString(), Title, Desc };
        setTodo([...Todo, t]);
        setTitle('');
        setDesc('');
      } else {
        console.log('empty values');
      }
    };
    return (
      <div>
        <form onSubmit={handleSubmit}>
        <div className="mb-3">
        <label htmlFor="title" className="form-label">Todo Title</label>
        <input type="text" value={Title} onChange={(e) => setTitle(e.target.value)} className="form-control" />
        </div>
        <div className="mb-3">
        <label htmlFor="desc" className="form-label">Todo Description</label>
        <input type="text" value={Desc} onChange={(e) => setDesc(e.target.value)} className="form-control"  />
        </div>
        <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
        </form>
          {Todo.map((t,key=t.id) => {
            const { id, Title, Desc } = t;
            return (
              <div key={id}>
                <h4>{Title}</h4>
                <p>{Desc}</p>
              </div>
            );
          })}

      </div>
    );
  
}
export default Addtodo;
