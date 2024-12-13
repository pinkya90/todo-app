import { useState } from "react";
import { Header } from "./components/Header";
import { Tabs } from "./components/Tabs";
import { TodoInput } from "./components/Todoinput";
import { TodoList } from "./components/Todolist";


function App() {
  
//const todos =[
  //{ input: 'Hello! Add your first todo!',complete:true},
  //{ input: 'get the groceries!',complete:false},
 // { input: 'learn how to web design!',complete:false},
  //{ input: 'say hi to gran gran',complete:true}]

const [todos, setTodos] =useState([{ input: 'Hello! Add your first todo!',complete:true}])

function handleAddTodo(newTodo){

}
function handleEditTodo(){

}
function handleDeleteTodo(){

}
  return (
    <>
<Header todos={todos}/>
<Tabs todos={todos} />
<TodoList todos={todos} />
<TodoInput />
    </>
  )
}

export default App
