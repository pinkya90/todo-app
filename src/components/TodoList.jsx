import { TodoCard } from "./TodoCard";

export function TodoList(props){
    const {todos , selectedTab } = props
    
    
    const filtertodosList = selectedTab==='All'?
    todos :
    selectedTab==='completed'?
    todos.filter(val=> val.complete):
    todos.filter(val=>!val.complete)
    return(
        <>
            
          {filtertodosList.map((todo , todoIndex)=>{
            return(
                <TodoCard 
                key={todoIndex} 
                todoIndex={todos.findIndex(val=>val.input==todo.input)}
                {...props}
                todo={todo}/>
            )

          })}  
        </>
    )
}