export const States = (state, action) =>{
    console.log(action.payload.Title,action.payload.Desc);
    if (action.type === "ADD") {
        console.log(action.payload.Title,action.payload.Desc);
        const newTodo = [...state.Todo,action.payload];
        console.log(newTodo);
        return {
            Todo :newTodo}
    }
    if (action.type === "REMOVE") { 
        const newTodo = state.Todo.filter((state) => state.id !== action.payload);
        return {Todo:newTodo}
    }
}