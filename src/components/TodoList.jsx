import { TodoCard } from "./TodoCard";

export function TodoList(props){
    const {todos} = props
    const tab="completed"
    
    const filtertodosList = tab==='All'?
    todos :
    tab==='completed'?
    todos.filter(val=> val.complete):
    todos.filter(val=>!val.complete)
    return(
        <>
            
          {filtertodosList.map((todo , todoIndex)=>{
            return(
                <TodoCard 
                key={todoIndex} 
                todoIndex = {todoIndex}
                todo={todo}/>
            )

          })}  
        </>
    )
}