import { Header } from "./components/Header";
import { Tabs } from "./components/Tabs";
import { TodoInput } from "./components/Todoinput";
import { TodoList } from "./components/Todolist";


function App() {
  
let x=3;
  return (
    <>
<Header />
<Tabs />
<TodoList />
<TodoInput />
    </>
  )
}

export default App
